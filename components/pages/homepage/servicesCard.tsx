"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const services = [
	{
		title: "Recruitment & Onboarding",
		src: "/assets/one.jpg",
	},
	{
		title: "Performance & Employee Management",
		src: "/assets/one.jpg",
	},
	{
		title: "Payroll & Administration",
		src: "/assets/one.jpg",
	},
];

export default function ServicesCardSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
	const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);

	const yValues = [y1, y2, y3];

	return (
		<section
			ref={containerRef}
			className="bg-background px-6 py-32 overflow-hidden"
		>
			<div className="max-w-6xl mx-auto">
				<motion.p
					className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					Showcase
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
					{services.map((service, i) => (
						<motion.div
							key={i}
							className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group cursor-pointer"
							style={{ y: yValues[i] }}
							initial={{ clipPath: "inset(100% 0 0 0)" }}
							whileInView={{ clipPath: "inset(0 0 0 0)" }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay: i * 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
							data-clickable
						>
							<motion.img
								src={service.src}
								alt={service.title}
								className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-50 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
							<div className="absolute bottom-0 left-0 p-6 z-20">
								<h3 className="text-white text-xl md:text-2xl font-bold md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
									{service.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
