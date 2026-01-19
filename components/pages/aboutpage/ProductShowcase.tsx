"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const products = [
	{
		tag: "Service",
		title: "Recruitment & Onboarding",
		description:
			"Manage the full recruitment lifecycle - from publishing vacancies to automated probation reviews.",
		color: "bg-blue-50 text-blue-900",
	},
	{
		tag: "Product",
		title: "Performance Management",
		description:
			"Standardize annual goal setting, KPIs, and perform transparent, real-time tracking of employee time.",
		color: "bg-indigo-50 text-indigo-900",
	},
	{
		tag: "Solution",
		title: "Payroll & Administration",
		description:
			"Integrate payroll directly with HR records to automate allowances, deductions, and processing.",
		color: "bg-emerald-50 text-emerald-900",
	},
	{
		tag: "Consultancy",
		title: "Health Systems Advisory",
		description:
			"Expert advisory services for policy development and programme implementation across Africa.",
		color: "bg-amber-50 text-amber-900",
	},
];

export default function ProductShowcase() {
	return (
		<section className="w-full max-w-5xl mx-auto space-y-12 px-6 pb-20 mt-10">
			<div className="space-y-8">
				{products.map((product, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 bg-secondary/30 border border-border/50 rounded-[32px] p-6 md:p-8 hover:bg-secondary/50 transition-colors cursor-pointer"
					>
						{/* Text Content */}
						<div className="md:col-span-5 flex flex-col justify-between space-y-6">
							<div className="space-y-4">
								<span
									className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${product.color}`}
								>
									{product.tag}
								</span>
								<h3 className="text-2xl md:text-3xl font-bold leading-tight">
									{product.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{product.description}
								</p>
							</div>

							<div className="pt-4">
								<div className="size-12 rounded-full border border-border/50 bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
									<ArrowUpRight className="size-5 text-muted-foreground" />
								</div>
							</div>
						</div>

						{/* Image / Visualization Area */}
						<div className="md:col-span-7 h-64 md:h-80 rounded-2xl bg-muted overflow-hidden relative">
							{/* Placeholder for Product Image */}
							<div className="absolute inset-0 bg-linear-to-br from-white/50 to-transparent flex items-center justify-center">
								<span className="font-bold text-6xl text-foreground/5 opacity-20">
									HSCL
								</span>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
