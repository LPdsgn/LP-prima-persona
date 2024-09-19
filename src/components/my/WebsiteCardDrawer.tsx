import * as React from "react"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import OnlineStatusIndicator from './OnlineStatus'
import { ArrowUpRight } from 'lucide-react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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
              website.online ? "" : "opacity-25"
            }`}
          >
            <img
              loading="lazy"
              className="website-image"
              src={website.desktopImageSrc}
              onError={() => {
                (event.target as HTMLImageElement).src =
                  "/media/websites/placeholder.jpg";
              }}
            />
            <img
              loading="lazy"
              className="website-mobile-image"
              src={website.mobileImageSrc}
              onError={() => {
                (event.target as HTMLImageElement).src =
                  "/media/websites/placeholder.jpg";
              }}
            />
          </div>
          <div className="website-title-container">
            <h3
              className={`website-title ${
                website.online ? "" : "line-through"
              }`}
            >
              {website.websiteName}
            </h3>
            <span className="website-status">
              <OnlineStatusIndicator online={website.online} />
              <span
                className={`website-status-icon ${
                  website.online ? "" : "opacity-35"
                }`}
              >
                
              </span>
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
        <div className="mx-auto w-full flex flex-col md:flex-row md:items-stretch gap-8 md:gap-16 p-8 md:p-12">
          
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
          
          <div className="flex flex-col flex-grow basis-2/5">
          
            <h3 className="xl my-3">{website.websiteName}</h3>
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
                  <ArrowUpRight className='ml-auto' strokeWidth={1.5}/>
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