import type { Metadata } from "next";
import SideNav from "./Components/SideNav";
import Navbar from "@/app/components/Navbar";


import { GeistSans } from "geist/font/sans";


export const metadata: Metadata = {
  title: "HTML Documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="flex mx-auto h-full max-w-[1390px]">
          <SideNav />
          <div className="w-full ml-10 mr-24 mt-8 max-lg:ml-3 max-lg:mr-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
