import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function BNO() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">BN(O) Visa (Hong Kong)</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            A bespoke immigration route for British National (Overseas) citizens from Hong Kong and their families.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Hong Kong BN(O) route allows BN(O) citizens and their dependent family members to live, work, and study in the UK. It was introduced to provide a pathway to UK settlement for people from Hong Kong.</p>
              <p>The visa can be granted for a period of 5 years, or two periods of 30 months. After 5 years of continuous residence in the UK, visa holders can apply for Indefinite Leave to Remain (ILR).</p>
              <p>Crucially, this visa allows almost unrestricted work and study in the UK, without the need for a sponsoring employer or university.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Must be a British National (Overseas)",
                "Usually living in Hong Kong, the UK, or the Crown Dependencies",
                "Able to accommodate and support yourself financially for at least 6 months",
                "Provide a clear TB test certificate (if applying from outside UK)",
                "No serious criminal convictions"
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
              <li className="pl-2">Confirm BN(O) status (even if passport is expired or lost).</li>
              <li className="pl-2">Gather financial evidence showing 6 months of living costs.</li>
              <li className="pl-2">Take a TB test at an approved clinic.</li>
              <li className="pl-2">Submit application using the UK Immigration: ID Check app if eligible, or attend a visa centre.</li>
              <li className="pl-2">Family members should apply at the same time to ensure linked applications.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "BN(O) Status Holder — 30 months (initial)", fee: "£180" },
              { label: "BN(O) Status Holder — 5 years (initial)", fee: "£250" },
              { label: "BN(O) Status Holder — 30-month Extension", fee: "£180" },
              { label: "BN(O) Household Member — 30 months", fee: "£180" },
              { label: "BN(O) Household Member — 5 years", fee: "£250" },
              { label: "BN(O) Household Member — Extension", fee: "£180" },
              { label: "Dependant Child — 30 months", fee: "£180" },
            ]}
            adviserFees={[
              { label: "BN(O) Initial Application (main applicant)", fee: "From £600 + VAT" },
              { label: "BN(O) Extension Application", fee: "From £500 + VAT" },
              { label: "BN(O) Household Member Application", fee: "From £500 + VAT" },
              { label: "Dependant Child Application", fee: "From £350 + VAT" },
              { label: "ILR Application (after 5 years)", fee: "From £850 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £1,035 per year — a 30-month visa costs <strong>£2,587.50</strong> in IHS; a 5-year visa costs <strong>£5,175</strong>.</>}
            ihsVariant="amber"
            processingTime="Standard: ~12 weeks · Priority services may be available in Hong Kong"
            adviserNote="We can assist with the full journey from initial BN(O) application through to ILR and British citizenship."
            freeAssessmentNote="We confirm your BN(O) status eligibility and household member qualifications before you commit to anything."
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
                <AccordionTrigger className="text-left font-serif text-lg">Who qualifies for the BN(O) visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Anyone with British National (Overseas) status. This status was granted to Hong Kong residents before the 1997 handover.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Can children apply?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, dependent children under 18 can apply. Adult children born on or after 1 July 1997 to a BN(O) parent can also apply independently under the BN(O) Household Member route.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">What is BN(O) status?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">It is a type of British nationality created in 1987. You cannot pass it down to children or apply for it now—you must have registered for it before 1997.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What is the route to citizenship?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Live in the UK for 5 years on the BN(O) visa, apply for ILR. After 12 months with ILR, apply to register or naturalise as a full British citizen.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">How does it differ from other routes?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">It offers much more freedom. You don't need a job offer (like Skilled Worker) or specific family ties to a UK citizen (like Family visa). You can work in almost any job or be self-employed.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
