// import Image from "next/image";
import HeroSection from "@/components/pages/homepage/herosection";
import WhyWeExist from "@/components/pages/homepage/whyWeExist";
import Services from "@/components/pages/homepage/Services";
import StatsSection from "@/components/pages/homepage/Stats";
import CallToAction from "@/components/pages/homepage/cta";

export default function Home() {
	return (
		<>
			<HeroSection />
			<WhyWeExist />
			<Services />
			<StatsSection />
			<CallToAction />
		</>
	);
}
