import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function Student() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Student Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            For individuals aged 16 or over wishing to study at a higher education level in the UK.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Student visa (formerly Tier 4) allows international students to study in the UK at licensed educational institutions. It requires a Confirmation of Acceptance for Studies (CAS) from your chosen university or college.</p>
              <p>Applicants must prove they have the required English language skills (typically IELTS B2 level for degree courses) and sufficient funds to support themselves without relying on public funds.</p>
              <p>Degree-level students are usually permitted to work up to 20 hours per week during term time and full-time during holidays, providing valuable work experience alongside studies.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Unconditional offer and CAS from a licensed student sponsor",
                "English language proficiency (usually B2 level)",
                "Maintenance funds to cover course fees and living costs",
                "Genuine intent to study",
                "Parental consent if under 18"
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
              <li className="pl-2">Accept an offer and receive your CAS number (no earlier than 6 months before course start).</li>
              <li className="pl-2">Prepare financial evidence showing funds held for 28 consecutive days.</li>
              <li className="pl-2">Take an approved English language test if required.</li>
              <li className="pl-2">Submit online application and pay IHS fees.</li>
              <li className="pl-2">Attend biometric appointment.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Student Visa — Initial (outside UK)", fee: "£490" },
              { label: "Student Visa — Extension / Switch (in UK)", fee: "£490" },
              { label: "Child Student Visa (under 18, outside UK)", fee: "£490" },
              { label: "Child Student Visa — Extension (in UK)", fee: "£490" },
              { label: "Short-term Study Visa (under 6 months)", fee: "£200" },
              { label: "Dependant of Postgraduate Research Student", fee: "£490" },
              { label: "Priority Service (5 working days)", fee: "+£500" },
            ]}
            adviserFees={[
              { label: "Student Visa — Initial Application", fee: "From £500 + VAT" },
              { label: "Student Visa — Extension / Switch", fee: "From £400 + VAT" },
              { label: "Child Student Visa Application", fee: "From £450 + VAT" },
              { label: "Dependant Application", fee: "From £350 + VAT" },
              { label: "Refusal Review &amp; Reconsideration", fee: "From £650 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £776 per year for students (reduced rate). A 3-year course costs <strong>£2,328</strong> in IHS, payable upfront.</>}
            ihsVariant="amber"
            processingTime="Outside UK: ~3 weeks · Inside UK: ~8 weeks · Priority services often available"
            adviserNote="CAS verification and maintenance funds calculation included as part of the service."
            freeAssessmentNote="We review your CAS, funds, and eligibility before you commit to anything."
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
                <AccordionTrigger className="text-left font-serif text-lg">Can I work on a student visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, if studying at degree level you can work 20 hours a week during term time and full-time in holidays. Below degree level is usually restricted to 10 hours.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Can I bring my family?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Recent rules restrict dependants. Currently, only students on postgraduate research programs (like a PhD) or government-sponsored students can bring dependants.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">How much money do I need in my bank?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Course fees for one year plus £1,334 per month for London (£12,006 total) or £1,023 per month outside London (£9,207 total) held for 28 days.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Can I extend my student visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, if you are progressing to a higher level of study with a new CAS from your sponsor.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Can I switch to a Skilled Worker visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, you can switch to a Skilled Worker visa from within the UK once you have completed your degree course.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
