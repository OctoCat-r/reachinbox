import { NavItem } from "@/types";
//flag- change the names 

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "Home",
    label: "Dashboard",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "UserRoundSearchIcon",
    label: "user",
  },
  {
    title: "Fund Transfer",
    href: "/dashboard/fund-transfer",
    icon: "Mail",
    label: "employee",
  },
  {
    title: "Sponser Team",
    href: "/dashboard/somethin",
    icon: "Send",
    label: "profile",
  },
  {
    title: "Payout Summary",
    href: "/dashboard/kanban",
    icon: "List",
    label: "kanban",
  },
  {
    title: "logout",
    href: "/",
    icon: "InboxIcon",
    label: "login",
  },
  {
    title: "aman",
    href: "/",
    icon: "BarChart2",
    label: "login",
  },
];
