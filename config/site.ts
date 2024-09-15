import { MainNavItem } from "types/nav"

export interface SiteConfig {
    mainNav: MainNavItem[]
}

export const menuConfig: SiteConfig = {
    mainNav: [
        {
            title: "Websites",
            href: "/websites",
        }
    ]
}