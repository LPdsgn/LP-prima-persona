import * as React from "react"
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { menuConfig } from "site.config";

export function MobileMenu() {
  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild className="sm:hidden menuToggle">
        <Button variant="outline" size="icon">
          <AlignJustify className="open h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
          <X className="close absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {menuConfig.mainNav.map(item => (

          <DropdownMenuItem
            onClick={() => window.location.href=item.href}
            className="cursor-pointer"
          >
            {item.title}
          </DropdownMenuItem>

        ))}
      </DropdownMenuContent>

    </DropdownMenu>
  );
}