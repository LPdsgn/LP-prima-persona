import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import OnlineStatusIndicator from './OnlineStatus'
import { ArrowUpRight } from 'lucide-react';
import { X } from 'lucide-react';

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
        <div className="py-3 px-4 flex justify-between text-lg lg:text-xl rounded-md cursor-pointer">
          <h3>{website.websiteName}</h3>
          <ArrowUpRight className='link' strokeWidth={1.5}/>
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
          
          <div className="flex flex-col flex-grow basis-2/5">
          
            <h3 className="xl mb-3 md:my-3">{website.websiteName}</h3>
            <p>{website.details || "No additional details provided."}</p>

            <div className="mt-4 md:mt-auto flex flex-row flex-wrap md:flex-nowrap gap-3 md:gap-4">
              <Button asChild>
                <a
                  href={website.publicLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="basis-1/2 flex-grow"
                >
                  <span className="mx-auto">Visit Website</span>
                  <ArrowUpRight strokeWidth={1.5}/>
                </a>
              </Button>

              <Button asChild variant="outline">
                <a href="/websites" className="basis-2/5 md:basis-1/2 flex-grow">
                  View all websites
                </a>
              </Button>

              <DrawerClose asChild>
                <Button variant="outline" size="icon" className="aspect-square">
                  <X className="h-4 w-4"/>
                </Button>
              </DrawerClose>
            </div>
          
          </div>

        </div>
      </DrawerContent>
    </Drawer>
  );
}