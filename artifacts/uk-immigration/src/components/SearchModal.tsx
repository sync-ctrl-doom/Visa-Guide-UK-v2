import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const searchData = [
  { title: "Skilled Worker Visa", category: "Visa Types", href: "/visa-types/skilled-worker", tags: "work job salary sponsor" },
  { title: "Student Visa", category: "Visa Types", href: "/visa-types/student", tags: "study university CAS maintenance" },
  { title: "Family Visa", category: "Visa Types", href: "/visa-types/family", tags: "spouse partner children income" },
  { title: "Standard Visitor Visa", category: "Visa Types", href: "/visa-types/visitor", tags: "tourist business leisure 6 months" },
  { title: "Indefinite Leave to Remain", category: "Visa Types", href: "/visa-types/ilr", tags: "ILR settlement permanent residence" },
  { title: "British Citizenship", category: "Visa Types", href: "/visa-types/british-citizenship", tags: "naturalisation passport dual" },
  { title: "BN(O) Visa", category: "Visa Types", href: "/visa-types/bno", tags: "Hong Kong British National Overseas" },
  { title: "Graduate Visa", category: "Visa Types", href: "/visa-types/graduate", tags: "post study work 2 years" },
  { title: "Visa Applications", category: "Services", href: "/services/visa-applications", tags: "apply document check submission" },
  { title: "Entry Clearance", category: "Services", href: "/services/entry-clearance", tags: "leave to enter vignette" },
  { title: "EEA & Settled Status", category: "Services", href: "/services/eea-settled-status", tags: "EU EUSS pre-settled settled" },
  { title: "Right of Abode", category: "Services", href: "/services/right-of-abode", tags: "patriality certificate Commonwealth" },
  { title: "Nationality & Citizenship", category: "Services", href: "/services/nationality-citizenship", tags: "naturalise register ceremony" },
  { title: "Asylum Claims", category: "Services", href: "/services/asylum", tags: "refugee protection Home Office" },
  { title: "Immigration Appeals & Tribunals", category: "Services", href: "/services/appeals", tags: "refusal appeal First-tier tribunal" },
  { title: "Check Your Eligibility", category: "Tools", href: "/eligibility-checker", tags: "eligibility check which visa" },
  { title: "Application Guide", category: "Tools", href: "/application-guide", tags: "how to apply steps documents timeline" },
  { title: "FAQ — Costs & Fees", category: "FAQ", href: "/faq", tags: "cost fee price IHS surcharge" },
  { title: "FAQ — Refusals & Appeals", category: "FAQ", href: "/faq", tags: "refused refusal appeal review" },
  { title: "Immigration Insights", category: "Articles", href: "/insights", tags: "blog news articles updates" },
  { title: "Free Assessment", category: "Contact", href: "/free-assessment", tags: "free consultation book appointment" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length < 2
    ? []
    : searchData.filter(item =>
        `${item.title} ${item.category} ${item.tags}`.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4" role="dialog" aria-modal="true" aria-label="Search">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-xl bg-background border border-border shadow-2xl">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={18} className="text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search visa types, services, FAQs…"
            className="flex-1 bg-transparent text-foreground placeholder-muted-foreground text-base outline-none"
            aria-label="Search"
          />
          <button onClick={onClose} className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <X size={16} />
          </button>
        </div>

        {results.length > 0 && (
          <ul role="listbox" className="max-h-80 overflow-y-auto divide-y divide-border">
            {results.map((item, i) => (
              <li key={i} role="option">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3 hover:bg-muted transition-colors group"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        {query.trim().length >= 2 && results.length === 0 && (
          <div className="px-4 py-6 text-center text-sm text-muted-foreground">
            No results for "<span className="font-medium text-foreground">{query}</span>"
          </div>
        )}

        {query.trim().length < 2 && (
          <div className="px-4 py-4">
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">Quick links</p>
            <div className="flex flex-wrap gap-2">
              {["Skilled Worker", "Family Visa", "Student Visa", "ILR", "Eligibility Check"].map(label => (
                <button
                  key={label}
                  onClick={() => setQuery(label)}
                  className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
