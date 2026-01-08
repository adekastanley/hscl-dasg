"use client";

import { motion } from "motion/react";

export function Extras() {
	const steps = [
		{
			number: "01",
			title: "Why It Matters",
			description:
				"This platform reduces manual tracking and compliance risks by improving transparency across all HR processes to ensure consistent documentation. With built-in audit trails and self-service access, it strengthens accountability and empowers staff while supporting data-driven management decisions.",
		},
		{
			number: "02",
			title: "How It Works",
			description:
				"Access is strictly role-based, meaning staff, managers, and finance teams only see what applies to them. Users log in to submit, review, or approve requests, with every action recorded and traceable in real-time, ensuring a seamless flow from initiation to completion.",
		},
		{
			number: "03",
			title: "Who It's For",
			description:
				"Designed for the entire HSCL ecosystem to ensure clarity and security. Staff manage their own records, Line Managers and State Team Leads oversee approvals, while HR and Finance teams handle processing and compliance. Project Managers gain visibility into resource allocation, keeping everyone aligned.",
		},
	];

	return (
		<section className="py-24 px-6 bg-background font-sans">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="text-5xl md:text-6xl lg:text-8xl font-medium mb-6 text-balance "
					>
						Streamlined for Impact
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg text-muted-foreground max-w-2xl mx-auto"
					>
						A unified system designed to enhance transparency, efficiency, and
						accountability across every level of the organization.
					</motion.p>
				</div>

				{/* Steps */}
				<div className="relative">
					{/* Connecting Line */}
					<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

					<div className="space-y-16">
						{steps.map((step, index) => (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
									index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								}`}
							>
								{/* Step Number Circle */}
								<div className="shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
									{step.number}
								</div>

								{/* Content Card */}
								<div
									className={`flex-1 ${
										index % 2 === 0
											? "md:pr-16 md:text-right"
											: "md:pl-16 md:text-left"
									} md:w-1/2`}
								>
									<div className="bg-secondary p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
										<h3 className="font-serif text-2xl md:text-3xl mb-4">
											{step.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{step.description}
										</p>
									</div>
								</div>

								{/* Spacer for alternating layout */}
								<div className="hidden md:block md:w-1/2" />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
