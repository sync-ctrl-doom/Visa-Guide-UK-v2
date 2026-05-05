import { Link } from "wouter";
import { ArrowRight, ClipboardList, PlaneLanding, Flag, Home, Award, ShieldCheck, Scale } from "lucide-react";

const servicesList = [
  {
    title: "Visa Applications",
    icon: ClipboardList,
    description: "Points-based system, skilled worker, student, family, visitor, sponsor licences, application preparation and submission, document checks.",
    href: "/services/visa-applications",
  },
  {
    title: "Entry Clearance",
    icon: PlaneLanding,
    description: "Applying for leave to enter the UK from abroad, entry clearance vignettes, visa endorsements, switching conditions, port of entry issues.",
    href: "/services/entry-clearance",
  },
  {
    title: "EEA & Settled Status",
    icon: Flag,
    description: "EU Settlement Scheme (EUSS), pre-settled and settled status, deadline, late applications, family members, Swiss nationals, appeals against refusals.",
    href: "/services/eea-settled-status",
  },
  {
    title: "Right of Abode",
    icon: Home,
    description: "What right of abode means, who qualifies (patriality), certificate of entitlement, Commonwealth citizens, British citizens, how it differs from ILR.",
    href: "/services/right-of-abode",
  },
  {
    title: "Nationality & Citizenship",
    icon: Award,
    description: "Naturalisation as British citizen, registration for children, good character requirement, knowledge of language and life in the UK test, citizenship ceremonies.",
    href: "/services/nationality-citizenship",
  },
  {
    title: "Asylum Claims",
    icon: ShieldCheck,
    description: "International protection, refugee status, humanitarian protection, making a claim, the asylum process, appeals, fresh claims, Home Office interviews.",
    href: "/services/asylum",
  },
  {
    title: "Immigration Appeals & Tribunals",
    icon: Scale,
    description: "First-tier tribunal, Upper Tribunal, administrative review, out-of-time appeals, judicial review, appeal grounds, refusal letters.",
    href: "/services/appeals",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
            As IAA Level 1 registered advisers, we provide comprehensive immigration advice and services across a wide spectrum of UK immigration law.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Navigating the UK immigration system requires precision, up-to-date legal knowledge, and an understanding of Home Office procedures. We offer end-to-end representation for your applications, ensuring that every form is correctly completed and every piece of evidence is properly presented.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => (
              <div
                key={service.href}
                className="group border border-border bg-card hover:border-primary/50 transition-colors flex flex-col h-full"
              >
                {/* Icon + Title — both linked */}
                <Link
                  href={service.href}
                  className="flex items-center gap-4 p-6 pb-4 hover:text-primary transition-colors"
                >
                  <div className="shrink-0 h-12 w-12 bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </Link>

                {/* Description + CTA */}
                <div className="px-6 pb-6 flex flex-col flex-1">
                  <p className="text-muted-foreground text-base leading-relaxed flex-grow mb-5">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
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
