import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Logo() {
	const isMobile = useIsMobile();
	return (
		<Link
			href="/"
			className="font-bold text-xl flex items-center gap-0 m-0 p-0"
		>
			<Image
				src="/logo.png"
				alt="Logo"
				className="h-fit"
				width={isMobile ? 100 : 135}
				height={isMobile ? 100 : 135}
			/>
		</Link>
	);
}
