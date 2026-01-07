"use client";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
type ProductTeaserCardProps = {
	headline?: string;
	subheadline?: string;
	description?: string;

	posterSrc?: string;
	primaryButtonText?: string;
	primaryButtonHref?: string;
	secondaryButtonText?: string;
	secondaryButtonHref?: string;
};

export default function AboutHero(props: ProductTeaserCardProps) {
	const {
		headline = "HSCL",
		subheadline = "Strengthening health systems through evidence-based advisory, programme delivery, and sustainable solutions across Africa.",
		// description = "Strengthening health systems through evidence-based advisory, programme delivery, and sustainable solutions across Africa.",

		primaryButtonText = "Contact Us",
		primaryButtonHref = "",
		secondaryButtonText = "Other button",
		secondaryButtonHref = "",
	} = props;

	// @return
	return (
		<section className="w-full px-8 pt-32 pb-16">
			<div className="max-w-7xl mx-auto ">
				<div className="grid grid-cols-12 gap-2 ">
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 0.8,
							ease: [0.645, 0.045, 0.355, 1],
						}}
						className="col-span-12 lg:col-span-6 bg-[#e9e9e9] rounded-[40px] p-12 lg:p-16 flex flex-col justify-end md:aspect-square  overflow-hidden"
					>
						<h1
							className="text-4xl md:text-[56px]  md:leading-[60px] tracking-tight  max-w-[520px] mb-6"
							style={{
								fontWeight: "500",
								fontFamily: "var(--font-figtree), Figtree",
							}}
						>
							{headline}
						</h1>

						<p
							className="text-lg leading-7 text-[#404040] max-w-[520px] mb-6"
							style={{
								fontFamily: "var(--font-figtree), Figtree",
							}}
						>
							{subheadline}
						</p>

						<div className="max-w-[520px] mb-0">
							<p
								className="text-base leading-5"
								style={{
									display: "none",
								}}
							>
								{/* {description} */}
							</p>
						</div>

						<ul className="flex gap-1.5 flex-wrap mt-10">
							<li>
								<a
									href={primaryButtonHref}
									onClick={(e) => e.preventDefault()}
									className="block cursor-pointer text-white bg-[#0988f0] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
									style={{
										background: "#156d95",
									}}
								>
									{primaryButtonText}
								</a>
							</li>
							<li>
								<a
									href={secondaryButtonHref}
									onClick={(e) => e.preventDefault()}
									className="block cursor-pointer text-[#202020] border border-[#202020] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
								>
									{secondaryButtonText}
								</a>
							</li>
						</ul>
					</motion.div>

					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 0.8,
							ease: [0.645, 0.045, 0.355, 1],
							delay: 0.2,
						}}
						className="col-span-12 lg:col-span-6 bg-white rounded-[40px] flex justify-center items-center aspect-square overflow-hidden"
						style={{
							backgroundImage:
								"url(https://storage.googleapis.com/storage.magicpath.ai/user/282171029206482944/assets/882ef3dd-3459-4fd8-a939-52ceada51d5c.png)",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							opacity: "1",
						}}
					></motion.div>
				</div>
			</div>
		</section>
	);
}
