import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function Graduate() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Graduate Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Post-study work visa allowing international graduates to stay in the UK for 2-3 years.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Graduate route allows international students who have successfully completed an eligible degree in the UK to stay and work, or look for work, at any skill level.</p>
              <p>It is granted for 2 years (or 3 years for PhD graduates). This visa gives you the flexibility to gain UK work experience without needing a sponsoring employer.</p>
              <p>The Graduate visa does not count directly towards the 5-year settlement (ILR) route, but it provides vital time to secure a sponsored job and switch to a Skilled Worker visa.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Currently hold a valid Student visa or Tier 4 (General) student visa",
                "Successfully completed a UK bachelor's degree, postgraduate degree or eligible course",
                "University must have notified the Home Office of your course completion",
                "Must apply from inside the UK",
                "Must have studied in the UK for a minimum period"
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
              <li className="pl-2">Wait for your university to confirm they have reported your successful completion to the Home Office.</li>
              <li className="pl-2">Gather your current CAS number used for your student visa.</li>
              <li className="pl-2">Apply online before your current Student visa expires.</li>
              <li className="pl-2">Use the 'UK Immigration: ID Check' app to verify identity (or attend an appointment).</li>
              <li className="pl-2">Do not travel outside the UK while the application is pending.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Graduate Visa — Bachelor's / Master's (2 years)", fee: "£822" },
              { label: "Graduate Visa — PhD / Doctoral (3 years)", fee: "£822" },
              { label: "Dependant Partner / Child (if eligible)", fee: "£822" },
              { label: "IHS — 2-year Graduate Visa (total upfront)", fee: "£2,070" },
              { label: "IHS — 3-year Graduate Visa (total upfront)", fee: "£3,105" },
            ]}
            adviserFees={[
              { label: "Graduate Visa Application", fee: "From £450 + VAT" },
              { label: "Graduate Visa (with dependants)", fee: "From £600 + VAT" },
              { label: "Refusal Review &amp; Reconsideration", fee: "From £600 + VAT" },
              { label: "Switch to Skilled Worker (from Graduate)", fee: "From £650 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £1,035 per year — payable upfront for the full duration. 2-year visa = <strong>£2,070</strong>; 3-year (PhD) visa = <strong>£3,105</strong>.</>}
            ihsVariant="amber"
            processingTime="Inside UK only · Decision within 8 weeks · Cannot be extended · One-time route"
            adviserNote="We confirm your university has reported course completion before submission to avoid delays or refusals."
            freeAssessmentNote="We check your university completion status and confirm your eligibility before you commit to the £822 fee."
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
                <AccordionTrigger className="text-left font-serif text-lg">Can I switch to a Skilled Worker visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, you can switch from the Graduate route to a Skilled Worker visa at any time, provided you meet the requirements and find a sponsoring employer.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Can I bring my family?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Only if they were already your dependants in the UK on your Student visa. You cannot bring new dependants on the Graduate route.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">How long can I stay?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">2 years for Bachelor's or Master's degrees, 3 years for PhDs. It cannot be extended.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What happens after 2 years?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must switch to a different visa category (like Skilled Worker) or leave the UK. The Graduate visa is a one-time, non-extendable route.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Can I be self-employed?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, you can be self-employed, start a business, or work as a freelancer on a Graduate visa (with a few exceptions like working as a professional sportsperson).</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
