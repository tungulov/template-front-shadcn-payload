"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeMessageListener() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Проверяем, что это сообщение о смене темы
      if (event.data.type === "theme-change") {
        const newTheme = event.data.theme; // "light" или "dark"
        setTheme(newTheme);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [setTheme]);

  // Этот компонент ничего не рендерит
  return null;
}
