// import Image from "next/image";
import HeroSection from "@/components/pages/homepage/herosection";
import WhyWeExist from "@/components/pages/homepage/whyWeExist";
import Services from "@/components/pages/aboutpage/Services";
import StatsSection from "@/components/pages/homepage/Stats";

import { CTASection } from "@/components/cta";
import { Extras } from "@/components/pages/homepage/extras";
import Snapshot from "@/components/pages/homepage/snapshot";
import ServicesCardSection from "@/components/pages/homepage/servicesCard";

export default function Home() {
	return (
		<>
			<HeroSection />
			<WhyWeExist />
			<ServicesCardSection />
			<Extras />
			<Snapshot />
			{/* <StatsSection /> */}
			<CTASection />
		</>
	);
}
