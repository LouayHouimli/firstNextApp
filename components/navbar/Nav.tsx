import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-red-500">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/bitcoin">Bitcoin</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
};

export default Nav;
