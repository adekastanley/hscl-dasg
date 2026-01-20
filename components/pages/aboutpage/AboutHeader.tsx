"use client";

import { motion } from "motion/react";

export default function AboutHeader() {
	return (
		<section className="max-sm:pb-40 w-full relative bg-no-repeat  mx-auto pt-16 md:pt-24 space-y-6 px-6  h-[90dvh] flex items-center min-h-[90dvh]  bg-[url(/assets/ab.jpg)] bg-cover bg-center  mask-[linear-gradient(to_bottom,black_80%,transparent_100%)] ">
			{/* <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background  to-transparent" /> */}
			<section className=" w-full max-w-6xl mx-auto">
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
