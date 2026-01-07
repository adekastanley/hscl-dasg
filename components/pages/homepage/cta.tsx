import ArcGalleryHero from "@/components/ui/arcGallary";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
	const images = [
		"/assets/one.jpg",
		"/assets/one.jpg",
		"/assets/one.jpg",
		"/assets/one.jpg",
		"/assets/one.jpg",
		"/assets/one.jpg",
		"/assets/one.jpg",
		"/assets/one.jpg",
		"/assets/one.jpg",
		"/assets/one.jpg",
	];
	return (
		<section className="py-16 relative min-h-screen ">
			<ArcGalleryHero
				images={images}
				startAngle={20}
				endAngle={160}
				radiusLg={480}
				radiusMd={360}
				radiusSm={260}
				cardSizeLg={120}
				cardSizeMd={100}
				cardSizeSm={80}
				className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
			/>
		</section>
	);
}
