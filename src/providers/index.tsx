"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  );
};

export default Provider;
