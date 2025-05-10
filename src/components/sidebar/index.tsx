import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Pages, Routes } from "@/constants/enums";
import { CircleUser, Home, Inbox, ProjectorIcon } from "lucide-react";
import Link from "../link";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function AppSidebar() {
  const links = [
    {
      id: crypto.randomUUID(),
      title: "Home",
      url: `${Routes.Root}`,
      icon: Home,
    },
    {
      id: crypto.randomUUID(),
      title: "Blogs",
      url: `/${Routes.Admin}/${Pages.Blogs}`,
      icon: Inbox,
    },
    {
      id: crypto.randomUUID(),
      title: "Projects",
      url: `/${Routes.Admin}/${Pages.Projects}`,
      icon: ProjectorIcon,
    },
  ];

  return (
    <Sidebar variant="inset" className="border-r-2 border-accent">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Yassin Ibrahim
                  <CircleUser className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <SidebarGroup /> */}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
