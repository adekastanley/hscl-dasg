"use client";

import { Button } from "@/components/ui/button";

import { ChevronRight, Link } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function WhoWeAre() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<div ref={ref}>
						<h2>
							<TextEffect
								className="text-4xl lg:text-8xl font-light sticky top-44 font-sans "
								per="word"
								as="h3"
								preset="slide"
								delay={0.3}
								trigger={isInView}
							>
								Who We Are
							</TextEffect>
						</h2>
					</div>
					<div className="space-y-6 text-xl">
						<p>
							At
							<span className="font-bold"> HSCL</span> we deliver evidence-based
							health solutions, technical advisory services, and programme
							implementation support that strengthen health outcomes and
							accelerate sustainable impact. Collaborating with governments,
							partners, and institutions to improve lives.
						</p>
						<p>
							HSCL brings deep health systems expertise and local insight to
							design, implement and evaluate programmes that improve health
							service delivery. With a robust network of global consultants and
							field-tested experience across Africa, we deliver impactful,
							tailored solutions that strengthen systems, inform policy, and
							improve health outcomes.
						</p>

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
