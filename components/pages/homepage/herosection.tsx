"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useAuthStore } from "@/lib/store";
import { Variants } from "motion/react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
// import { HeroHeader } from "@/components/header";
import { MagneticButton } from "@/components/ui/magneticButton";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const heroContent = [
	{
		title: (
			<>
				HSCL People &
				<br />
				Recruitment Platform
			</>
		),
		description:
			"A unified digital system for recruitment, leave, performance, probation, and payroll management - designed to support HSCL teams with clarity, transparency, and efficiency.",
		theme: "blue", // Default theme
	},
	{
		title: "Smarter Way of Managing People",
		description:
			"This platform is designed to support you in your daily work - making recruitment, reviews, approvals, and payroll simpler and more transparent.",
		theme: "green", // Green accent theme
	},
];
const transitionVariants: { item: Variants } = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};
const logoCLoud = [
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/bmgf-logo.jpg",
		name: "Bill & Melinda Gates Foundation",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/usaid.jpg",
		name: "USAID",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Department_for_Intenational_Development.jpg",
		name: "Department for International Development",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/TheGlobalFund.jpg",
		name: "The Global Fund",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Afican_Risk_Capacity.png",
		name: "African Risk Capacity",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Gavi.jpg",
		name: "Gavi",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Malaria.jpg",
		name: "Malaria Consortium",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/CDC.jpg",
		name: "CDC",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Federal_ministry_of_health_Nigeria.jpg",
		name: "Federal Ministry of Health Nigeria",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Clinton_Health_Access_Initiative.jpg",
		name: "Clinton Health Access Initiative",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Cristian_aid.jpg",
		name: "Christian Aid",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Results_for_development.jpg",
		name: "Results for Development",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Caritas.jpg",
		name: "Caritas Nigeria",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/HP.jpg",
		name: "Health Policy Plus",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Intra_Health.jpg",
		name: "IntraHealth International",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Maternal_and_child_Survival.jpg",
		name: "Maternal and Child Survival",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Ministry_of_Health_Serra_Leone.png",
		name: "Ministry of Health Sierra Leone",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Society_of_family_health.jpg",
		name: "Society for Family Health",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/NACA.jpg",
		name: "NACA",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Unicef.jpg",
		name: "UNICEF",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Pepfar.jpg",
		name: "PEPFAR",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/The_World_bank.jpg",
		name: "The World Bank",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Unitaid.jpg",
		name: "UNITAID",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Primary_Health.jpg",
		name: "National Primary Healthcare Development Agency",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/Privat_Sector.jpg",
		name: "Private Sector Health Alliance of Nigeria",
	},
	{
		url: "https://hscgroup.org/wp-content/uploads/2020/03/United_Nations.jpg",
		name: "United Nations Foundation",
	},
];
export default function HeroSection() {
	const { isAuthenticated, toggleAuth, isAdmin, toggleAdmin } = useAuthStore();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % heroContent.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const isGreen = heroContent[currentIndex].theme === "green";

	return (
		<>
			{/* <HeroHeader /> */}
			<main className="overflow-hidden min-h-screen ">
				<div
					aria-hidden
					className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
				>
					<div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
					<div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
					<div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				</div>
				<section className="relative flex min-h-screen w-full flex-col  justify-center px-6 pb-16 pt-32 md:px-12 md:pb-24">
					{/* Placeholder Background mimicking Shaders */}
					<motion.div
						animate={{
							backgroundColor: isGreen ? "#dcfce7" : "#e0c8b3", // Light green vs original beige
						}}
						transition={{ duration: 1 }}
						className="absolute inset-0 -z-10 h-full w-full"
					>
						<motion.div
							animate={{
								background: isGreen
									? "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2), transparent 50%)" // Green radial
									: "radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.2), transparent 50%)", // Blue radial
							}}
							transition={{ duration: 1 }}
							className="absolute inset-0"
						/>
						<motion.div
							animate={{
								background: isGreen
									? "linear-gradient(to right, rgba(225, 145, 54, 0.3), rgba(22, 163, 74, 0.3))" // Green linear
									: "linear-gradient(to right, rgba(225, 145, 54, 0.3), rgba(0, 102, 255, 0.3))", // Orange/Blue linear
							}}
							transition={{ duration: 1 }}
							className="absolute inset-0"
						/>
						<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-background to-transparent" />
					</motion.div>

					<div className="max-w-4xl z-10 ">
						<div className="mb-4 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1.5 backdrop-blur-md duration-700">
							<p className="font-mono text-xs text-foreground/90">
								HLSC & Sanhdef
							</p>
						</div>
						<div className="relative mb-6 min-h-[300px] ">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentIndex}
									initial="hidden"
									animate="visible"
									exit="exit"
									// className="text-center" //test update
									variants={{
										hidden: { opacity: 0 },
										visible: {
											opacity: 1,
											transition: {
												staggerChildren: 0.1,
											},
										},
										exit: {
											opacity: 0,
											transition: {
												duration: 0.2, // Quick fade out for the container
												when: "afterChildren", // Wait for children to anim out? No, just fade out.
											},
										},
									}}
								>
									<motion.h1
										variants={{
											hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, // Add blur for smoother feeling
											visible: {
												opacity: 1,
												y: 0,
												filter: "blur(0px)",
												transition: { duration: 0.5, ease: "easeOut" },
											},
											exit: {
												opacity: 0,
												y: -20,
												filter: "blur(10px)",
												transition: { duration: 0.3, ease: "easeIn" },
											},
										}}
										className="font-sans text-6xl font-light leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl"
									>
										<span className="text-balance">
											{heroContent[currentIndex].title}
										</span>
									</motion.h1>
									<motion.p
										variants={{
											hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
											visible: {
												opacity: 1,
												y: 0,
												filter: "blur(0px)",
												transition: { duration: 0.5, ease: "easeOut" },
											},
											exit: {
												opacity: 0,
												y: -20,
												filter: "blur(10px)",
												transition: { duration: 0.3, ease: "easeIn" },
											},
										}}
										className="mt-8 mb-8 max-w-xl text-lg leading-relaxed text-foreground/90 md:text-xl"
									>
										<span className="text-pretty">
											{heroContent[currentIndex].description}
										</span>
									</motion.p>
								</motion.div>
							</AnimatePresence>
						</div>
						<div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 duration-1000 delay-300 sm:flex-row sm:items-center">
							<MagneticButton size="lg" variant="primary" onClick={toggleAuth}>
								Toggle auth {isAuthenticated ? "(On)" : "(Off)"}
							</MagneticButton>
							<MagneticButton
								size="lg"
								variant="secondary"
								onClick={toggleAdmin}
							>
								Toggle admin {isAdmin ? "(On)" : "(Off)"}
							</MagneticButton>
						</div>
					</div>
				</section>
				<section className="bg-background pb-16 md:pb-32">
					<div className="group relative m-auto max-w-6xl px-6">
						<div className="flex flex-col items-center md:flex-row">
							<div className="md:max-w-44 md:border-r md:pr-6">
								<p className="text-end text-sm">Our Clients</p>
							</div>
							<div className="relative py-6 md:w-[calc(100%-11rem)]">
								<InfiniteSlider speedOnHover={20} speed={40} gap={112}>
									{logoCLoud.map((item, index) => {
										return (
											<div key={index} className="flex">
												<img
													className="mx-auto h-12 w-fit dark:invert"
													src={item.url}
													alt={item.name}
													height="24"
													width="auto"
												/>
											</div>
										);
									})}
								</InfiniteSlider>

								<div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
								<div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
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
			</main>
		</>
	);
}
