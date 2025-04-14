"use client";
import { MyContext } from "@/Helper/Context";
import React, { useContext } from "react";

const About = () => {
  const user = useContext(MyContext);
  return (
    <div className="ms-4 mt-4">
      <h1 className="text-3xl">About</h1>
      <p className="mt-3">
        This Website is of <span className="text-red-500 font-bold">{user}.</span>
      </p>
    </div>
  );
};

export default About;
