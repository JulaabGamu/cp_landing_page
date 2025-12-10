import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="overflow-hidden py-16 relative">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Trusted by students at</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={150}>
                            <div className="flex items-center">
                                <img
                                    className="mx-auto h-28 sm:h-28 md:h-24 w-auto dark:invert object-contain"
                                    src="/nus.png"
                                    alt="NUS Logo"
                                />
                            </div>

                            <div className="flex items-center">
                                <img
                                    className="mx-auto h-8 sm:h-10 md:h-12 w-auto dark:invert object-contain"
                                    src="/ntu.png"
                                    alt="NTU Logo"
                                />
                            </div>

                            <div className="flex items-center">
                                <img
                                    className="mx-auto h-8 sm:h-10 md:h-12 w-auto dark:invert object-contain"
                                    src="/smu.png"
                                    alt="SMU Logo"
                                />
                            </div>
                        </InfiniteSlider>

                        {/* White gradients removed for transparency */}
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
