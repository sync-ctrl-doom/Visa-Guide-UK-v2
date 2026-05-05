import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function UnmarriedPartnerVisa() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url(https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/family" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Family Visa
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Unmarried Partner Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            For cohabiting couples not yet married or in a civil partnership, including same-sex partners.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Unmarried Partner visa (also known as the Unmarried Partner or Same-Sex Partner route) allows you to join a British citizen or settled person in the UK if you are in a genuine, cohabiting relationship but are not married or in a civil partnership.</p>
              <p>The defining feature of this route is the requirement to have lived together for at least 2 years in a relationship akin to marriage. This cohabitation requirement distinguishes it from the Spouse visa and means you must provide strong evidence of your shared life.</p>
              <p>The same financial requirement (£29,000+), English language requirement, and accommodation requirements apply as for the Spouse visa. The route to ILR is the same: 5 years continuous leave, then settlement.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Your partner must be British, have ILR/settled status, or have refugee/humanitarian protection",
                "You must have been living together in a relationship akin to marriage for at least 2 years",
                "The relationship must be genuine, subsisting, and you must intend to live together in the UK",
                "Financial requirement: sponsor must earn at least £29,000 per year",
                "English language: pass an approved A1 test (A2 for extension, B1 for ILR)",
                "Adequate, non-overcrowded accommodation must be available",
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
              <li className="pl-2">Compile strong evidence of 2 years cohabitation: joint tenancy agreements, joint utility bills, joint bank statements, shared deliveries — dated across the 2-year period.</li>
              <li className="pl-2">Supplement with relationship evidence: photos together, communication history, evidence of travel together, and statements from people who know you as a couple.</li>
              <li className="pl-2">Prepare financial documents in the correct mandated format showing the sponsor meets the £29,000 income requirement.</li>
              <li className="pl-2">Take an approved A1 English test (unless exempt).</li>
              <li className="pl-2">Submit the application online and attend a biometric appointment at a visa centre in your home country.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Unmarried Partner — Initial (outside UK)", fee: "£1,846" },
              { label: "Unmarried Partner — Extension (inside UK)", fee: "£1,048" },
              { label: "ILR after 5 years (Partner route)", fee: "£2,885" },
              { label: "Priority Service — Initial (5 working days)", fee: "+£500" },
              { label: "Super Priority — Extension (next working day)", fee: "+£1,000" },
            ]}
            adviserFees={[
              { label: "Initial Unmarried Partner Application", fee: "From £900 + VAT" },
              { label: "Unmarried Partner Extension", fee: "From £750 + VAT" },
              { label: "ILR Application (Partner route)", fee: "From £850 + VAT" },
              { label: "Cohabitation Evidence Review", fee: "From £350 + VAT" },
              { label: "Refusal Review &amp; Appeal", fee: "From £1,000 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £1,035 per year — for a 2.5-year initial visa this is <strong>£2,587.50</strong> payable upfront on top of the application fee.</>}
            ihsVariant="amber"
            processingTime="Outside UK: up to 24 weeks · Priority available · Inside UK: up to 8 weeks"
            adviserNote="The 2-year cohabitation requirement requires carefully structured evidence — we review your situation before submission."
            freeAssessmentNote="We assess your cohabitation evidence and financial position before you commit. Refusals on this route often come down to insufficient cohabitation proof."
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
                <AccordionTrigger className="text-left font-serif text-lg">Do we have to have lived together for exactly 2 years?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must demonstrate at least 2 years of living together "in a relationship akin to marriage." Brief periods of necessary separation (e.g. working abroad short-term) do not automatically break this, but the overall pattern must show a cohabiting relationship across the 2-year period.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What is the best evidence of cohabitation?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Joint tenancy or lease agreements and joint utility bills are the strongest. Supplement with joint bank statements showing shared finances, deliveries to the same address, and a letter from your landlord confirming both names on the tenancy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Is it better to marry before applying?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">If you are planning to marry, doing so before applying and using the Spouse visa route removes the cohabitation requirement and may make the application stronger. However, the financial and other requirements remain the same on both routes.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Does this route apply to same-sex couples?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes. Same-sex partners who are not in a civil partnership can use the Unmarried Partner route. Alternatively, same-sex partners who are in a civil partnership use the Civil Partner visa (same fees and process as the Spouse visa).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What if we get married during the application?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">If you marry after submitting but before the decision is made, inform the Home Office. In most cases it is better to withdraw the application and submit a fresh Spouse visa application, as the requirements and processing may differ.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/family/spouse-visa"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Spouse / Civil Partner Visa</span></Link>
              <Link href="/visa-types/family/child-dependant-visa"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Child Dependant Visa</span></Link>
              <Link href="/visa-types/ilr"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Indefinite Leave to Remain</span></Link>
              <Link href="/visa-types/family"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">All Family Visas</span></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
