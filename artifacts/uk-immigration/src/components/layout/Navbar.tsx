import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Search, CheckSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { SearchModal } from "@/components/SearchModal";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const servicesLinks = [
    { href: "/services/visa-applications", label: "Visa Applications" },
    { href: "/services/entry-clearance", label: "Entry Clearance" },
    { href: "/services/eea-settled-status", label: "EEA & Settled Status" },
    { href: "/services/right-of-abode", label: "Right of Abode" },
    { href: "/services/nationality-citizenship", label: "Nationality & Citizenship" },
    { href: "/services/asylum", label: "Asylum Claims" },
    { href: "/services/appeals", label: "Appeals & Tribunals" },
  ];

  const visaTypesLinks = [
    { href: "/visa-types/skilled-worker", label: "Skilled Worker Visa" },
    { href: "/visa-types/student", label: "Student Visa" },
    { href: "/visa-types/family", label: "Family Visa" },
    { href: "/visa-types/visitor", label: "Visitor Visa" },
    { href: "/visa-types/ilr", label: "Indefinite Leave to Remain" },
    { href: "/visa-types/british-citizenship", label: "British Citizenship" },
    { href: "/visa-types/bno", label: "BNO Visa" },
    { href: "/visa-types/graduate", label: "Graduate Visa" },
  ];

  const resourceLinks = [
    { href: "/eligibility-checker", label: "Eligibility Checker" },
    { href: "/faq", label: "FAQ" },
    { href: "/insights", label: "Immigration Insights" },
  ];

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-28 items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="bg-white px-3 py-2">
                <img src={logoHorizontal} alt="Britannia Visas & Immigration Consultancy" className="h-20 w-auto" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6">
              <div className="flex gap-5 items-center">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}
                >
                  Home
                </Link>

                <div className="relative" onMouseEnter={() => setOpenDropdown("services")} onMouseLeave={() => setOpenDropdown(null)}>
                  <Link href="/services" className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2 ${location.startsWith("/services") ? "text-primary" : "text-muted-foreground"}`}>
                    Services <ChevronDown size={14} />
                  </Link>
                  {openDropdown === "services" && (
                    <div className="absolute top-full left-0 w-56 bg-card border border-border shadow-md py-2 animate-in fade-in zoom-in-95">
                      {servicesLinks.map(link => (
                        <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors" onClick={() => setOpenDropdown(null)}>{link.label}</Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative" onMouseEnter={() => setOpenDropdown("visas")} onMouseLeave={() => setOpenDropdown(null)}>
                  <Link href="/visa-types" className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2 ${location.startsWith("/visa-types") ? "text-primary" : "text-muted-foreground"}`}>
                    Visa Types <ChevronDown size={14} />
                  </Link>
                  {openDropdown === "visas" && (
                    <div className="absolute top-full left-0 w-56 bg-card border border-border shadow-md py-2 animate-in fade-in zoom-in-95">
                      {visaTypesLinks.map(link => (
                        <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors" onClick={() => setOpenDropdown(null)}>{link.label}</Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative" onMouseEnter={() => setOpenDropdown("resources")} onMouseLeave={() => setOpenDropdown(null)}>
                  <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2 ${location.startsWith("/insights") || location === "/faq" || location === "/eligibility-checker" ? "text-primary" : "text-muted-foreground"}`}>
                    Resources <ChevronDown size={14} />
                  </button>
                  {openDropdown === "resources" && (
                    <div className="absolute top-full left-0 w-52 bg-card border border-border shadow-md py-2 animate-in fade-in zoom-in-95">
                      {resourceLinks.map(link => (
                        <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors" onClick={() => setOpenDropdown(null)}>{link.label}</Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/about" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-muted-foreground"}`}>About</Link>
                <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/contact" ? "text-primary" : "text-muted-foreground"}`}>Contact</Link>
                <Link href="/secure-portal" className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${location === "/secure-portal" ? "text-primary" : "text-muted-foreground"}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Client Portal
                </Link>
              </div>

              <div className="flex items-center gap-2 ml-2">
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <Search size={18} />
                </button>
                <Link href="/eligibility-checker">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-serif tracking-wide rounded-none px-5 text-sm gap-1.5">
                    <CheckSquare size={15} /> Check Eligibility
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setSearchOpen(true)} aria-label="Search" className="p-2 text-muted-foreground">
                <Search size={20} />
              </button>
              <button className="p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background px-4 py-4 shadow-lg animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-2 rounded-md transition-colors text-muted-foreground hover:bg-muted">Home</Link>

              <div className="px-2 pt-2 pb-1 text-sm font-bold text-foreground border-b border-border">Services</div>
              {servicesLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium px-4 py-2 rounded-md transition-colors text-muted-foreground hover:bg-muted">{link.label}</Link>
              ))}

              <div className="px-2 pt-4 pb-1 text-sm font-bold text-foreground border-b border-border">Visa Types</div>
              {visaTypesLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium px-4 py-2 rounded-md transition-colors text-muted-foreground hover:bg-muted">{link.label}</Link>
              ))}

              <div className="px-2 pt-4 pb-1 text-sm font-bold text-foreground border-b border-border">Resources</div>
              {resourceLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium px-4 py-2 rounded-md transition-colors text-muted-foreground hover:bg-muted">{link.label}</Link>
              ))}

              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-2 rounded-md transition-colors text-muted-foreground hover:bg-muted mt-2">About</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-2 rounded-md transition-colors text-muted-foreground hover:bg-muted">Contact</Link>
              <Link href="/secure-portal" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-2 rounded-md transition-colors text-muted-foreground hover:bg-muted">Client Portal</Link>

              <div className="pt-4 space-y-3">
                <Link href="/eligibility-checker" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-secondary text-secondary-foreground font-serif rounded-none gap-2" size="lg">
                    <CheckSquare size={16} /> Check Eligibility
                  </Button>
                </Link>
                <Link href="/free-assessment" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-primary text-primary font-serif rounded-none" size="lg">
                    Free Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
