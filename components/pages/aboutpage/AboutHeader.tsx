"use client";

import { motion } from "motion/react";

export default function AboutHeader() {
	return (
		<section className="w-full  mx-auto pt-16 md:pt-24 space-y-6 px-6  h-[90dvh] flex items-center min-h-[90dvh] ">
			<section className=" w-full max-w-7xl mx-auto">
				{/* Top Nav Pill */}
				<div className="flex items-center gap-2">
					<span className="px-3 py-1 rounded-full border border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground">
						About Us
					</span>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="space-y-6"
				>
					<h1 className="text-5xl md:text-8xl font-bold tracking-tight text-foreground text-balance">
						Who We Are
					</h1>
					<p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
						HSCL strengthens health systems through evidence-based advisory,
						programme delivery, and sustainable solutions across Africa. We
						bring together local insight and global best practices.
					</p>
				</motion.div>
			</section>
		</section>
	);
}
