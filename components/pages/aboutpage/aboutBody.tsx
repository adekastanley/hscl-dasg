"use client";
import { TextEffect } from "@/components/ui/text-effect";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function AboutBody() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	return (
		<section
			ref={ref}
			className="py-12 md:py-20 flex justify-center items-center "
		>
			<section className="max-w-5xl lg:max-w-2xl">
				<TextEffect
					className="w-full leading-10 text-xl text-center"
					per="word"
					as="p"
					speedReveal={3}
					preset="slide"
					trigger={isInView}
				>
					With a strong presence across multiple African countries, HSCL brings
					together local insight and global best practices to support health
					system strengthening, policy development, programme implementation,
					and performance improvement.
				</TextEffect>
			</section>
		</section>
	);
}
