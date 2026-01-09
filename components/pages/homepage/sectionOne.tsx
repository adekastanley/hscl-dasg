import { TextGradientScroll } from "@/components/ui/scrollingText";

export default function SectionOne() {
	const whyWeExist = `	Managing people across projects, locations, and roles requires
							consistency, visibility, and accountability.This platform
							centralizes HSCL's recruitment and human resource processes into
							one secure, role-based system. By digitizing key workflows, it
							reduces manual paperwork, improves turnaround time, and ensures
							staff and managers always have access to accurate, up-to-date
							information.`;

	return (
		<section className="text-center min-h-[80vh] flex justify-between items-center w-full">
			<div className="w-full">
				<TextGradientScroll
					text={whyWeExist}
					className="max-w-7xl lg:px-42 mx-auto text-center font-sans text-2xl md:text-3xl lg:text-4xl font-light justify-center"
					type="word"
					textOpacity="soft"
				/>
			</div>
		</section>
	);
}
