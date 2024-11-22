"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "yellow-light" ? "purple-dark" : "yellow-light";
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div>
      <Button
        isIconOnly
        color="secondary"
        variant="solid"
        className="rounded-full"
        onClick={handleThemeChange}
      >
        {theme === "yellow-light" ? <IoMoonOutline /> : <IoSunnyOutline />}
      </Button>
    </div>
  );
}
