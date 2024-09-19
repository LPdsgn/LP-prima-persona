export interface SiteConfig {
    mainNav: MainNavItem[]
}

export const menuConfig: SiteConfig = {
    mainNav: [
        {
            title: "Index",
            href: "/",
        },
        {
            title: "Websites",
            href: "/websites",
        }
    ]
}