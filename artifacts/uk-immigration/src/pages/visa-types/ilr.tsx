import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Briefcase, Users, CalendarDays, Home, Globe, ArrowRight } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

const subTypes = [
  { icon: Briefcase, title: "Skilled Worker / Points-Based", desc: "ILR after 5 years on a Skilled Worker, ICT, or other points-based visa.", href: "/visa-types/ilr" },
  { icon: Users, title: "Family Route", desc: "Settlement after 5 years on a spouse, partner, or family visa.", href: "/visa-types/ilr" },
  { icon: CalendarDays, title: "Long Residence — 10 Years", desc: "Settlement through 10 years continuous lawful residence regardless of visa type.", href: "/visa-types/ilr/long-residence" },
  { icon: Home, title: "Returning Resident", desc: "Restoring ILR lapsed after a prolonged absence from the UK.", href: "/visa-types/ilr" },
  { icon: Globe, title: "EU Settlement Scheme", desc: "Settled Status for EU/EEA/Swiss citizens and their family members.", href: "/services/eea-settled-status" },
];

export default function ILR() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Indefinite Leave to Remain (ILR)</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Permanent settlement in the UK, freeing you from immigration time limits.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Choose Your ILR Route</h2>
            <p className="text-muted-foreground">ILR is available through several routes depending on your current visa and length of residence in the UK.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subTypes.map((item) => (
                <Link key={item.title} href={item.href}>
                  <div className="border border-border p-5 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group h-full flex flex-col">
                    <item.icon className="text-secondary mb-3" size={22} />
                    <h3 className="font-serif text-base font-semibold group-hover:text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{item.desc}</p>
                    <span className="text-xs text-primary mt-3 inline-flex items-center gap-1">Full details <ArrowRight size={12} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>Indefinite Leave to Remain (ILR), also known as settlement, allows you to live, work, and study in the UK without restriction. It is the final immigration hurdle before qualifying for British citizenship.</p>
              <p>Qualification usually requires 5 years of continuous, lawful residence in the UK on an eligible visa route (such as Skilled Worker or Family visa). Some routes allow settlement after 3 years, while complex cases (like long residence) require 10 years.</p>
              <p>ILR applications are strictly assessed on continuous residence rules — meaning your absences from the UK over the qualifying period must not exceed permitted limits.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Complete the qualifying period (usually 5 years)",
                "Not exceed absence limits (typically 180 days in any 12-month period)",
                "Pass the Life in the UK test",
                "Meet B1 English language requirements",
                "Free from serious criminal convictions (Good Character)"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 bg-muted p-6 md:p-8 border border-border">
            <h2 className="font-serif text-3xl font-bold">Application Process</h2>
            <ol className="space-y-4 list-decimal pl-5 text-lg">
              <li className="pl-2">Calculate your continuous residence period and check absences don't exceed limits.</li>
              <li className="pl-2">Pass the Life in the UK test (book via official government website).</li>
              <li className="pl-2">Gather evidence of qualifying residence and English language proficiency.</li>
              <li className="pl-2">Submit SET form online and pay the application fee.</li>
              <li className="pl-2">Attend biometrics and await BRP showing 'Settlement'.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "ILR — Skilled Worker / Points-Based Route", fee: "£2,885" },
              { label: "ILR — Family Route (spouse / partner)", fee: "£2,885" },
              { label: "ILR — Long Residence (10 years)", fee: "£2,885" },
              { label: "ILR — Returning Resident", fee: "£637" },
              { label: "EU Settlement Scheme — Settled Status (EUSS)", fee: "Free" },
              { label: "Super Priority Service (1–2 working days)", fee: "+£1,000" },
            ]}
            adviserFees={[
              { label: "ILR — Skilled Worker Route", fee: "From £850 + VAT" },
              { label: "ILR — Family Route", fee: "From £850 + VAT" },
              { label: "ILR — Long Residence (10 years)", fee: "From £1,000 + VAT" },
              { label: "ILR — Returning Resident", fee: "From £600 + VAT" },
              { label: "EUSS Settled Status Application", fee: "From £350 + VAT" },
              { label: "Absence Calculation &amp; Travel History Review", fee: "From £250 + VAT" },
            ]}
            ihsContent={<><strong>No Immigration Health Surcharge</strong> is payable on an ILR application. Once granted, ILR gives you full, unrestricted access to the NHS.</>}
            ihsVariant="green"
            processingTime="Standard: up to 6 months · Super Priority: 1–2 working days (+ £1,000)"
            adviserNote="We review your full travel and immigration history to confirm continuous residence and absence rules before submitting."
            freeAssessmentNote="We count your absences and check your qualifying period before you commit — a rejected ILR application wastes £2,885."
          />

          <div className="text-center py-8">
            <Link href="/free-assessment">
              <Button size="lg" className="bg-primary text-primary-foreground font-serif text-base md:text-xl px-6 md:px-12 py-4 md:py-8 h-auto rounded-none">
                Start Your Assessment
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-serif text-lg">What are the absence limits?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">For most routes, you must not have been outside the UK for more than 180 days in any rolling 12-month period during your qualifying years.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What counts as continuous residence?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Time spent in the UK legally. Time spent on visitor visas, or time spent overstaying without permission, does not count towards continuous residence.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Difference between ILR and Settled Status?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">They offer the same rights, but Settled Status is specifically granted under the EU Settlement Scheme. ILR is the standard domestic immigration route.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Can ILR be lost?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes. ILR lapses if you are absent from the UK for more than 2 continuous years (or 5 years for Settled Status). It can also be revoked for serious criminality.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">When can I apply for citizenship?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Usually 12 months after being granted ILR. If you are married to a British citizen, you can apply immediately after receiving ILR.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
