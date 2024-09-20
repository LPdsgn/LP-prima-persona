import { Document } from '@contentful/rich-text-types';
import type { EntryFieldTypes } from "contentful";

export interface WebsiteDataCMS {
  id: string;
  websiteName: string;
  desktopImage: string;
  mobileImage?: string;
  publicLink: string;
  tags?: string[]; // Array of tags
  isOnline?: boolean;
  details?: Document; // Contentful Rich Text document
  pinned?: boolean;
}

// This interface represents the raw Contentful entry structure
export interface CMSWebsiteEntry {
  sys: {
    id: string;
  };
  fields: {
    title: EntryFieldTypes.Text;
    thumbnail: EntryFieldTypes.AssetLink;
    mobileThumbnail?: EntryFieldTypes.AssetLink;
    liveUrl: EntryFieldTypes.Text;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    isOnline?: EntryFieldTypes.Boolean;
    details?: EntryFieldTypes.RichText;
    pinned?: EntryFieldTypes.Boolean;
  }
}
