"use client"

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Logo from "@/public/logo.svg";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-transparent ">
      <div className="max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8 border">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src={Logo} alt="Logo" height={30} />
            </Link>
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center  text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Front-end <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/doc/html" className="w-full">
                    HTML
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/doc/css" className="w-full">
                    CSS
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  JavaScript
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  React
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  TypeScript
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Back-end <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem disabled>
                  Node.js
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Python
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Ruby
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Java
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Programming Languages <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem disabled>
                  C++
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Go
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Rust
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Swift
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/doc"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Docs
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center w-full text-left text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                >
                  Front-end <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/doc/html" className="w-full">
                    HTML
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/doc/css" className="w-full">
                    CSS
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  JavaScript
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  React
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  TypeScript
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center w-full text-left text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                >
                  Back-end <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem disabled>
                  Node.js
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Python
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Ruby
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Java
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center w-full text-left text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                >
                  Programming Languages <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem disabled>
                  C++
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Go
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Rust
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  Swift
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-800"
                  >
                    Coming Soon
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/docs"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium text-center"
            >
              Docs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
