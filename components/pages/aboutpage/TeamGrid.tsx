"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Placeholder data for the team
const team = [
	{
		name: "Dr. Alozie Ananaba",
		role: "Founding Partner",
		image: "/placeholder-user-1.jpg",
	},
	{
		name: "Dr. Nnenna Onyewuchi",
		role: "Founding Partner",
		image: "/placeholder-user-2.jpg",
	},
	{
		name: "Team Member",
		role: "Consultant",
		image: "/placeholder-user-3.jpg",
	},
	{
		name: "Team Member",
		role: "Specialist",
		image: "/placeholder-user-4.jpg",
	},
];

export default function TeamGrid() {
	return (
		<section className="w-full max-w-3xl mx-auto space-y-8 mt-12">
			<div className="flex items-center justify-between px-4">
				<h3 className="text-2xl font-bold">Our Team</h3>
				<a
					href="#"
					className="text-sm font-medium hover:underline flex items-center gap-1"
				>
					See all <ArrowUpRight className="size-4" />
				</a>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{team.map((member, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						className="group flex flex-col space-y-3"
					>
						<div className="aspect-[4/3] w-full relative overflow-hidden rounded-2xl bg-muted">
							{/* Placeholder for team image */}
							<div className="absolute inset-0 bg-secondary/10 flex items-center justify-center text-muted-foreground/30 font-bold">
								HSCL
							</div>
						</div>
						<div className="space-y-1 px-1">
							<h4 className="font-bold text-sm leading-none">{member.name}</h4>
							<p className="text-xs text-muted-foreground">{member.role}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
