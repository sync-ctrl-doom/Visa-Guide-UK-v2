import { useState, useEffect } from "react";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";

const STORAGE_KEY = "bvi_cookie_consent";

type ConsentState = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
};

function getStoredConsent(): ConsentState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored || !stored.decided) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    saveConsent({ essential: true, analytics: true, marketing: true, decided: true });
    setVisible(false);
  }

  function rejectNonEssential() {
    saveConsent({ essential: true, analytics: false, marketing: false, decided: true });
    setVisible(false);
  }

  function savePreferences() {
    saveConsent({ essential: true, analytics, marketing, decided: true });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] bg-[#1a2744] text-white shadow-2xl border-t-4 border-[#c8102e]"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl py-4 md:py-5">
        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Cookie size={22} className="shrink-0 mt-0.5 text-[#c8102e]" />
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-white/90">
                We use essential cookies to keep the site running and, with your permission, optional
                cookies to improve your experience and measure site performance. We never sell your data.{" "}
                <Link
                  to="/privacy-policy"
                  className="underline underline-offset-2 text-white hover:text-white/80 transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => setShowPrefs((p) => !p)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm border border-white/40 text-white/80 hover:border-white hover:text-white transition-colors"
              aria-expanded={showPrefs}
            >
              Manage Preferences
              {showPrefs ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            <button
              onClick={rejectNonEssential}
              className="px-3.5 py-2 text-sm border border-white/40 text-white/80 hover:border-white hover:text-white transition-colors"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2 text-sm font-semibold bg-[#c8102e] text-white hover:bg-[#a50d26] transition-colors"
            >
              Accept All
            </button>
          </div>

          {/* Close */}
          <button
            onClick={rejectNonEssential}
            className="hidden md:flex shrink-0 p-1 text-white/50 hover:text-white transition-colors"
            aria-label="Close and reject non-essential cookies"
          >
            <X size={18} />
          </button>
        </div>

        {/* Preferences panel */}
        {showPrefs && (
          <div className="mt-4 border-t border-white/20 pt-4">
            <p className="text-xs text-white/60 uppercase tracking-wider mb-3 font-semibold">
              Cookie Categories
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Essential */}
              <div className="flex-1 bg-white/5 border border-white/15 p-3 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">Essential</span>
                  <span className="text-xs bg-white/20 text-white/80 px-2 py-0.5 rounded-full">
                    Always on
                  </span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Required for core site functionality such as navigation and security. Cannot be disabled.
                </p>
              </div>

              {/* Analytics */}
              <div className="flex-1 bg-white/5 border border-white/15 p-3 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">Analytics</span>
                  <button
                    onClick={() => setAnalytics((v) => !v)}
                    role="switch"
                    aria-checked={analytics}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer transition-colors ${
                      analytics ? "bg-[#c8102e]" : "bg-white/20"
                    }`}
                    aria-label="Toggle analytics cookies"
                  >
                    <span
                      className={`inline-block h-4 w-4 mt-0.5 bg-white transition-transform ${
                        analytics ? "translate-x-4" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Helps us understand how visitors use the site so we can improve it. No personal data is
                  shared.
                </p>
              </div>

              {/* Marketing */}
              <div className="flex-1 bg-white/5 border border-white/15 p-3 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">Marketing</span>
                  <button
                    onClick={() => setMarketing((v) => !v)}
                    role="switch"
                    aria-checked={marketing}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer transition-colors ${
                      marketing ? "bg-[#c8102e]" : "bg-white/20"
                    }`}
                    aria-label="Toggle marketing cookies"
                  >
                    <span
                      className={`inline-block h-4 w-4 mt-0.5 bg-white transition-transform ${
                        marketing ? "translate-x-4" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Allows us to measure the effectiveness of our advertising and show relevant content.
                </p>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <button
                onClick={savePreferences}
                className="px-5 py-2 text-sm font-semibold bg-[#c8102e] text-white hover:bg-[#a50d26] transition-colors"
              >
                Save My Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
