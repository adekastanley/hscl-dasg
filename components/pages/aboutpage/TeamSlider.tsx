"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const team = [
	{
		id: 1,
		name: "Dr. Alozie Ananaba",
		role: "Founding Partner",
		image: "/placeholder-user-1.jpg",
		bio: "Leading health systems transformation with over 20 years of experience.",
	},
	{
		id: 2,
		name: "Dr. Nnenna Onyewuchi",
		role: "Founding Partner",
		image: "/placeholder-user-2.jpg",
		bio: "Expert in public health policy and sustainable development strategies.",
	},
	{
		id: 3,
		name: "John Doe",
		role: "Senior Consultant",
		image: "/placeholder-user-3.jpg",
		bio: "Specializing in health financing and resource optimization.",
	},
	{
		id: 4,
		name: "Jane Smith",
		role: "Program Manager",
		image: "/placeholder-user-4.jpg",
		bio: "Driving operational excellence in large-scale health interventions.",
	},
];

export default function TeamSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % team.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
	};

	return (
		<section className="w-full max-w-5xl mx-auto space-y-12 px-6 py-12">
			<div className="flex items-end justify-between border-b border-border pb-6">
				<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
					Our Team
				</h2>

				<div className="flex items-center gap-4">
					{/* Navigation Buttons */}
					<div className="flex gap-2">
						<button
							onClick={prevSlide}
							className="size-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
							aria-label="Previous member"
						>
							<ArrowLeft className="size-5" />
						</button>
						<button
							onClick={nextSlide}
							className="size-12 rounded-full border border-border bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
							aria-label="Next member"
						>
							<ArrowRight className="size-5" />
						</button>
					</div>
				</div>
			</div>

			{/* Slider Content */}
			<div className="relative overflow-hidden min-h-[500px] md:min-h-[400px]">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.5, ease: "circOut" }}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center h-full"
					>
						{/* Image Side */}
						<div className="relative aspect-3/4 md:aspect-square w-full max-w-md mx-auto rounded-[32px] overflow-hidden bg-muted">
							{/* Placeholder for Image */}
							<div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
								<span className="font-bold text-4xl text-muted-foreground/20">
									{team[currentIndex].name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</span>
							</div>
						</div>

						{/* Text Side */}
						<div className="space-y-6">
							<div className="space-y-2">
								<h3 className="text-3xl md:text-4xl font-bold">
									{team[currentIndex].name}
								</h3>
								<p className="text-xl text-primary font-medium">
									{team[currentIndex].role}
								</p>
							</div>

							<p className="text-lg text-muted-foreground leading-relaxed">
								{team[currentIndex].bio}
							</p>

							<div className="pt-4">
								<button className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors">
									View Full Profile
									<ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</button>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* "View All" Link at Bottom */}
			<div className="flex justify-center pt-8">
				<a
					href="#"
					className="inline-flex items-center gap-2 text-sm font-semibold border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-all"
				>
					View All Team Members -&gt;
				</a>
			</div>
		</section>
	);
}
