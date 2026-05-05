import { useState } from "react";
import { X, Info } from "lucide-react";

const STORAGE_KEY = "bvi_disclaimer_dismissed";

export function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem(STORAGE_KEY);
  });

  if (dismissed) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 dark:bg-amber-950/30 dark:border-amber-800/40" role="banner">
      <div className="container mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-200 flex-1 min-w-0">
          <Info size={14} className="shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="leading-relaxed">
            <strong>Information only:</strong> This website provides general immigration guidance and does not constitute legal advice. For advice specific to your circumstances, please{" "}
            <a href="/contact" className="underline hover:no-underline font-semibold">consult a regulated adviser</a>.
          </p>
        </div>
        <button
          onClick={() => {
            setDismissed(true);
            localStorage.setItem(STORAGE_KEY, "1");
          }}
          aria-label="Dismiss disclaimer"
          className="shrink-0 p-1 text-amber-600 hover:text-amber-800 dark:text-amber-400 transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
