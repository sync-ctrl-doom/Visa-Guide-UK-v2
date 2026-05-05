import { Link } from "wouter";
import { Map, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Main Pages",
    links: [
      { href: "/", label: "Home", desc: "Overview of Britannia Visas & Immigration Consultancy" },
      { href: "/about", label: "About the Firm", desc: "Our team, regulatory status, and values" },
      { href: "/contact", label: "Contact Us", desc: "Get in touch or visit our London office" },
      { href: "/free-assessment", label: "Free Assessment", desc: "Request a no-obligation initial assessment" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "All Services", desc: "Full overview of our immigration services" },
      { href: "/services/visa-applications", label: "Visa Applications", desc: "Application preparation and submission" },
      { href: "/services/entry-clearance", label: "Entry Clearance", desc: "Leave to enter the United Kingdom" },
      { href: "/services/eea-settled-status", label: "EEA & Settled Status", desc: "EU Settlement Scheme applications" },
      { href: "/services/right-of-abode", label: "Right of Abode", desc: "Patriality and right of abode claims" },
      { href: "/services/nationality-citizenship", label: "Nationality & Citizenship", desc: "Naturalisation and registration" },
      { href: "/services/asylum", label: "Asylum Claims", desc: "Refugee and humanitarian protection" },
      { href: "/services/appeals", label: "Appeals & Tribunals", desc: "First-tier tribunal representation" },
    ],
  },
  {
    title: "Visa Types",
    links: [
      { href: "/visa-types", label: "All Visa Types", desc: "Complete guide to UK visa categories" },
      { href: "/visa-types/skilled-worker", label: "Skilled Worker Visa", desc: "Work in the UK with a sponsor employer" },
      { href: "/visa-types/student", label: "Student Visa", desc: "Study at a UK university or college" },
      { href: "/visa-types/family", label: "Family Visa", desc: "Join a family member in the UK" },
      { href: "/visa-types/visitor", label: "Standard Visitor Visa", desc: "Tourism, business, or short stays" },
      { href: "/visa-types/ilr", label: "Indefinite Leave to Remain", desc: "Permanent residence in the UK" },
      { href: "/visa-types/british-citizenship", label: "British Citizenship", desc: "Naturalisation and registration as British" },
      { href: "/visa-types/bno", label: "BN(O) Visa", desc: "For Hong Kong British National (Overseas)" },
      { href: "/visa-types/graduate", label: "Graduate Visa", desc: "Stay and work after a UK degree" },
    ],
  },
  {
    title: "Resources & Tools",
    links: [
      { href: "/eligibility-checker", label: "Eligibility Checker", desc: "Find out which UK visa you may need" },
      { href: "/faq", label: "FAQ", desc: "Answers to 26 common immigration questions" },
      { href: "/insights", label: "Immigration Insights", desc: "Articles, news, and policy updates" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy", desc: "How we handle your personal data (UK GDPR)" },
      { href: "/terms-of-service", label: "Terms of Service", desc: "Terms governing use of this website" },
      { href: "/complaints-procedure", label: "Complaints Procedure", desc: "How to raise a complaint with us or the IAA" },
    ],
  },
];

export default function SiteMap() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Map size={20} className="text-secondary" />
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Navigation</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Sitemap</h1>
          <p className="text-primary-foreground/80 max-w-xl">A complete index of all pages on the Britannia Visas & Immigration Consultancy website.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            {sections.map(section => (
              <div key={section.title}>
                <h2 className="font-serif text-xl font-bold mb-4 pb-3 border-b border-border">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="flex items-start gap-2 group">
                        <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                        <div>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">{link.label}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
