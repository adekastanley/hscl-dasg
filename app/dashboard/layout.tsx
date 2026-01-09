import type { Metadata } from "next";
import "../globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export const metadata: Metadata = {
	title: "HR Dashboard",
	description: "HR Management Dashboard",
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset className="relative">
				<header className="bg-transparent absolute top-4 left-4 z-50 flex shrink-0 items-center gap-2">
					<SidebarTrigger className="-ml-1 text-muted-foreground hover:bg-secondary hover:text-white rounded-lg p-2 transition-colors" />
				</header>
				<div className="p-4 md:p-8 pt-16 h-full">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
