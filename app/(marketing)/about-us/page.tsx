import AboutHeader from "@/components/pages/aboutpage/AboutHeader";
import DashboardPreview from "@/components/pages/aboutpage/DashboardPreview";
import ProductShowcase from "@/components/pages/aboutpage/ProductShowcase";
import TeamSlider from "@/components/pages/aboutpage/TeamSlider";

export default function AboutUs() {
	return (
		<main className=" bg-background">
			<AboutHeader />
			<div className="space-y-24 md:space-y-32 mt-20 h-auto">
				<ProductShowcase />
				<TeamSlider />
				<DashboardPreview />
			</div>
		</main>
	);
}
