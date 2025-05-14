import Link from "next/link";
import React from "react";



function MainHeader() {
  return (
    <>
      <header>
        <div>
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          <Link href={"/news"}>News</Link>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
