'use client';
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import { motion, AnimatePresence } from 'motion/react';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ['latin'], weight: ['300', '400', '500'] });

const features = [
	{
		label: 'Transcription',
		href: '#transcription',
		icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
	},
	{
		label: 'Organization',
		href: '#organization',
		icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
	},
	{
		label: 'AI Intelligence',
		href: '#ai-features',
		icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
	},
];

export function Header() {
	const scrolled = useScroll(10);
	const [featuresOpen, setFeaturesOpen] = useState(false);
	const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const frame = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(frame);
	}, []);

	useEffect(() => {
		if (featuresOpen && buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			setDropdownPosition({
				top: rect.bottom + 8,
				left: rect.left,
			});
		}
	}, [featuresOpen, scrolled]);

	const handleFeatureClick = (href: string) => {
		setFeaturesOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<header
				className={cn(
					'fixed z-[100] mx-auto w-full max-w-5xl border-b border-transparent left-1/2 -translate-x-1/2 transition-all duration-500 ease-out',
					{
						'top-0 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-xl md:top-4 md:max-w-4xl md:shadow md:rounded-full text-foreground':
							scrolled,
						'top-4 md:top-6 text-white': !scrolled,
					},
				)}
			>
				<nav
					className={cn(
						'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
						{
							'md:pl-6 md:pr-2': scrolled,
						},
					)}
				>
					<Link
						href="/"
						className={cn(
							"font-semibold tracking-tight transition-all duration-300 flex items-center gap-2 cursor-pointer hover:opacity-80",
							scrolled ? "text-lg" : "text-2xl"
						)}
					>
						{scrolled ? (
							<img src="/black.svg" alt="" className="h-5 w-5" />
						) : (
							<img src="/white.svg" alt="" className="h-7 w-7" />
						)}
						ClassPartner
					</Link>
					<div className={cn(
						"hidden items-center md:flex transition-all duration-300",
						scrolled ? "text-sm gap-1" : "text-xl gap-2"
					)}>
						{/* Features Dropdown Trigger */}
						<button
							ref={buttonRef}
							onClick={() => setFeaturesOpen(!featuresOpen)}
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								"rounded-full transition-all duration-300 flex items-center gap-1",
								!scrolled ? "text-white hover:text-white/80 hover:bg-white/10 text-xl" : "text-sm"
							)}
						>
							Features
							<svg
								className={cn("w-4 h-4 transition-transform duration-200", featuresOpen && "rotate-180")}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						<a
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								"rounded-full transition-all duration-300",
								!scrolled ? "text-white hover:text-white/80 hover:bg-white/10 text-xl" : "text-sm"
							)}
							href="/about"
						>
							About Us
						</a>

						<Button
							className={cn(
								"rounded-full transition-all duration-300 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] hover:opacity-90 border-0 text-white",
								scrolled ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
							)}
							onClick={() => {
								window.scrollTo({ top: 0, behavior: 'smooth' });
								// Dispatch custom event to open waitlist form
								setTimeout(() => {
									window.dispatchEvent(new CustomEvent('openWaitlistForm'));
								}, 300);
							}}
						>
							Join Waitlist
						</Button>
					</div>
				</nav>
			</header>

			{/* Dropdown Portal - rendered outside the header to avoid blur stacking */}
			{mounted && createPortal(
				<AnimatePresence>
					{featuresOpen && (
						<motion.div
							initial={{ opacity: 0, y: -10, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -10, scale: 0.95 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className={`fixed z-[60] w-64 rounded-2xl bg-white/70 backdrop-blur-2xl border border-gray-200/50 shadow-2xl overflow-hidden ${workSans.className}`}
							style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
						>
							<div className="p-2">
								{features.map((feature, i) => (
									<button
										key={i}
										onClick={() => handleFeatureClick(feature.href)}
										className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100/80 transition-colors text-left group"
									>
										<div className="w-5 h-5 flex items-center justify-center text-blue-500 shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
											</svg>
										</div>
										<span className="font-normal text-gray-800 text-sm">{feature.label}</span>
									</button>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body
			)}
		</>
	);
}

export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
	<svg viewBox="0 0 84 24" fill="currentColor" {...props}>
		<path d="M45.035 23.984c-1.34-.062-2.566-.441-3.777-1.16-1.938-1.152-3.465-3.187-4.02-5.36-.199-.784-.238-1.128-.234-2.058 0-.691.008-.87.062-1.207.23-1.5.852-2.883 1.852-4.144.297-.371 1.023-1.09 1.41-1.387 1.399-1.082 2.84-1.68 4.406-1.816.536-.047 1.528-.02 2.047.054 1.227.184 2.227.543 3.106 1.121 1.277.84 2.5 2.184 3.367 3.7.098.168.172.308.172.312-.004 0-1.047.723-2.32 1.598l-2.711 1.867c-.61.422-2.91 2.008-2.993 2.062l-.074.047-1-1.574c-.55-.867-1.008-1.594-1.012-1.61-.007-.019.922-.648 2.188-1.476 1.215-.793 2.2-1.453 2.191-1.46-.02-.032-.508-.27-.691-.34a5 5 0 0 0-.465-.13c-.371-.09-1.105-.125-1.426-.07-1.285.219-2.336 1.3-2.777 2.852-.215.761-.242 1.636-.074 2.355.129.527.383 1.102.691 1.543.234.332.727.82 1.047 1.031.664.434 1.195.586 1.969.555.613-.023 1.027-.129 1.64-.426 1.184-.574 2.16-1.554 2.828-2.843.122-.235.208-.372.227-.368.082.032 3.77 1.938 3.79 1.961.034.032-.407.93-.696 1.414a12 12 0 0 1-1.051 1.477c-.36.422-1.102 1.14-1.492 1.445a9.9 9.9 0 0 1-3.23 1.684 9.2 9.2 0 0 1-2.95.351M74.441 23.996c-1.488-.043-2.8-.363-4.066-.992-1.687-.848-2.992-2.14-3.793-3.774-.605-1.234-.863-2.402-.863-3.894.004-1.149.176-2.156.527-3.11.14-.378.531-1.171.75-1.515 1.078-1.703 2.758-2.934 4.805-3.524.847-.242 1.465-.332 2.433-.351 1.032-.024 1.743.055 2.48.277l.31.09.007 2.48c.004 1.364 0 2.481-.008 2.481a1 1 0 0 1-.12-.055c-.688-.347-2.09-.488-2.962-.296-.754.167-1.296.453-1.785.945a3.7 3.7 0 0 0-1.043 2.11c-.047.382-.02 1.109.055 1.437a3.4 3.4 0 0 0 .941 1.738c.75.75 1.715 1.102 2.875 1.05.645-.03 1.118-.14 1.563-.366q1.721-.864 2.02-3.145c.035-.293.042-1.266.042-7.957V0H84l-.012 8.434c-.008 7.851-.011 8.457-.054 8.757-.196 1.274-.586 2.25-1.301 3.243-1.293 1.808-3.555 3.07-6.145 3.437-.664.098-1.43.14-2.047.125M9.848 23.574a14 14 0 0 1-1.137-.152c-2.352-.426-4.555-1.781-6.117-3.774-.27-.335-.75-1.05-.95-1.406-1.156-2.047-1.695-4.27-1.64-6.77.047-1.995.43-3.66 1.23-5.316.524-1.086 1.04-1.87 1.793-2.715C4.567 1.72 6.652.535 8.793.171 9.68.02 10.093 0 12.297 0h1.789v5.441l-.961.016c-2.36.04-3.441.215-4.441.719-.836.414-1.278.879-1.895 1.976-.219.399-.535 1.02-.535 1.063 0 .02 1.285.027 3.918.027h3.914v5.113h-3.914c-2.54 0-3.918.008-3.918.028 0 .05.254.597.441.953.344.656.649 1.086 1.051 1.48.668.657 1.356.985 2.445 1.16.645.106 1.274.145 2.61.16l1.285.016v5.442l-2.055-.004a120 120 0 0 1-2.183-.016M16.469 14.715c0-5.504.011-9.04.031-9.29a5.54 5.54 0 0 1 1.527-3.48c.778-.82 1.922-1.457 3.118-1.734C21.915.035 22.422 0 24.39 0h1.652v4.914h-1.426c-1.324 0-1.445.004-1.644.055-.739.191-1.059.699-1.106 1.754l-.015.355h4.191v4.914h-4.184v11.602h-5.39ZM27.023 14.727c0-5.223.012-9.04.028-9.278.129-1.98 1.234-3.68 3.012-4.62.87-.462 1.777-.716 2.851-.802A61 61 0 0 1 34.945 0h1.649v4.914h-1.426c-1.32 0-1.441.004-1.64.055-.739.191-1.063.699-1.106 1.754l-.02.355h4.192v4.914H32.41v11.602h-5.387ZM55.48 15.406V7.22h4.66v1.363c0 1.3.005 1.363.051 1.363.04 0 .075-.054.133-.203.38-.98.969-1.68 1.711-2.031.563-.266 1.422-.43 2.492-.48l.414-.02v4.914l-.414.035c-.738.063-1.597.195-2.058.313-.297.082-.688.28-.875.449-.324.289-.532.703-.625 1.254-.094.547-.098.879-.098 5.144v4.274h-5.39Zm0 0" />
	</svg>
);
