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

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			id: 1,
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
			id: 2,
			title: "Employees",
			icon: IdCardIcon,
			subLinks: [
				{ title: "Directory", url: "/employee/directory" },
				{ title: "Profile", url: "/employee/profile" },
				{ title: "Status", url: "/employee/status" },
			],
		},
		{
			id: 3,
			title: "Leave Management",
			icon: UserRoundPen,
			subLinks: [
				{ title: "Apply", url: "/leave/apply" },
				{ title: "Leave Balance", url: "/leave/balance" },
			],
		},
		{
			id: 4,
			title: "Performance",
			icon: TrendingUp,
		},
		{
			id: 5,
			title: "Probation",
			icon: Flag,
		},
		{
			id: 6,
			title: "Payroll",
			icon: Banknote,
		},
		{
			id: 7,
			title: "Reports & Analytics",
			icon: ClipboardList,
		},
		{
			id: 8,
			title: "Notifications",
			icon: BellIcon,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { isAdmin } = useAuthStore();
	const [activeItem, setActiveItem] = React.useState<
		(typeof data.navMain)[number] | null
	>(data.navMain[0]);

	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="/dashboard/overview">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">
										HR Management App
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				{isAdmin ? (
					<Tabs defaultValue="general" className="w-full">
						<TabsList className="pl-5">
							<TabsTrigger value="general" className="">
								General
							</TabsTrigger>
							<TabsTrigger value="admin" className="">
								Admin
							</TabsTrigger>
						</TabsList>
						<TabsContent value="general" className="mt-0">
							<RegularSidebarContent
								activeItem={activeItem}
								setActiveItem={setActiveItem}
							/>
						</TabsContent>
						<TabsContent value="admin" className="mt-0">
							<AdminSidebarContent />
						</TabsContent>
					</Tabs>
				) : (
					<RegularSidebarContent
						activeItem={activeItem}
						setActiveItem={setActiveItem}
					/>
				)}
			</SidebarContent>

			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}

function RegularSidebarContent({
	activeItem,
	setActiveItem,
}: {
	activeItem: any;
	setActiveItem: any;
}) {
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{data.navMain.map((item) => (
						<Collapsible
							key={item.id}
							open={activeItem?.id === item.id}
							onOpenChange={() =>
								setActiveItem(activeItem?.id === item.id ? null : item)
							}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton isActive={activeItem?.id === item.id}>
										<item.icon />
										<span className="font-bold text-lg leading-6">
											{item.title}
										</span>
										{item.subLinks && (
											<ChevronRight className="ml-auto  transition-transform group-data-[state=open]/collapsible:rotate-90" />
										)}
									</SidebarMenuButton>
								</CollapsibleTrigger>
							</SidebarMenuItem>

							{item.subLinks && (
								<CollapsibleContent>
									<div className="ml-8 mt-1 flex flex-col gap-1">
										{item.subLinks.map((link) => (
											<SidebarMenuButton
												key={link.title}
												asChild
												className="h-8 justify-start "
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
	);
}

function AdminSidebarContent() {
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
								<Settings className="size-4" />
							</div>
							<span className="font-bold text-lg leading-6">
								System Settings
							</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
								<Shield className="size-4" />
							</div>
							<span className="font-bold text-lg leading-6">
								User Management
							</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
