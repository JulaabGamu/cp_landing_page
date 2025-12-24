"use client"

import React, { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useAnimationControls } from "motion/react"

import { cn } from "@/lib/utils"

type AnimationPhase = "idle" | "forming_column" | "scrolling_down" | "resetting"

type AnimatedListProps = {
  children: React.ReactNode
  className?: string
  stackGap?: number
  columnGap?: number
  scaleFactor?: number
  scrollDownDuration?: number
  formationDuration?: number
  maxScrollDistance?: number
  noScroll?: boolean
  hoverTrigger?: boolean
}

type AnimatedListItemProps = {
  children: React.ReactNode
  className?: string
  index: number
  listLength: number
  stackGap?: number
  columnGap?: number
  scaleFactor?: number
}

function InternalAnimatedListItem({
  children,
  className,
  index,
  listLength,
  animationPhase,
  onFormationComplete,
  stackGap = 10,
  columnGap = 100,
  scaleFactor = 0.1,
  formationDuration = 1,
  visibleItemsCount = 4,
  resetSpringStiffness = 120,
  resetSpringDamping = 20,
}: AnimatedListItemProps & {
  animationPhase: AnimationPhase
  onFormationComplete?: () => void
  formationDuration: number
  visibleItemsCount: number
  resetSpringStiffness: number
  resetSpringDamping: number
}) {
  const reverseIndex = listLength - 1 - index
  const isVisible = reverseIndex < visibleItemsCount
  const isLastItem = index === listLength - 1

  // Calculate centering offset: center the column around the middle item
  const totalColumnHeight = (listLength - 1) * columnGap
  const centerOffset = totalColumnHeight / 2

  const itemVariants = {
    initial: {
      scale: 1 + index * scaleFactor,
      y: reverseIndex * stackGap,
      opacity: isVisible ? 1 : 0,
    },
    column: {
      scale: 1,
      y: index * columnGap - centerOffset,
      opacity: 1,
    },
  }

  const target =
    animationPhase === "idle" || animationPhase === "resetting"
      ? "initial"
      : "column"

  const getTransition = () => {
    if (animationPhase === "resetting") {
      return {
        type: "spring" as const,
        stiffness: resetSpringStiffness,
        damping: resetSpringDamping,
      }
    } else {
      return { duration: formationDuration, ease: [0.4, 0, 0.2, 1] as const }
    }
  }

  const handleAnimationComplete = (definition: string) => {
    if (
      isLastItem &&
      definition === "column" &&
      animationPhase === "forming_column"
    ) {
      onFormationComplete?.()
    }
  }

  return (
    <motion.div
      key={index}
      className={cn("absolute inset-x-0 flex w-full justify-center", className)}
      variants={itemVariants}
      initial="initial"
      animate={target}
      transition={getTransition()}
      onAnimationComplete={handleAnimationComplete}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedList({
  children,
  className,
  stackGap = 20,
  columnGap = 85,
  scaleFactor = 0.05,
  scrollDownDuration = 5,
  formationDuration = 1,
  maxScrollDistance,
  noScroll = false,
  hoverTrigger = false,
}: AnimatedListProps) {
  const loopPauseDurationValue = 100
  const listResetSpringStiffness = 100
  const listResetSpringDamping = 25
  const itemResetSpringStiffness = 120
  const itemResetSpringDamping = 20
  const visibleItemsCountValue = 4

  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>("idle")
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const listControls = useAnimationControls()
  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  )
  const listLength = childrenArray.length
  const totalHeight = listLength * columnGap
  const scrollDistance = maxScrollDistance ?? totalHeight

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // On mobile, immediately fan out and stay fanned out
  useEffect(() => {
    if (isMobile && hoverTrigger && animationPhase === "idle") {
      const id = setTimeout(() => setAnimationPhase("forming_column"), 0)
      return () => clearTimeout(id)
    }
    return undefined
  }, [isMobile, hoverTrigger, animationPhase])

  // Handle hover trigger mode (desktop only)
  useEffect(() => {
    if (hoverTrigger && !isMobile) {
      const id = setTimeout(() => {
        if (isHovered && animationPhase === "idle") {
          setAnimationPhase("forming_column")
        } else if (!isHovered && animationPhase === "forming_column") {
          setAnimationPhase("resetting")
        }
      }, 0)
      return () => clearTimeout(id)
    }
    return undefined
  }, [isHovered, hoverTrigger, animationPhase, isMobile])

  useEffect(() => {
    let timer: NodeJS.Timeout
    // Only auto-trigger if not in hover mode
    if (!hoverTrigger && animationPhase === "idle") {
      timer = setTimeout(
        () => {
          setAnimationPhase("forming_column")
        },
        loopPauseDurationValue
      )
    }
    // When resetting, wait for animation then go back to idle
    if (animationPhase === "resetting") {
      timer = setTimeout(() => {
        setAnimationPhase("idle")
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [animationPhase, loopPauseDurationValue, hoverTrigger])

  const handleFormationComplete = () => {
    if (animationPhase === "forming_column") {
      if (noScroll || hoverTrigger) {
        // For hover mode, stay fanned out until mouse leaves
        if (!hoverTrigger) {
          setTimeout(() => {
            setAnimationPhase("resetting")
          }, 3000)
        }
      } else {
        setAnimationPhase("scrolling_down")
      }
    }
  }

  const handleScrollDownComplete = () => {
    if (animationPhase === "scrolling_down") setAnimationPhase("resetting")
  }

  const handleScrollUpComplete = () => {
    if (animationPhase === "resetting" && !noScroll && !hoverTrigger) setAnimationPhase("idle")
  }

  useEffect(() => {
    if (animationPhase === "scrolling_down") {
      listControls.start({
        y: scrollDistance,
        transition: {
          duration: scrollDownDuration,
          ease: [0.4, 0, 0.2, 1] as const,
        },
      })
    } else if (animationPhase === "resetting") {
      listControls.start({
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: listResetSpringStiffness,
          damping: listResetSpringDamping,
        },
      })
    } else {
      listControls.set({ y: 0 })
    }
  }, [
    animationPhase,
    listControls,
    totalHeight,
    scrollDownDuration,
    listResetSpringStiffness,
    listResetSpringDamping,
    scrollDistance,
  ])

  const handleListAnimationComplete = (definition: { y?: number }) => {
    if (definition.y === scrollDistance && animationPhase === "scrolling_down") {
      handleScrollDownComplete()
    } else if (definition.y === 0 && animationPhase === "resetting") {
      handleScrollUpComplete()
    }
  }

  return (
    <motion.div
      className={cn("relative flex h-full w-full items-center", className)}
      initial={{ y: 0 }}
      animate={listControls}
      onAnimationComplete={handleListAnimationComplete}
      onMouseEnter={() => hoverTrigger && setIsHovered(true)}
      onMouseLeave={() => hoverTrigger && setIsHovered(false)}
    >
      <AnimatePresence>
        {childrenArray.map((child, index) => (
          <InternalAnimatedListItem
            key={index}
            index={index}
            listLength={listLength}
            animationPhase={animationPhase}
            onFormationComplete={
              index === listLength - 1 ? handleFormationComplete : undefined
            }
            stackGap={stackGap}
            columnGap={columnGap}
            scaleFactor={scaleFactor}
            formationDuration={formationDuration}
            visibleItemsCount={visibleItemsCountValue}
            resetSpringStiffness={itemResetSpringStiffness}
            resetSpringDamping={itemResetSpringDamping}
          >
            {child}
          </InternalAnimatedListItem>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
