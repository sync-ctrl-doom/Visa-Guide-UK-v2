import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function ChildRegistration() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/1620650/pexels-photo-1620650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/british-citizenship" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to British Citizenship
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">British Citizenship for Children</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Registration routes for children to become British citizens — by entitlement or discretion.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>Children under 18 become British citizens through <strong>registration</strong> rather than naturalisation. There are several routes depending on the child's circumstances: some are entitlement routes (the child automatically qualifies), while others are discretionary (the Secretary of State decides whether it is in the child's best interests).</p>
              <p>Common registration routes include: children born in the UK who have lived here for 10 years; children of British citizens born abroad after the parent became British; and children who would be stateless without British citizenship.</p>
              <p>Unlike adult naturalisation, there is no Life in the UK test requirement for children. However, there is still a Good Character requirement for children aged 10 and over.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Main Registration Routes</h2>
            <ul className="space-y-4">
              {[
                "Section 1(3): Child born in the UK after a parent becomes British or settled — entitlement",
                "Section 1(4): Child born in the UK who has lived here for the first 10 years — entitlement",
                "Section 3(1): General discretionary registration for minors — assessed on best interests",
                "Section 3(2): Child born abroad to a British mother before 1983 — entitlement",
                "Section 3(5): Child of a British father where parents were not married — entitlement (if conditions met)",
                "Stateless children with a strong connection to the UK may also be entitled",
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
              <li className="pl-2">Identify the correct registration form: MN1 (parent applies for child under 18), T (under 18 who has lived in UK for 10 years), or other specific forms depending on the route.</li>
              <li className="pl-2">Gather evidence: child's birth certificate, parents' passports and immigration history, evidence of UK residence (school records, NHS records, letters).</li>
              <li className="pl-2">For the 10-year route, compile continuous evidence of UK residence for all 10 years — school attendance records, NHS registration, council letters.</li>
              <li className="pl-2">Submit the application and fee. The child's biometrics may be required.</li>
              <li className="pl-2">Once approved, the child receives a registration certificate. They can then apply for a British passport.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Registration — Child under 18 (MN1 / standard)", fee: "£1,214" },
              { label: "Registration — Child: 10-year UK residence (T form)", fee: "£1,214" },
              { label: "Registration — Adult by entitlement (various)", fee: "£1,431" },
              { label: "Citizenship Ceremony Fee (if required)", fee: "£80" },
            ]}
            adviserFees={[
              { label: "Child Registration Application", fee: "From £700 + VAT" },
              { label: "10-Year Residence Route (evidence compilation)", fee: "From £800 + VAT" },
              { label: "Discretionary Registration (complex cases)", fee: "From £950 + VAT" },
              { label: "Good Character Assessment (10+ year olds)", fee: "From £250 + VAT" },
            ]}
            ihsContent={<><strong>No Immigration Health Surcharge</strong> applies to child citizenship registration applications. Once registered, the child is a British citizen with full NHS access.</>}
            ihsVariant="green"
            processingTime="Standard: up to 6 months · No priority service available · Simple entitlement cases may be faster"
            adviserNote="Identifying the correct registration route is the critical first step — using the wrong form or route can cause delays or refusals. We identify the right route at no charge."
            freeAssessmentNote="We identify which registration route your child qualifies for and what evidence is needed before you commit to the £1,214 fee."
          />

          <div className="text-center py-8">
            <Link href="/free-assessment">
              <Button size="lg" className="bg-primary text-primary-foreground font-serif text-base md:text-xl px-6 md:px-12 py-4 md:py-8 h-auto rounded-none">
                Start Your Free Assessment
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-serif text-lg">Is my child automatically British if born in the UK?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Not automatically. A child born in the UK is British at birth only if at least one parent is British or has ILR at the time of birth. If both parents were on temporary visas (e.g. work or student visas), the child is not automatically British but may qualify to register under the 10-year route after living in the UK for 10 years.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What evidence is needed for the 10-year route?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You need continuous evidence of UK residence for all 10 years: school admission records, school reports, NHS registration letters, letters from GPs, council letters, library cards, and any other official documents showing the child's address in the UK each year.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Does a child aged over 10 need to meet the Good Character requirement?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes. Children aged 10 and over must satisfy a Good Character requirement, similar to adults. In practice, this focuses on criminal cautions or convictions, but the Home Office assesses it in an age-appropriate way.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Can I apply for my child if I am not yet British?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, in some routes. For example, if you are a settled person (ILR) and your child was born here, your child may be entitled to register as British. The parent's nationality is not always the determining factor — it depends on the specific route.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What happens to the child's current nationality?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">The UK allows dual nationality, so the child can remain a citizen of their birth country while also becoming British. However, the child's birth country may not allow dual nationality — check with that country's embassy before applying.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/british-citizenship/naturalisation"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Adult Naturalisation</span></Link>
              <Link href="/visa-types/family/child-dependant-visa"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Child Dependant Visa</span></Link>
              <Link href="/visa-types/ilr"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Indefinite Leave to Remain</span></Link>
              <Link href="/visa-types/british-citizenship"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">All Citizenship Routes</span></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
