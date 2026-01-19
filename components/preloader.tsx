"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading time or wait for resources
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000); // 2 seconds total display time for the text

		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence mode="wait">
			{isLoading && (
				<motion.div
					className="fixed inset-0 z-9999 flex items-center justify-center bg-transparent pointer-events-none"
					initial={{ opacity: 1 }}
					exit={{ opacity: 1 }} // Keep it visible during the wipes
				>
					{/* Background Layer - This is what the user sees initially */}
					<motion.div
						className="absolute inset-0 bg-background"
						exit={{
							y: "-100%",
							transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
						}}
					>
						{/* Text Container */}
						<div className="flex items-center justify-center h-full">
							<motion.h1
								className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground relative overflow-hidden"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{
									opacity: 0,
									y: -50,
									transition: { duration: 0.4 },
								}}
							>
								{/* Base Text */}
								<span className="text-muted-foreground/20">HSCL</span>

								{/* Highlight Overlay */}
								<motion.span
									className="absolute inset-0 text-foreground"
									initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
									animate={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
									}}
									transition={{
										duration: 1.5,
										ease: "easeInOut",
									}}
								>
									HSCL
								</motion.span>
							</motion.h1>
						</div>
					</motion.div>

					{/* Secondary Wipe Layer (Accent) */}
					<motion.div
						className="absolute inset-0 bg-primary z-[-1]"
						initial={{ y: "0%" }}
						exit={{
							y: "-100%",
							transition: {
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.1, // Slight delay for the "following" effect
							},
						}}
					/>

					{/* Tertiary Wipe Layer (Optional, for depth) */}
					<motion.div
						className="absolute inset-0 bg-black z-[-2]"
						initial={{ y: "0%" }}
						exit={{
							y: "-100%",
							transition: {
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.2,
							},
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
