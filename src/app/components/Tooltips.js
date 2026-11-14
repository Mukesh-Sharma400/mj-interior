import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Initializes Bootstrap tooltips once per page and disposes them on navigation,
// so each [data-bs-toggle="tooltip"] element has exactly one instance.
// Loaded from the npm package instead of a CDN script tag, so it no longer
// depends on window.bootstrap being ready before the effect runs.
export function Tooltips() {
  const pathname = usePathname();

  useEffect(() => {
    let instances = [];
    let cancelled = false;

    import("bootstrap/js/dist/tooltip").then(({ default: Tooltip }) => {
      if (cancelled) return;
      instances = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]'),
        (el) => Tooltip.getOrCreateInstance(el),
      );
    });

    return () => {
      cancelled = true;
      instances.forEach((instance) => instance.dispose());
    };
  }, [pathname]);

  return null;
}
