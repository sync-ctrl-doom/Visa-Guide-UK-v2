import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function SpouseVisa() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/family" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Family Visa
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Spouse &amp; Civil Partner Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Join your British or settled partner in the UK on the most common family visa route.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Spouse / Civil Partner visa allows you to live in the UK if you are married to or in a civil partnership with a British citizen, someone with Indefinite Leave to Remain (ILR), or a person with refugee or humanitarian protection status.</p>
              <p>The initial visa is granted for 30 months (2.5 years). You can then extend for a further 30 months. After 5 years of continuous leave in this category, you qualify to apply for ILR (settlement). This is the standard 5-year route to permanent residence.</p>
              <p>Applications are subject to the "genuine and subsisting relationship" test. The Home Office scrutinises whether the relationship is real, ongoing, and the parties intend to live together permanently in the UK.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Your partner must be British, have ILR/settled status, or have refugee/humanitarian protection",
                "You must be legally married or in a recognised civil partnership",
                "The relationship must be genuine, subsisting, and you must intend to live together",
                "Financial requirement: sponsor must earn at least £29,000 per year (from April 2024)",
                "English language requirement: pass an approved A1 test (A2 for extension, B1 for ILR)",
                "Adequate accommodation available without overcrowding",
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
              <li className="pl-2">Gather extensive evidence of genuine relationship: marriage certificate, photos, chat logs, joint bills, travel history.</li>
              <li className="pl-2">Prepare financial evidence — payslips and bank statements must be in the strictly mandated format set out in the rules.</li>
              <li className="pl-2">Take an approved A1 English language test (unless exempt by nationality or academic qualification).</li>
              <li className="pl-2">Submit online application and pay the application fee and Immigration Health Surcharge.</li>
              <li className="pl-2">Attend a biometric appointment at a visa application centre in your home country.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Spouse / Civil Partner — Initial (outside UK)", fee: "£1,846" },
              { label: "Spouse / Civil Partner — Extension (inside UK)", fee: "£1,048" },
              { label: "ILR after 5 years (Spouse route)", fee: "£2,885" },
              { label: "Priority Service — Initial (5 working days)", fee: "+£500" },
              { label: "Super Priority — Extension (next working day)", fee: "+£1,000" },
            ]}
            adviserFees={[
              { label: "Initial Spouse Visa Application", fee: "From £900 + VAT" },
              { label: "Spouse Visa Extension", fee: "From £750 + VAT" },
              { label: "ILR Application (Spouse route)", fee: "From £850 + VAT" },
              { label: "Relationship Evidence Review", fee: "From £350 + VAT" },
              { label: "Refusal Review &amp; Re-application", fee: "From £1,000 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £1,035 per year — payable upfront. For an initial 2.5-year visa this is <strong>£2,587.50</strong> on top of the application fee.</>}
            ihsVariant="amber"
            processingTime="Outside UK: up to 24 weeks standard · Priority available · Inside UK: up to 8 weeks"
            adviserNote="Fees cover full document preparation and submission. Financial requirement calculation included as part of the service."
            freeAssessmentNote="We review your relationship evidence and financial position before you commit to anything — spouse visa refusals are costly to appeal."
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
                <AccordionTrigger className="text-left font-serif text-lg">What is the financial requirement for a spouse visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">From April 2024, the minimum income is £29,000. It can be met through employment, self-employment, or savings. The rules on how income is calculated are very specific — irregular income, bonuses, and non-salaried roles each have their own rules.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">How do I prove a genuine relationship?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Through a combination of: marriage certificate, photos together across different dates and locations, joint tenancy or mortgage, shared bank accounts, communication history (WhatsApp, emails), travel together, and declarations from family and friends.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can I apply if we live in different countries?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes. The application is typically made from outside the UK. You do not need to live together at the time of application, but you must intend to live together in the UK once the visa is granted.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What happens if the application is refused?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Spouse visa refusals from outside the UK carry a right of appeal to the First-tier Tribunal under Article 8 of the ECHR. In-country extension refusals may also attract an appeal right. We handle appeals as well as fresh applications.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">How long until I can apply for ILR?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">After 5 years of continuous leave as a spouse or civil partner, you may apply for ILR. You must not have spent more than 180 days outside the UK in any 12-month period during those 5 years.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/family/unmarried-partner-visa"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Unmarried Partner Visa</span></Link>
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
