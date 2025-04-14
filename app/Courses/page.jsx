"use client";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';

const Courses = () => {
  
  const notify=()=>{
toast("Wow so easy !" )
  }
  return (
    <div className=" ms-4 mt-4">
      <h1 className=" text-3xl">Courses</h1>
      <button className="bg-zinc-800 text-white px-5 py-3 mt-2 font-bold text-xl" onClick={notify}>Alert</button>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Courses;
