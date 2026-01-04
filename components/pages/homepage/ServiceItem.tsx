"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { TextEffect } from "@/components/ui/text-effect";

interface ServiceItemProps {
	title: string;
	description: string;
}

export function ServiceItem({ title, description }: ServiceItemProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section className="">
			<div ref={ref} className="mb-20 flex items-start h-screen/1.5">
				<h3 className="text-3xl w-full sticky top-[50vh] pr-10 font-bold">
					<TextEffect className="" per="char" delay={0.5} trigger={isInView}>
						{title}
					</TextEffect>
				</h3>

				<TextEffect
					className="w-full leading-10 text-xl"
					per="word"
					as="h3"
					preset="slide"
					trigger={isInView}
				>
					{description}
				</TextEffect>
			</div>
		</section>
	);
}
