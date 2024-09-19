/// <reference types="astro/client" />

interface WebsiteData {
    desktopImageSrc: string;
    mobileImageSrc: string;
    publicLink: string;
    websiteName: string;
    tags: string[];
    online: boolean;
    details?: string;
    pinned?: boolean;
}
