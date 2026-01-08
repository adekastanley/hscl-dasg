"use client";
import { useInView } from "motion/react";

import { ServiceItem } from "./ServiceItem";
import { TextEffect } from "@/components/ui/text-effect";
import { useRef } from "react";

export default function Services() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	return (
		<section className="py-12 md:py-20">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<div
					className=" z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12 "
					ref={ref}
				>
					<h2 className="text-balance font-light	top-44 font-sans text-4xl lg:text-8xl">
						What You Can Do on the Platform
					</h2>
					{/* <p className="text-xl leading-10">
						At HSCL, we deliver a broad suite of health systems and development
						consulting services tailored to meet the evolving needs of
						governments, donors, NGOs, and health partners across Africa. Our
						team combines deep technical expertise with real-world experience to
						design and implement solutions that strengthen health systems,
						inform policy, and improve outcomes.
					</p> */}
					<TextEffect
						className="w-full leading-10 text-xl"
						per="word"
						as="h3"
						preset="slide"
						trigger={isInView}
					>
						At HSCL, we deliver a broad suite of health systems and development
						consulting services tailored to meet the evolving needs of
						governments, donors, NGOs, and health partners across Africa. Our
						team combines deep technical expertise with real-world experience to
						design and implement solutions that strengthen health systems,
						inform policy, and improve outcomes.
					</TextEffect>
				</div>

				<ServiceItem
					title="Recruitment & Onboarding"
					description="Manage the full recruitment lifecycle—from publishing vacancies and shortlisting candidates to automating probation reviews—ensuring a seamless, evidence-based confirmation process for new hires."
				/>

				<ServiceItem
					title="Performance & Employee Management"
					description="Standardize annual goal setting and KPIs while streamlining day-to-day requests like leave management, ensuring standardized reviews alongside transparent, real-time tracking of employee time and attendance."
				/>

				<ServiceItem
					title="Payroll & Administration"
					description="Integrate payroll directly with HR records to automate allowances, deductions, and processing, reducing manual errors and delivering accurate, timely compensation alongside comprehensive audit trails."
				/>

				{/* <div className="h-screen"></div>
				<div className="h-screen"></div> */}
			</div>
		</section>
	);
}
