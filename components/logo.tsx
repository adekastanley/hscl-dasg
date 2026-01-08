import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link href="/" className="font-bold text-xl flex items-center gap-2">
			<Image src="/logo.png" alt="Logo" width={100} height={100} />
		</Link>
	);
}
