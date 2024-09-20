/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  Alpine: import('alpinejs').Alpine;
}

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
}

export interface WebsiteData {
  desktopImageSrc: string;
  mobileImageSrc: string;
  publicLink: string;
  websiteName: string;
  tags: string[]; // Array of tags
  online: boolean | any;
  details?: any; // Optional property
  pinned?: boolean;
}

export interface WebsiteDataCMS {
  id: string;
  websiteName: string;
  desktopImage: string;
  mobileImage?: string;
  publicLink: string;
  tags?: string[]; // Array of tags
  isOnline?: boolean | any;
  details?: any; // Optional property
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