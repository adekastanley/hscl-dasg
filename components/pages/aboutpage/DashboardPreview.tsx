"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function DashboardPreview() {
	return (
		<section className="w-full max-w-5xl mx-auto px-6 pb-24 pt-12">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="relative overflow-hidden rounded-[40px] bg-primary text-primary-foreground p-8 md:p-16 text-center"
			>
				{/* Background effect (optional) */}
				<div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none" />

				<div className="relative z-10 max-w-2xl mx-auto space-y-8">
					<h2 className="text-4xl md:text-6xl font-bold tracking-tight">
						Your next success story starts here
					</h2>
					<p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
						Connect with us and discover how HSCL can help you achieve your
						health system goals.
					</p>

					<div className="flex justify-center">
						<a
							href="/contact"
							className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors"
						>
							Contact us now
							<ArrowRight className="size-5" />
						</a>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
