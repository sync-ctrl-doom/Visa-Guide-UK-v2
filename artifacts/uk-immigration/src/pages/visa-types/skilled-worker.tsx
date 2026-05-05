import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function SkilledWorker() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Skilled Worker Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            The primary route for non-UK residents to live and work in the UK for an approved employer.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Skilled Worker visa operates under the points-based system. You must score 70 points in total to be eligible. Fifty of these points are mandatory: having a job offer from an approved sponsor, a job at the appropriate skill level, and meeting English language requirements.</p>
              <p>The remaining 20 "tradeable" points relate to your salary. Generally, you must be paid at least £38,700 per year or the 'going rate' for your profession, whichever is higher (note: new entrant and other discounts apply).</p>
              <p>This visa can last up to 5 years and provides a direct path to Indefinite Leave to Remain (ILR).</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "A valid Certificate of Sponsorship (CoS) from a UK employer",
                "Job must be on the list of eligible occupations",
                "Salary must meet the minimum threshold (£38,700 or going rate)",
                "English language proficiency to at least level B1",
                "Sufficient personal savings to support yourself upon arrival"
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
              <li className="pl-2">Secure a job offer and receive your Certificate of Sponsorship (CoS).</li>
              <li className="pl-2">Check you meet the specific salary and English requirements.</li>
              <li className="pl-2">Prepare supporting documents (bank statements, English test certificates).</li>
              <li className="pl-2">Submit online application and pay fees/Immigration Health Surcharge.</li>
              <li className="pl-2">Provide biometrics at a visa application centre.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Initial — up to 3 years (outside UK)", fee: "£719" },
              { label: "Initial — over 3 years (outside UK)", fee: "£1,420" },
              { label: "Extension / Switch — up to 3 years (in UK)", fee: "£827" },
              { label: "Extension / Switch — over 3 years (in UK)", fee: "£1,639" },
              { label: "Dependant — Initial (outside UK, up to 3 yrs)", fee: "£719" },
              { label: "Dependant — Extension (in UK, up to 3 yrs)", fee: "£827" },
              { label: "Priority Service (5 working days)", fee: "+£500" },
              { label: "Super Priority (next working day, UK only)", fee: "+£1,000" },
            ]}
            adviserFees={[
              { label: "Initial Skilled Worker Application", fee: "From £750 + VAT" },
              { label: "Extension / In-Country Switch", fee: "From £650 + VAT" },
              { label: "Dependant Application", fee: "From £400 + VAT" },
              { label: "Sponsor Licence Advice (employer)", fee: "From £500 + VAT" },
              { label: "Refusal Review &amp; Reconsideration", fee: "From £850 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £1,035 per year of the visa — e.g. a 5-year visa costs <strong>£5,175</strong> in IHS alone, paid upfront with the application.</>}
            ihsVariant="amber"
            processingTime="Outside UK: ~3 weeks · Inside UK: ~8 weeks · Priority and Super Priority available"
            adviserNote="Salary threshold checks and SOC code verification included at no extra charge as part of our service."
            freeAssessmentNote="We check your points score, salary thresholds, and sponsorship eligibility before you commit to anything."
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
                <AccordionTrigger className="text-left font-serif text-lg">What is the minimum salary?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Generally £38,700 or the going rate for the role. Discounts apply for 'new entrants', PhD holders, or roles on the Immigration Salary List.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Can my family come with me?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, your spouse/partner and children under 18 can apply to join you as dependants.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">How do I find a licensed sponsor?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">The Home Office publishes a public register of licensed sponsors. You must apply for jobs directly with these employers.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Can I switch from a Student visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, you can switch from within the UK once you have completed your course, or if your job start date is after your course completion date.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Does it lead to settlement?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, after 5 continuous years on a Skilled Worker visa, you can apply for Indefinite Leave to Remain (ILR).</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
