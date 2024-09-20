import * as React from "react"
// Sub components
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import OnlineStatusIndicator from './OnlineStatus'
import { Plus } from "lucide-react"; // Icon
import { Separator } from "@/components/ui/separator";
// CMS integration
import type { WebsiteDataCMS } from '@/lib/CMS.types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface WebsiteDrawerProps {
  website: WebsiteDataCMS;
}

export function WebsiteDrawer({ website }: WebsiteDrawerProps) {
  // Custom options for rendering Rich Text
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p className="mb-4">{children}</p>,
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a href={node.data.uri} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      // Add more custom renderers as needed
    },
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="website-link">
          <div
            className={`website-image-container ${
              website.isOnline === true ? "" : website.isOnline === false ? "opacity-25" : "opacity-50"
            }`}
          >
            <img
              loading="lazy"
              className="website-image"
              src={website.desktopImage}
            />
          </div>
          <div className="website-title-container">
            <h3
              className={`website-title ${
                website.isOnline === false ? "line-through opacity-50" : website.isOnline === true ? "" : "opacity-60"
              }`}
            >
              {website.websiteName}
            </h3>
            <span className="website-status">
              <OnlineStatusIndicator online={website.isOnline} />
              {/* <Plus
                className={`link website-status-icon ${
                  website.isOnline ? "" : "opacity-35"
                }`}
                strokeWidth={1.5}
              /> */}
            </span>
          </div>

          {/* <div className="website-tags">
            {website.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div> */}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full flex flex-col md:flex-row md:items-stretch gap-6 md:gap-12 lg:gap-16 p-8 md:p-12">
          
          <div
            className={`website-image-container flex-grow basis-2/5 ${
              website.isOnline ? "" : "opacity-25"
            }`}
          >
            <img
              loading="lazy"
              className="website-image"
              src={website.desktopImage}
            />
            <img
              loading="lazy"
              className="website-mobile-image"
              src={website.mobileImage}
            />
          </div>
          
          <div className="flex flex-col flex-grow basis-2/5 gap-3">
          
            <h3 className="xl md:mt-3">{website.websiteName}</h3>
            {/* <div className="flex flex-wrap gap-2">
              {website.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div> */}
            <Separator />
            <div className="details">
              {website.details ? documentToReactComponents(website.details, options) : <p>No additional details provided.</p>}
            </div>

            <div className="mt-auto flex flex-col md:flex-row gap-4">
              <Button asChild>
                <a
                  href={website.publicLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="basis-1/2 flex-grow"
                >
                  Visit Website
                  <Plus className='ml-auto' strokeWidth={1.5}/>
                </a>
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="basis-1/2 flex-grow">Close</Button>
              </DrawerClose>
            </div>
          
          </div>

        </div>
      </DrawerContent>
    </Drawer>
  );
}