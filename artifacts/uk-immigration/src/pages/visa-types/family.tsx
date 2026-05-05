import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Users, Heart, Baby, UserCheck, Landmark, ArrowRight } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

const subTypes = [
  { icon: Heart, title: "Spouse / Civil Partner", desc: "Married couples and civil partners joining a British or settled person.", href: "/visa-types/family/spouse-visa" },
  { icon: Users, title: "Unmarried Partner", desc: "Cohabiting couples (including same-sex) with 2+ years together.", href: "/visa-types/family/unmarried-partner-visa" },
  { icon: Landmark, title: "UK Ancestry Visa", desc: "Commonwealth citizens with a UK-born grandparent — live and work for 5 years.", href: "/visa-types/family/ancestry-visa" },
  { icon: Baby, title: "Child Dependant", desc: "Bringing children under 18 to join a parent settled or working in the UK.", href: "/visa-types/family/child-dependant-visa" },
  { icon: UserCheck, title: "Adult Dependent Relative", desc: "Parents or relatives requiring long-term personal care from a UK family member.", href: "/visa-types/family/adult-dependent-relative" },
];

export default function Family() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/7799614/pexels-photo-7799614.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Family Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            For spouses, partners, children, and dependent relatives of British citizens or settled persons.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Choose Your Route</h2>
            <p className="text-muted-foreground">"Family visa" covers several distinct immigration routes. Select the one that applies to you for full details, specific eligibility requirements, and a breakdown of costs.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subTypes.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className="border border-border p-5 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group h-full flex flex-col">
                    <item.icon className="text-secondary mb-3" size={22} />
                    <h3 className="font-serif text-lg font-semibold group-hover:text-primary mb-1">{item.title}</h3>
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
              <p>The Family visa route allows you to live in the UK if you are related to a British citizen, someone with Indefinite Leave to Remain, or someone with refugee status. The most common applications are for spouses, civil partners, and unmarried partners.</p>
              <p>Applications undergo rigorous scrutiny. You must pass a "genuine and subsisting relationship" test, demonstrating your relationship is real through substantial evidence.</p>
              <p>Significant financial requirements apply to ensure families can support themselves without recourse to public funds. The standard route to settlement (ILR) takes 5 years.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Partner must be British or settled in the UK",
                "Prove a genuine and subsisting relationship",
                "Meet the financial requirement (currently £29,000)",
                "Meet English language requirement (A1 for initial, A2 for extension)",
                "Adequate accommodation available without overcrowding"
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
              <li className="pl-2">Compile extensive evidence of relationship (chat logs, photos, joint bills).</li>
              <li className="pl-2">Gather required financial evidence (strictly mandated formats for payslips/bank statements).</li>
              <li className="pl-2">Pass an approved A1 English test if not from an exempt country.</li>
              <li className="pl-2">Submit application and pay fees/IHS.</li>
              <li className="pl-2">Provide biometrics and await decision.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Spouse / Civil Partner (outside UK)", fee: "£1,846" },
              { label: "Spouse / Civil Partner Extension (inside UK)", fee: "£1,048" },
              { label: "Unmarried / Same-Sex Partner (outside UK)", fee: "£1,846" },
              { label: "Child Dependant (outside UK)", fee: "£1,846" },
              { label: "UK Ancestry Visa (outside UK, 5 years)", fee: "£532" },
              { label: "Adult Dependent Relative", fee: "£3,250" },
            ]}
            adviserFees={[
              { label: "Spouse / Civil Partner Visa", fee: "From £900 + VAT" },
              { label: "Spouse / Civil Partner Extension", fee: "From £750 + VAT" },
              { label: "Unmarried / Same-Sex Partner", fee: "From £900 + VAT" },
              { label: "UK Ancestry Visa", fee: "From £700 + VAT" },
              { label: "Child Dependant Application", fee: "From £600 + VAT" },
              { label: "Adult Dependent Relative", fee: "From £950 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £1,035 per year payable upfront. A typical 2.5-year initial visa costs <strong>£2,587.50</strong> in IHS alone, on top of the application fee.</>}
            ihsVariant="amber"
            processingTime="Outside UK: up to 24 weeks · Inside UK: up to 8 weeks · Priority services sometimes available"
            adviserNote="Fees cover document review, preparation, and submission. Complex cases may attract a higher fee — confirmed at consultation."
            freeAssessmentNote="We assess your relationship evidence and financial position before you commit. Spouse visa refusals are costly to appeal."
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
                <AccordionTrigger className="text-left font-serif text-lg">What is the financial requirement?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">From April 2024, the minimum income requirement is £29,000. This can be met through employment, self-employment, cash savings (over £88,500), or a combination.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">How do we prove a genuine relationship?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Through marriage certificates, joint tenancy agreements, shared bank accounts, travel history, photographs, and communication logs. Quality is more important than quantity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can unmarried partners apply?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, if you have been living together in a relationship akin to marriage for at least 2 years. See the <Link href="/visa-types/family/unmarried-partner-visa" className="text-primary underline">Unmarried Partner Visa</Link> page for full details.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Can I bring my step-children?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, but if the other biological parent is still involved in their life, you must prove you have "sole responsibility" for the child, which is a very high legal threshold.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What if the application is refused?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Family visa refusals usually trigger a right of appeal to the First-tier Tribunal under Article 8 of the ECHR (Right to private and family life).</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
