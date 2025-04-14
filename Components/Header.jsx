"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <>
      <div className=" py-4 px-5 flex justify-between items-center text-white bg-red-500 w-full">
        <h1 className="text-4xl me-10">{props.logo}</h1>
        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Courses">Courses</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
