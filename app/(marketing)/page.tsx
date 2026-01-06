// import Image from "next/image";
import Link from "next/link";
import { HeroHeader } from "@/components/ui/header";
import HeroSection from "@/components/pages/homepage/herosection";
import WhoWeAre from "@/components/pages/homepage/whoWeAre";
import Services from "@/components/pages/homepage/Services";
import StatsSection from "@/components/pages/homepage/Stats";

export default function Home() {
	return (
		<>
			<HeroSection />
			<WhoWeAre />
			<Services />
			<StatsSection />
		</>
	);
}
