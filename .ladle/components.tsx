import type { GlobalProvider } from "@ladle/react";
import { ThemeState } from "@ladle/react";
import "../src/app/globals.css";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const isDark = globalState.theme === ThemeState.Dark;

  return (
    <div
      className={
        isDark
          ? "dark bg-background text-foreground"
          : "bg-background text-foreground"
      }
    >
      <div className="p-8 min-h-screen">{children}</div>
    </div>
  );
};
