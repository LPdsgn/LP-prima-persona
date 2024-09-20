import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import OnlineStatusIndicator from './OnlineStatus'
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface WebsiteDrawerProps {
  website: WebsiteData;
}

export function WebsiteDrawer({ website }: WebsiteDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="website-link">
          <div
            className={`website-image-container ${
              website.online === true ? "" : website.online === false ? "opacity-25" : "opacity-50"
            }`}
          >
            <img
              loading="lazy"
              className="website-image"
              src={website.desktopImageSrc}
            />
            {/* <img
              loading="lazy"
              className="website-mobile-image"
              src={website.mobileImageSrc}
            /> */}
          </div>
          <div className="website-title-container">
            <h3
              className={`website-title ${
                website.online === false ? "line-through opacity-50" : website.online === true ? "" : "opacity-60"
              }`}
            >
              {website.websiteName}
            </h3>
            <span className="website-status">
              <OnlineStatusIndicator online={website.online} />
              {/* <Plus
                className={`link website-status-icon ${
                  website.online ? "" : "opacity-35"
                }`}
                strokeWidth={1.5}
              >
                
              </Plus> */}
            </span>
          </div>

          <div className="website-tags">
            {website.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full flex flex-col md:flex-row md:items-stretch gap-6 md:gap-12 lg:gap-16 p-8 md:p-12">
          
          <div
            className={`website-image-container flex-grow basis-2/5 ${
              website.online ? "" : "opacity-25"
            }`}
          >
            <img
              loading="lazy"
              className="website-image"
              src={website.desktopImageSrc}
            />
            <img
              loading="lazy"
              className="website-mobile-image"
              src={website.mobileImageSrc}
            />
          </div>
          
          <div className="flex flex-col flex-grow basis-2/5 gap-3">
          
            <h3 className="xl md:mt-3">{website.websiteName}</h3>
            <div className="flex flex-wrap gap-2">
              {website.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <Separator />
            <p>{website.details || "No additional details provided."}</p>

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