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

	return (
		<>
			{/* <HeroHeader /> */}
			<main className="overflow-hidden">
				<div
					aria-hidden
					className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
				>
					<div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
					<div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
					<div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				</div>
				<section>
					<div className="relative pt-24 md:pt-36">
						<AnimatedGroup
							variants={{
								container: {
									visible: {
										transition: {
											delayChildren: 1,
										},
									},
								},
								item: {
									hidden: {
										opacity: 0,
										y: 20,
									},
									visible: {
										opacity: 1,
										y: 0,
										transition: {
											type: "spring",
											bounce: 0.3,
											duration: 2,
										},
									},
								},
							}}
							className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
						>
							{/* <Image
								src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
								alt="background"
								className="hidden size-full dark:block"
								width="3276"
								height="4095"
							/> */}
							{null}
						</AnimatedGroup>

						<div
							aria-hidden
							className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
						/>

						<div className="mx-auto max-w-7xl px-6">
							<div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
								<AnimatedGroup variants={transitionVariants}>
									<div className="flex flex-col items-center gap-4">
										<button
											onClick={toggleAuth}
											className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 cursor-pointer"
										>
											<span className="text-foreground text-sm">
												click to toggle auth = {isAuthenticated.toString()}
											</span>
											<span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

											<div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
												<div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
													<span className="flex size-6">
														<ArrowRight className="m-auto size-3" />
													</span>
													<span className="flex size-6">
														<ArrowRight className="m-auto size-3" />
													</span>
												</div>
											</div>
										</button>

										<button
											onClick={toggleAdmin}
											className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 cursor-pointer"
										>
											<span className="text-foreground text-sm">
												click to toggle admin = {isAdmin.toString()}
											</span>
											<span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

											<div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
												<div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
													<span className="flex size-6">
														<ArrowRight className="m-auto size-3" />
													</span>
													<span className="flex size-6">
														<ArrowRight className="m-auto size-3" />
													</span>
												</div>
											</div>
										</button>
									</div>
								</AnimatedGroup>

								<TextEffect
									preset="fade-in-blur"
									speedSegment={0.3}
									as="h1"
									className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
								>
									Building Safer, Healthier, and More Resilient Communities
								</TextEffect>
								{/* <TextEffect
									per="line"
									preset="fade-in-blur"
									speedSegment={0.3}
									delay={0.5}
									as="p"
									className="mx-auto mt-8 max-w-2xl text-balance text-lg"
								>
									At HSCL we deliver evidence-based health solutions, technical
									advisory services, and programme implementation support that
									strengthen health outcomes and accelerate sustainable impact.
									Collaborating with governments, partners, and institutions to
									improve lives.
								</TextEffect> */}

								<AnimatedGroup
									variants={{
										container: {
											visible: {
												transition: {
													staggerChildren: 0.05,
													delayChildren: 0.75,
												},
											},
										},
										...transitionVariants,
									}}
									className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
								>
									<div
										key={1}
										className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
									>
										<Button
											asChild
											size="lg"
											className="rounded-xl px-5 text-base"
										>
											<Link href="#link">
												<span className="text-nowrap">Our services</span>
											</Link>
										</Button>
									</div>
									<Button
										key={2}
										asChild
										size="lg"
										variant="ghost"
										className="h-10.5 rounded-xl px-5"
									>
										<Link href="#link">
											<span className="text-nowrap">Request a demo</span>
										</Link>
									</Button>
								</AnimatedGroup>
							</div>
						</div>

						<AnimatedGroup
							variants={{
								container: {
									visible: {
										transition: {
											staggerChildren: 0.05,
											delayChildren: 0.75,
										},
									},
								},
								...transitionVariants,
							}}
						>
							<div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
								<div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
									<Image
										className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
										src="/assets/one.jpg"
										alt="app screen"
										width="2700"
										height="1440"
									/>
									<Image
										className="z-2 border-border/25  relative rounded-2xl border dark:hidden"
										src="/assets/one.jpg"
										alt="app screen"
										width="2700"
										height="1440"
									/>
								</div>
							</div>
						</AnimatedGroup>
					</div>
				</section>
				<section className="bg-background pb-16 md:pb-32">
					<div className="group relative m-auto max-w-6xl px-6">
						<div className="flex flex-col items-center md:flex-row">
							<div className="md:max-w-44 md:border-r md:pr-6">
								<p className="text-end text-sm">Powering the best teams</p>
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
