"use client";

import { ThemeProvider } from "@material-tailwind/react";
import React from "react";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
