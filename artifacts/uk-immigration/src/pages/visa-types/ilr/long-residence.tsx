import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function LongResidence() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/ilr" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to ILR
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">ILR — Long Residence (10 Years)</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Settlement in the UK through 10 years of continuous, lawful residence — regardless of your visa route.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Long Residence ILR route allows people who have lived lawfully in the UK for at least 10 continuous years to apply for Indefinite Leave to Remain (settlement), regardless of the type of visa they held during those 10 years.</p>
              <p>This route is particularly useful for people who have been in the UK on a mix of different visa categories, people who do not meet the standard 5-year route requirements, or those who missed the usual settlement window on another route.</p>
              <p>The application is heavily dependent on continuous residence: you must not have spent more than 180 days outside the UK in any rolling 12-month period during the 10 years. Time spent on visitor visas, unauthorised leave, or immigration bail does not count towards the 10 years.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "At least 10 years of continuous, lawful residence in the UK",
                "Not more than 180 days outside the UK in any 12-month period during those 10 years",
                "The entire 10-year period must be on legal leave (no overstaying, no periods without leave)",
                "Pass the Life in the UK test",
                "Meet the English language requirement (B1 level or above)",
                "Satisfy the Good Character requirement — no serious criminal convictions",
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
              <li className="pl-2">Compile a complete immigration history: every visa, every entry stamp, every period of leave across the 10 years. We can help reconstruct this from passport records and UKVI records.</li>
              <li className="pl-2">Calculate all absences from the UK across the 10 years to confirm the 180-day-per-year limit has not been exceeded in any period.</li>
              <li className="pl-2">Pass the Life in the UK test (book at official centres) and ensure your English language evidence is in place.</li>
              <li className="pl-2">Submit application SET(LR) online along with all supporting documents.</li>
              <li className="pl-2">Attend a biometric appointment. A decision under the standard service is usually made within 6 months.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "ILR — Long Residence (SET(LR))", fee: "£2,885" },
              { label: "Life in the UK Test (per sitting)", fee: "£50" },
              { label: "Super Priority Service (1–2 working days)", fee: "+£1,000" },
              { label: "ILR — Dependant Spouse / Partner", fee: "£2,885" },
              { label: "ILR — Dependant Child", fee: "£2,885" },
            ]}
            adviserFees={[
              { label: "Long Residence ILR Application", fee: "From £1,000 + VAT" },
              { label: "10-Year Absence Calculation &amp; Audit", fee: "From £400 + VAT" },
              { label: "Immigration History Reconstruction", fee: "From £350 + VAT" },
              { label: "Dependant ILR Application", fee: "From £700 + VAT" },
              { label: "Refusal Review &amp; Appeal", fee: "From £1,100 + VAT" },
            ]}
            ihsContent={<><strong>No Immigration Health Surcharge</strong> is payable on an ILR application. Once granted, ILR gives you full, free access to the NHS.</>}
            ihsVariant="green"
            processingTime="Standard: up to 6 months · Super Priority: 1–2 working days (+ £1,000)"
            adviserNote="The 10-year calculation is the most common cause of refusal — small gaps in lawful leave or miscounted absences can invalidate the entire application."
            freeAssessmentNote="We review your full immigration history and passport stamps before you apply — we will identify any potential gaps or absence issues before submitting."
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
                <AccordionTrigger className="text-left font-serif text-lg">Does time on a visitor visa count towards the 10 years?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">No. Time spent in the UK on a visitor visa does not count towards the 10-year qualifying period. Only time on leave that grants the right to remain (work visas, study visas, family visas, etc.) counts. Short tourist stays must be excluded from your calculation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What if I overstayed a visa at some point?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Any period of overstaying — even one day — breaks the continuous lawful residence. The 10-year clock effectively restarts from the date you next got valid leave. There may be exceptions for very short overstays where leave was extended or an in-time application was pending, but these are narrow exceptions.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can I combine different visa types to make up the 10 years?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes. The Long Residence route is unique in that it does not require you to have been on one specific visa type. You could combine years on a Student visa, Skilled Worker visa, Family visa, and other routes — as long as all the time was lawful and continuous.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">How strict is the 180-day absence limit?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Very strict. The Home Office will count absences in each rolling 12-month period. If you exceed 180 days in any single 12-month window within the 10 years, you do not qualify unless there are exceptional circumstances (which are assessed very narrowly).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">How long after ILR can I apply for citizenship?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must hold ILR for 12 months before applying for naturalisation (unless you are married to a British citizen, in which case you can apply immediately after receiving ILR, provided you meet other requirements).</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/ilr"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">ILR Overview</span></Link>
              <Link href="/visa-types/british-citizenship/naturalisation"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Naturalisation</span></Link>
              <Link href="/visa-types/british-citizenship"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">British Citizenship</span></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
