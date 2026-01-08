// import Image from "next/image";
import HeroSection from "@/components/pages/homepage/herosection";
import WhyWeExist from "@/components/pages/homepage/whyWeExist";
import Services from "@/components/pages/homepage/Services";
import StatsSection from "@/components/pages/homepage/Stats";

import { CTASection } from "@/components/pages/homepage/cta";
import { Extras } from "@/components/pages/homepage/extras";

export default function Home() {
	return (
		<>
			<HeroSection />
			<WhyWeExist />
			<Services />
			<Extras />
			<StatsSection />
			<CTASection />
		</>
	);
}
