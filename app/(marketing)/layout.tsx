import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export default function MarketingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<HeroHeader />
			<main>{children}</main>
			<FooterSection />
		</>
	);
}
