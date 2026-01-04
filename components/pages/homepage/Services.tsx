import { ServiceItem } from "./ServiceItem";

export default function Services() {
	return (
		<section className="py-12 md:py-20">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<div className=" z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12 ">
					<h2 className="text-balance text-4xl font-medium lg:text-5xl">
						Our Core Services
					</h2>
					<p className="text-xl leading-10">
						At HSCL, we deliver a broad suite of health systems and development
						consulting services tailored to meet the evolving needs of
						governments, donors, NGOs, and health partners across Africa. Our
						team combines deep technical expertise with real-world experience to
						design and implement solutions that strengthen health systems,
						inform policy, and improve outcomes.
					</p>
				</div>

				<ServiceItem
					title="Health Systems Strategy & Policy Advisory"
					description="We help institutions design stronger, more sustainable health systems through policy analysis, strategic planning, and health financing solutions. Our advisory work supports informed decision-making, effective governance, and long-term system resilience. Includes: Policy analysis & development, health financing & economic reviews, health systems strengthening, sector assessments."
				/>

				<ServiceItem
					title="Programme Design, Implementation & Delivery"
					description="From concept to execution, we partner with stakeholders to design and deliver high-impact health and development programmes. We combine technical expertise with on-the-ground experience to ensure programmes are effective, scalable, and sustainable. Includes: Programme design & implementation, health facility set-up consultancy, procurement & supply chain optimisation, project management."
				/>

				<ServiceItem
					title="Performance, Research & Capacity Building"
					description="We strengthen performance by turning data into insight and building the capacity of people and institutions. Our work ensures programmes are measured, optimised, and continuously improved for real-world impact. Includes: Monitoring, evaluation & research, human resources for health, training & capacity building, learning & knowledge management."
				/>

				{/* <div className="h-screen"></div>
				<div className="h-screen"></div> */}
			</div>
		</section>
	);
}
