import { useState, useEffect } from "react";
import { X, Globe } from "lucide-react";

const languages = [
  { code: "en", flag: "🇬🇧", name: "English", native: "English" },
  { code: "pl", flag: "🇵🇱", name: "Polish", native: "Polski" },
  { code: "pa", flag: "🇵🇰", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "ur", flag: "🇵🇰", name: "Urdu", native: "اردو" },
  { code: "bn", flag: "🇧🇩", name: "Bengali", native: "বাংলা" },
  { code: "gu", flag: "🇮🇳", name: "Gujarati", native: "ગુજરાતી" },
  { code: "ar", flag: "🇸🇦", name: "Arabic", native: "العربية" },
  { code: "fr", flag: "🇫🇷", name: "French", native: "Français" },
  { code: "pt", flag: "🇵🇹", name: "Portuguese", native: "Português" },
  { code: "ro", flag: "🇷🇴", name: "Romanian", native: "Română" },
  { code: "so", flag: "🇸🇴", name: "Somali", native: "Soomaali" },
  { code: "zh", flag: "🇨🇳", name: "Chinese", native: "中文" },
  { code: "hi", flag: "🇮🇳", name: "Hindi", native: "हिन्दी" },
  { code: "tr", flag: "🇹🇷", name: "Turkish", native: "Türkçe" },
  { code: "es", flag: "🇪🇸", name: "Spanish", native: "Español" },
  { code: "cy", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Welsh", native: "Cymraeg" },
];

const STORAGE_KEY = "bvi_language_selected";

export function LanguageModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("noModal")) return;
    const alreadySelected = localStorage.getItem(STORAGE_KEY);
    if (!alreadySelected) {
      const timer = setTimeout(() => setIsOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleSelect(code: string) {
    localStorage.setItem(STORAGE_KEY, code);
    setIsOpen(false);
    if (code !== "en" && code !== "cy") {
      const currentUrl = encodeURIComponent(window.location.href);
      window.open(
        `https://translate.google.com/translate?sl=auto&tl=${code}&u=${currentUrl}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }

  function handleDismiss() {
    localStorage.setItem(STORAGE_KEY, "en");
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Select your language"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl bg-background border border-border shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-6 py-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Globe size={24} className="shrink-0 mt-0.5" />
            <div>
              <h2 className="font-serif text-xl font-bold leading-tight">
                Select Your Language
              </h2>
              <p className="text-primary-foreground/70 text-sm mt-0.5">
                Choose a language to continue / اختر لغتك / अपनी भाषा चुनें
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="shrink-0 p-1 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Close and continue in English"
          >
            <X size={20} />
          </button>
        </div>

        {/* Language Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center gap-2.5 px-3 py-3 border text-left hover:border-primary hover:bg-muted transition-colors ${
                  lang.code === "en"
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border bg-background"
                }`}
              >
                <span className="text-xl shrink-0">{lang.flag}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {lang.native}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {lang.name}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-5 border-t border-border pt-4 leading-relaxed">
            This website is in English. Selecting another language will open Google Translate in a new tab.
            Our advisers speak multiple languages — contact us to arrange a consultation in your preferred language.
          </p>
        </div>
      </div>
    </div>
  );
}
