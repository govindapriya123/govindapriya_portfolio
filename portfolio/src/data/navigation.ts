export interface NavigationItem {
    label: string;
    href: string;
  }

export const navigationItems: NavigationItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" }, 
    {label:"Experience",href:"#experience"},
    {label:"Projects",href:"#projects"},
    {label:"Contact",href:"#contact"}
  ]