// import Image from "next/image";
import HeroTwo from "@/components/pages/homepage/heroTwo";
// import HeroSection from "@/components/pages/homepage/herosection";
// import WhyWeExist from "@/components/pages/homepage/whyWeExist";
// import Services from "@/components/pages/aboutpage/Services";
import { DashboardPreview } from "@/components/pages/homepage/dashboardPreview";

import { CTASection } from "@/components/cta";
import { Extras } from "@/components/pages/homepage/extras";
import Snapshot from "@/components/pages/homepage/snapshot";
// import ServicesCardSection from "@/components/pages/homepage/servicesCard";
import SectionOne from "@/components/pages/homepage/sectionOne";

export default function Home() {
	return (
		<>
			<HeroTwo />
			<DashboardPreview />
			{/* <HeroSection /> */}
			{/* <SectionOne /> */}
			<Snapshot />
			{/* <WhyWeExist /> */}
			<Extras />
			{/* <StatsSection /> */}
			<CTASection />
		</>
	);
}
