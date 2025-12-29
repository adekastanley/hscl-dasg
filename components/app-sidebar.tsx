"use client";

import * as React from "react";
import {
	Command,
	File,
	Inbox,
	Flag,
	Trash2,
	BellIcon,
	ClipboardList,
	Banknote,
	TrendingUp,
	IdCardIcon,
	UserRoundPen,
	LayoutDashboard,
	BriefcaseBusiness,
} from "lucide-react";

import { NavUser } from "@/components/nav-user";
// import { Label } from "@/components/ui/label";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarInput,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
// import { Switch } from "@/components/ui/switch";

// This is sample data
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "dashboard",
			url: "#",
			icon: LayoutDashboard,
			isActive: true,
			id: 1,
			subLinks: [
				{
					title: "directory",
					url: "employee/directory",
				},
				{
					title: "profile",
					url: "employee/profile",
				},
				{
					title: "status",
					url: "employee/status",
				},
			],
		},
		{
			id: 2,
			title: "Employees",
			url: "#",
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
			url: "#",
			icon: UserRoundPen,
			subLinks: [
				{ title: "Apply", url: "/leave/apply" },
				{ title: "Leave Balance", url: "/leave/balance" },
			],
		},

		{
			title: "Leave Management",
			url: "#",
			icon: UserRoundPen,
			isActive: false,
		},
		{
			title: "Performance",
			url: "#",
			icon: TrendingUp,
			isActive: false,
		},
		{
			title: "Probation",
			url: "#",
			icon: Flag,
			isActive: false,
		},
		{
			title: "Payroll",
			url: "#",
			icon: Banknote,
			isActive: false,
		},
		{
			title: "Reports & Analytics",
			url: "#",
			icon: ClipboardList,
			isActive: false,
		},
		{
			title: "Notifications",
			url: "#",
			icon: BellIcon,
			isActive: false,
		},
	],
	subLinks: [
		{
			title: "employee",
			id: 1,
			urls: [
				{
					title: "directory",
					url: "employee/directory",
				},
				{
					title: "profile",
					url: "employee/profile",
				},
				{
					title: "status",
					url: "employee/status",
				},
			],
		},
		{
			title: "leave management",
			id: 2,
			urls: [
				{
					title: "apply",
					url: "leave/apply",
				},
				{
					title: "profile",
					url: "leave/leave-balance",
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	// Note: I'm using state to show active item.
	// IRL you should use the url/router.
	const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
	// const [mails, setMails] = React.useState(data.mails);
	const { setOpen } = useSidebar();

	return (
		<Sidebar
			collapsible="icon"
			className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
			{...props}
		>
			{/* This is the first sidebar */}
			{/* We disable collapsible and adjust width to icon. */}
			{/* This will make the sidebar appear as icons. */}
			<Sidebar
				collapsible="none"
				className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
			>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
								<a href="#">
									<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
										<Command className="size-4" />
									</div>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">
											HR Management app
										</span>
										{/* <span className="truncate text-xs">Enterprise</span> */}
									</div>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent className="px-1.5 md:px-0">
							<SidebarMenu>
								{data.navMain.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											tooltip={{
												children: item.title,
												hidden: false,
											}}
											onClick={() => {
												setActiveItem(item);
												setOpen(true);
											}}
											isActive={activeItem?.title === item.title}
											className="px-2.5 md:px-2"
										>
											<item.icon />
											<span>{item.title}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<NavUser user={data.user} />
				</SidebarFooter>
			</Sidebar>

			{/* This is the second sidebar */}
			{/* We disable collapsible and let it fill remaining space */}
			<Sidebar collapsible="none" className="hidden flex-1 md:flex">
				<SidebarHeader className="gap-3.5 border-b p-4">
					<div className="flex w-full items-center justify-between">
						<div className="text-foreground text-base font-medium">
							{activeItem?.title}
						</div>
						{/* <Label className="flex items-center gap-2 text-sm">
							<span>Unreads</span>
							<Switch className="shadow-none" />
						</Label> */}
					</div>
					{/* <SidebarInput placeholder="Type to search..." /> */}
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup className="px-0">
						<SidebarGroupContent>
							{/**********  sub links tab start  *******/}
							{activeItem?.subLinks && (
								<div className="flex flex-col gap-1 px-2">
									{activeItem.subLinks.map((link) => (
										<a
											key={link.title}
											href={link.url}
											className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md px-3 py-2 text-sm transition"
										>
											{link.title}
										</a>
									))}
								</div>
							)}
							{/**********  sub links tab end  *******/}
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</Sidebar>
	);
}
