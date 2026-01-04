// import Image from "next/image";
import Link from "next/link";
import { HeroHeader } from "@/components/ui/header";
import HeroSection from "@/components/pages/homepage/herosection";
import WhoWeAre from "@/components/pages/homepage/whoWeAre";
import Services from "@/components/pages/homepage/Services";

export default function Home() {
	return (
		<>
			<HeroHeader />
			<HeroSection />
			<WhoWeAre />
			<Services />
		</>
	);
}
