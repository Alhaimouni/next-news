import Link from "next/link";
import ActiveLink from "./active-link/active-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <ActiveLink link={"news"} />
          </li>
          <li>
            <ActiveLink link={"archive"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
