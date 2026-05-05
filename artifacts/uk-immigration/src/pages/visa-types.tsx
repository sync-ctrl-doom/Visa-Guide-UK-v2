import { Link } from "wouter";
import { ArrowRight, Plane, GraduationCap, Users, Briefcase, Landmark, BookOpen, Globe, FileBadge } from "lucide-react";

const visaCategories = [
  {
    id: "skilled-worker",
    title: "Skilled Worker Visa",
    icon: Briefcase,
    description: "Points-based system, 70 points needed, job offer from approved sponsor, salary thresholds.",
    href: "/visa-types/skilled-worker",
  },
  {
    id: "student",
    title: "Student Visa",
    icon: GraduationCap,
    description: "CAS from licenced sponsor institution, English language, maintenance funds, work restrictions.",
    href: "/visa-types/student",
  },
  {
    id: "family",
    title: "Family Visa",
    icon: Users,
    description: "Spouse/civil partner, unmarried partner, children under 18, adult dependent relatives, financial requirements.",
    href: "/visa-types/family",
  },
  {
    id: "visitor",
    title: "Standard Visitor Visa",
    icon: Plane,
    description: "Up to 6 months, business or leisure, no recourse to public funds, intention to leave, permitted activities.",
    href: "/visa-types/visitor",
  },
  {
    id: "ilr",
    title: "Indefinite Leave to Remain",
    icon: Landmark,
    description: "Permanent residence, qualifying routes, continuous residence, absence limits, Life in the UK test.",
    href: "/visa-types/ilr",
  },
  {
    id: "british-citizenship",
    title: "British Citizenship",
    icon: BookOpen,
    description: "Naturalisation, registration routes for children, Life in the UK test, citizenship ceremony, dual citizenship.",
    href: "/visa-types/british-citizenship",
  },
  {
    id: "bno",
    title: "BN(O) Visa",
    icon: Globe,
    description: "British National (Overseas) status, 5 + 1 year route to citizenship, who qualifies, family members.",
    href: "/visa-types/bno",
  },
  {
    id: "graduate",
    title: "Graduate Visa",
    icon: FileBadge,
    description: "2 years post-study, no sponsor needed, any work or none, can switch to Skilled Worker.",
    href: "/visa-types/graduate",
  },
];

export default function VisaTypes() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Visa Categories</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
            Understanding the myriad of UK visa routes can be overwhelming. We provide clarity on the requirements, processes, and pathways for the most common visa categories.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaCategories.map((category) => (
              <div
                key={category.id}
                className="group border border-border bg-card hover:border-primary/50 transition-colors flex flex-col h-full"
              >
                {/* Icon + Title — both linked */}
                <Link
                  href={category.href}
                  className="flex items-center gap-4 p-6 pb-4 hover:text-primary transition-colors"
                >
                  <div className="shrink-0 h-12 w-12 bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </Link>

                {/* Description + CTA */}
                <div className="px-6 pb-6 flex flex-col flex-1">
                  <p className="text-muted-foreground text-base leading-relaxed flex-grow mb-5">
                    {category.description}
                  </p>
                  <Link
                    href={category.href}
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors mt-auto"
                  >
                    Learn more <ArrowRight size={15} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
