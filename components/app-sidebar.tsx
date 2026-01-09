"use client";

import * as React from "react";
import {
	Command,
	Flag,
	BellIcon,
	ClipboardList,
	Banknote,
	TrendingUp,
	IdCardIcon,
	UserRoundPen,
	LayoutDashboard,
	ChevronRight,
	Settings,
	Shield,
} from "lucide-react";

import { NavUser } from "@/components/nav-user";
import { useAuthStore } from "@/lib/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

const hrNav = [
	{
		title: "Dashboard",
		icon: LayoutDashboard,
		subLinks: [
			{ title: "Overview", url: "/dashboard/overview" },
			{ title: "Pending approvals", url: "/dashboard/pending-approval" },
			{ title: "Alerts & deadlines", url: "/dashboard/alerts-and-approval" },
			{ title: "Recent activity", url: "/dashboard/recent-activity" },
		],
	},
	{
		title: "Employees",
		icon: IdCardIcon,
		subLinks: [
			{ title: "Directory", url: "/employee/directory" },
			{ title: "Profile", url: "/employee/profile" },
			{ title: "Status", url: "/employee/status" },
		],
	},
	{
		title: "Leave Management",
		icon: UserRoundPen,
		subLinks: [
			{ title: "Apply", url: "/leave/apply" },
			{ title: "Leave Balance", url: "/leave/balance" },
		],
	},
	{
		title: "Performance",
		icon: TrendingUp,
	},
	{
		title: "Probation",
		icon: Flag,
	},
	{
		title: "Payroll",
		icon: Banknote,
	},
	{
		title: "Reports & Analytics",
		icon: ClipboardList,
	},
];

const projectNav = [
	{
		title: "Dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Projects",
		icon: ClipboardList,
		subLinks: [
			{ title: "All Projects", url: "/projects" },
			{ title: "Active", url: "/projects/active" },
		],
	},
	{
		title: "Clients",
		icon: UserRoundPen,
	},
	{
		title: "Teams",
		icon: IdCardIcon,
	},
	{
		title: "Tickets",
		icon: Flag,
	},
];

const userData = {
	name: "user",
	email: "m@example.com",
	avatar: "/avatars/shadcn.jpg",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const [activeTab, setActiveTab] = React.useState("hr");
	const [activeItem, setActiveItem] = React.useState<any>(null);

	const currentNav = activeTab === "hr" ? hrNav : projectNav;

	return (
		<Sidebar {...props} className="bg-white border-r">
			<SidebarHeader className="p-0 bg-white border-b">
				<div className="p-4 flex items-center gap-3 border-b border-dashed">
					<div className="flex items-center justify-center size-8 rounded bg-primary text-primary-foreground font-bold">
						<Command className="size-5" />
					</div>
					<span className="font-bold text-xl tracking-tight">HSCL</span>
				</div>

				<div className="px-6 py-6 border-b border-dashed flex flex-col items-center text-center">
					<div className="relative mb-3">
						<img
							src={userData.avatar}
							alt={userData.name}
							className="size-20 rounded-full object-cover border-4 border-muted/30"
						/>
					</div>
					<div className="mb-1">
						<span className="text-muted-foreground text-xs uppercase tracking-wider font-medium">
							Welcome,
						</span>
					</div>
					<h3 className="font-bold text-lg text-foreground">{userData.name}</h3>

					<div className="grid grid-cols-3 gap-4 w-full mt-6">
						<div className="text-center">
							<span className="block font-bold text-lg">5+</span>
							<span className="text-[10px] text-muted-foreground uppercase tracking-wide">
								Exp
							</span>
						</div>
						<div className="text-center border-l border-r border-dashed border-border/60">
							<span className="block font-bold text-lg">400+</span>
							<span className="text-[10px] text-muted-foreground uppercase tracking-wide">
								Emp
							</span>
						</div>
						<div className="text-center">
							<span className="block font-bold text-lg">80+</span>
							<span className="text-[10px] text-muted-foreground uppercase tracking-wide">
								Cli
							</span>
						</div>
					</div>
				</div>

				<div className="px-4 pt-4">
					<div className="flex border-b">
						<button
							onClick={() => setActiveTab("hr")}
							className={`relative flex-1 pb-3 text-sm font-semibold transition-all ${
								activeTab === "hr"
									? "text-primary border-b-2 border-primary"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							HR
						</button>
						<button
							onClick={() => setActiveTab("project")}
							className={`relative flex-1 pb-3 text-sm font-semibold transition-all ${
								activeTab === "project"
									? "text-primary border-b-2 border-primary"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							Project
						</button>
					</div>
				</div>
			</SidebarHeader>

			<SidebarContent className="px-3 py-6">
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu className="gap-2">
							{currentNav.map((item) => (
								<Collapsible
									key={item.title}
									open={activeItem?.title === item.title}
									onOpenChange={() =>
										setActiveItem(
											activeItem?.title === item.title ? null : item
										)
									}
									className="group/collapsible"
								>
									<SidebarMenuItem>
										<CollapsibleTrigger asChild>
											<SidebarMenuButton
												isActive={activeItem?.title === item.title}
												className="data-[active=true]:bg-primary/5 data-[active=true]:text-primary py-5 px-4 rounded-xl transition-all hover:bg-muted font-medium text-base text-muted-foreground"
											>
												<item.icon className="size-5! opacity-70 group-data-[active=true]/menu-button:opacity-100" />
												<span>{item.title}</span>
												{item.subLinks && (
													<ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90 opacity-50" />
												)}
											</SidebarMenuButton>
										</CollapsibleTrigger>
									</SidebarMenuItem>

									{item.subLinks && (
										<CollapsibleContent>
											<div className="ml-4 pl-4 border-l border-border/50 flex flex-col gap-1 mt-1 py-1">
												{item.subLinks.map((link) => (
													<SidebarMenuButton
														key={link.title}
														asChild
														className="h-9 justify-start text-sm text-muted-foreground hover:text-primary hover:bg-transparent"
													>
														<a href={link.url}>{link.title}</a>
													</SidebarMenuButton>
												))}
											</div>
										</CollapsibleContent>
									)}
								</Collapsible>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="p-4">
				<NavUser user={userData} />
			</SidebarFooter>
		</Sidebar>
	);
}
