"use client";
import React from "react";
import { createContext } from "react";

export const MyContext = createContext();

export const NewContext = createContext("hello");

const Context = ({children}) => {
  const userName = "John Doe";
  return (
    <div>
      <MyContext.Provider value={userName}>{children}</MyContext.Provider>
    </div>
  );
};

export default Context;
