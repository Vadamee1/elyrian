"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="purple-dark"
        themes={["yellow-light", "purple-dark"]}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
