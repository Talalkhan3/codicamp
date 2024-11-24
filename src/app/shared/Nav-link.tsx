"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm  text-[14px] hover:underline decoration-green-500 underline-offset-4 ${
        isActive
          ? "font-bold underline decoration-green-500 decoration-2 underline-offset-4"
          : "text-gray-600 hover:text-gray-800"
      }`}
    >
      {children}
    </Link>
  );
}
