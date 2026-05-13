import { useEffect } from "react";

export default function useTheme(currentTheme) {
    useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme]);
}