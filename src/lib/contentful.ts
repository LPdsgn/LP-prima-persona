import * as contentful from 'contentful'
import { EntryFieldTypes } from "contentful";
import { Document } from '@contentful/rich-text-types';

/**
 * Environtment interface
 */
export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

/**
 * Websites type
 */
export interface WebsiteDataCMS {
    id: string;
    websiteName: string;
    desktopImage: string;
    mobileImage?: string;
    publicLink: string;
    tags?: string[]; // Array of tags
    isOnline?: boolean;
    details?: string;
    content?: Document; // Contentful Rich Text document
    pinned?: boolean;
    year?: any;
}
// This interface represents the raw Contentful entry structure
export interface CMSWebsiteEntry {
    contentTypeId: "websites";
    fields: {
        title: EntryFieldTypes.Text;
        slug: EntryFieldTypes.Text;
        thumbnail: EntryFieldTypes.AssetLink;
        mobileThumbnail?: EntryFieldTypes.AssetLink;
        liveUrl: EntryFieldTypes.Text;
        tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
        isOnline?: EntryFieldTypes.Boolean;
        details?: EntryFieldTypes.Text;
        content?: EntryFieldTypes.RichText;
        pinned?: EntryFieldTypes.Boolean;
        year?: EntryFieldTypes.Number;
    }
}
