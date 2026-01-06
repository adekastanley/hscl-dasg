export default function StatsSection() {
	return (
		<section className="py-12 md:py-20 font-sans">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
					<h2 className=" text-balance font-light	top-44 font-sans text-4xl lg:text-8xl">
						Strengthening Health Systems Across Africa
					</h2>
					<p>
						From policy to implementation, our work delivers measurable impact
						in diverse health system contexts.
					</p>
				</div>

				<div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
					<div className="space-y-4">
						<div className="text-5xl font-bold">200+</div>
						<p>Consultants</p>
					</div>
					<div className="space-y-4">
						<div className="text-5xl font-bold">89 +</div>
						<p>Active clients</p>
					</div>
					<div className="space-y-4">
						<div className="text-5xl font-bold">345 +</div>
						<p>Projects completed</p>
					</div>
				</div>
			</div>
		</section>
	);
}
