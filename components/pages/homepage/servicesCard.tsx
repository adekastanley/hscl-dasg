// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";

// const services = [
// 	{
// 		title: "Recruitment & Onboarding",
// 		src: "/assets/manage.jpg",
// 	},
// 	{
// 		title: "Performance & Employee Management",
// 		src: "/assets/one.jpg",
// 	},
// 	{
// 		title: "Payroll & Administration",
// 		src: "/assets/one.jpg",
// 	},
// ];

// export default function ServicesCardSection() {
// 	const containerRef = useRef<HTMLDivElement>(null);
// 	const { scrollYProgress } = useScroll({
// 		target: containerRef,
// 		offset: ["start end", "end start"],
// 	});

// 	const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
// 	const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
// 	const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);

// 	const yValues = [y1, y2, y3];

// 	return (
// 		<section
// 			ref={containerRef}
// 			className="bg-background px-6 py-32 overflow-hidden"
// 		>
// 			<div className="max-w-6xl mx-auto">
// 				<motion.h2
// 					className="mb-8 font-sans font-light text-center leading-8 lg:text-8xl text-4xl"
// 					initial={{ opacity: 0, y: 20 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 				>
// 					What We Offer
// 				</motion.h2>
// 				<motion.p
// 					className="text-center space-y-6 font-light font-sans leading-10 text-2xl"
// 					initial={{ opacity: 0, y: 20 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 				>
// 					HSCL leverages deep technical expertise and real-world experience to
// 					strengthen health systems across Africa. We provide specialized
// 					consulting and administrative solutions to optimize your workforce,
// 					including:
// 				</motion.p>

// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
// 					{services.map((service, i) => (
// 						<motion.div
// 							key={i}
// 							className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group cursor-pointer"
// 							style={{ y: yValues[i] }}
// 							initial={{ clipPath: "inset(100% 0 0 0)" }}
// 							whileInView={{ clipPath: "inset(0 0 0 0)" }}
// 							viewport={{ once: true }}
// 							transition={{
// 								duration: 1,
// 								delay: i * 0.15,
// 								ease: [0.16, 1, 0.3, 1],
// 							}}
// 							data-clickable
// 						>
// 							<motion.img
// 								src={service.src}
// 								alt={service.title}
// 								className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-50 group-hover:scale-105"
// 							/>
// 							<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
// 							<div className="absolute bottom-0 left-0 p-6 z-20">
// 								<h3 className="text-white text-xl md:text-2xl font-bold md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
// 									{service.title}
// 								</h3>
// 							</div>
// 						</motion.div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const articles = [
	{
		title: "Recruitment & Onboarding",
		category: "01",
		image: "/assets/manage.jpg",
	},
	{
		title: "Performance & Employee Management",
		category: "02",
		image: "/personal-branding-digital-marketing.jpg",
	},
	{
		title: "Payroll & Administration",
		category: "03",
		image: "/typography-trends-modern-fonts.jpg",
	},
	{
		title: "lorem ipsum dolor sit amet ",
		category: "04",
		image: "/placeholder.svg?height=200&width=300",
	},
];

export default function ServicesCardSection() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	return (
		<section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
			<div className="max-w-4xl mx-auto">
				<motion.p
					className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					What We Offer
				</motion.p>

				<div className="divide-y divide-border">
					{articles.map((article, i) => (
						<motion.a
							key={i}
							href="/about-us"
							className="group flex items-center justify-between py-6 relative"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							onMouseEnter={() => setHoveredIndex(i)}
							onMouseLeave={() => setHoveredIndex(null)}
							whileHover={{ paddingLeft: 16, paddingRight: 16 }}
							data-clickable
						>
							<div className="flex-1">
								<span className="text-xs text-muted-foreground uppercase tracking-wider">
									{article.category}
								</span>
								<h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
									{article.title}
								</h3>
							</div>
							<ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
						</motion.a>
					))}
				</div>

				{/* Floating hover image */}
				<AnimatePresence>
					{hoveredIndex !== null && (
						<motion.div
							className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{
								opacity: 1,
								scale: 1,
								x: mousePosition.x + 20,
								y: mousePosition.y - 100,
							}}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.2 }}
						>
							<img
								src={articles[hoveredIndex].image || "/placeholder.svg"}
								alt={articles[hoveredIndex].title}
								className="w-full h-auto"
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
