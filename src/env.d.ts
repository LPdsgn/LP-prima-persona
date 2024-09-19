/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  Alpine: import('alpinejs').Alpine;
}

interface WebsiteData {
  desktopImageSrc: string;
  mobileImageSrc: string;
  publicLink: string;
  websiteName: string;
  tags: string[]; // Array of tags
  online: boolean;
  details?: string; // Optional property
  pinned?: boolean;
}

interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
}

interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

interface MainNavItem extends NavItem { }