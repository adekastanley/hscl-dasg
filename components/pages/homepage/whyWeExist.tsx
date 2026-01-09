"use client";

import { Button } from "@/components/ui/button";

import { ChevronRight, Link } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function WhyWeExist() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<div ref={ref}>
						<h2>
							<TextEffect
								className="text-4xl text-center md:text-start lg:text-8xl font-light sticky top-44 font-sans "
								per="word"
								as="h3"
								preset="slide"
								delay={0.3}
								trigger={isInView}
							>
								Why This Platform Exists
							</TextEffect>
						</h2>
					</div>
					<div className="space-y-6 font-light font-sans leading-10 text-2xl text-center">
						<p>
							{/* <span className="font-bold"> HSCL</span>  */}
							Managing people across projects, locations, and roles requires
							consistency, visibility, and accountability.This platform
							centralizes HSCL's recruitment and human resource processes into
							one secure, role-based system. By digitizing key workflows, it
							reduces manual paperwork, improves turnaround time, and ensures
							staff and managers always have access to accurate, up-to-date
							information.
						</p>
						<p></p>

						<Button
							asChild
							variant="secondary"
							size="sm"
							className="gap-1 pr-1.5"
						>
							<Link href="#">
								<span>Learn More</span>
								<ChevronRight className="size-2" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
