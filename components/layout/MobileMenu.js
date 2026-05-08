import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const router = useRouter();

  return (
    <>
      <ul className="navigation">
        <li className={router.pathname === "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === "/about" ? "active" : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname === "/portfolio" ? "active" : ""}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={router.pathname === "/contact" ? "active" : ""}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
