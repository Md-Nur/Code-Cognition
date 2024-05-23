"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavRoutes = () => {
  const currentPath = usePathname();
  return (
    <>
      <li>
        <Link
          href="/about"
          className={currentPath === "/about" ? "active" : ""}
        >
          About
        </Link>
      </li>
    </>
  );
};

export default NavRoutes;
