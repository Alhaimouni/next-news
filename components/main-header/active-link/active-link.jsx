"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ActiveLink({ link }) {
  const path = usePathname();

  return (
    <Link
      href={`/${link}`}
      className={path.startsWith(`/${link}`) ? "active" : undefined}
    >
      {link}
    </Link>
  );
}
