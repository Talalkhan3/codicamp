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
        <Navbar />
        <div className="flex mx-auto h-full max-w-[1390px] pt-8 border-r border-l">
          <SideNav />
          <div className="w-full ml-10 max-lg:ml-3 max-lg:mr-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
