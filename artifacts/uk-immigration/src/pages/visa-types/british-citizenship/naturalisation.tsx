import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function Naturalisation() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/british-citizenship" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to British Citizenship
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Naturalisation as a British Citizen</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            The main route for adults to become a British citizen after holding ILR for 12 months.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>Naturalisation is the legal process by which an adult becomes a British citizen. Most adults apply under Section 6(1) of the British Nationality Act 1981, requiring 5 years of lawful residence with ILR held for the final 12 months. Spouses of British citizens may apply under Section 6(2), which has a shorter qualifying period.</p>
              <p>The Home Office treats citizenship as a privilege. The Good Character requirement is strictly assessed: criminal convictions, tax non-compliance, immigration breaches, and deception in previous applications can all lead to refusal — even for minor matters.</p>
              <p>Once approved, you attend a Citizenship Ceremony at your local council where you take an oath of allegiance to the Monarch. After the ceremony, you can apply for a British passport.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Hold Indefinite Leave to Remain (ILR) or Settled Status (EUSS) for at least 12 months",
                "Have been in the UK for at least 5 years (3 years if married to a British citizen)",
                "Not more than 450 days outside the UK in the 5-year qualifying period",
                "Not more than 90 days outside the UK in the final 12 months before application",
                "Pass the Life in the UK test",
                "English language proficiency at B1 level or above",
                "Meet the Good Character requirement — no serious criminal history or immigration breaches",
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
              <li className="pl-2">Calculate your absences precisely: count every day outside the UK in the qualifying period and confirm you are within limits.</li>
              <li className="pl-2">Pass the Life in the UK test (book via officialtest.co.uk) — you need at least 75% to pass.</li>
              <li className="pl-2">Ensure your English language evidence is in order: a degree taught in English, an approved English test certificate, or another qualifying English-language qualification.</li>
              <li className="pl-2">Complete and submit Form AN (Application for Naturalisation) via the UKVI online system, uploading all supporting documents.</li>
              <li className="pl-2">Once approved, attend a Citizenship Ceremony at your local council. You must attend within 90 days of being invited.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Naturalisation — Adult (Section 6(1))", fee: "£1,630" },
              { label: "Naturalisation — Spouse of British Citizen (S.6(2))", fee: "£1,630" },
              { label: "Citizenship Ceremony Fee (paid to local council)", fee: "£80" },
              { label: "Life in the UK Test (per sitting)", fee: "£50" },
              { label: "British Passport (after ceremony)", fee: "£110+" },
            ]}
            adviserFees={[
              { label: "Naturalisation Application (adult)", fee: "From £850 + VAT" },
              { label: "Naturalisation — Spouse of British Citizen", fee: "From £800 + VAT" },
              { label: "Absence Calculation &amp; Qualifying Period Check", fee: "From £250 + VAT" },
              { label: "Good Character Assessment &amp; Advice", fee: "From £300 + VAT" },
              { label: "Refusal Review &amp; Re-application Strategy", fee: "From £900 + VAT" },
            ]}
            ihsContent={<><strong>No Immigration Health Surcharge</strong> is payable on a naturalisation application. A separate £80 ceremony fee is payable to your local council upon approval.</>}
            ihsVariant="green"
            processingTime="Standard: up to 6 months · No priority service available for citizenship applications"
            adviserNote="We carefully audit absences and Good Character matters before submission — citizenship refusals are difficult and costly to challenge."
            freeAssessmentNote="We verify your qualifying period, absence record, and any Good Character concerns before you commit to this significant application fee."
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
                <AccordionTrigger className="text-left font-serif text-lg">What counts as a day outside the UK?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Any day where you are not present in the UK, including the day of departure and the day of return if you were abroad overnight. Short trips (e.g. a day trip to France) generally do not count as absences if you return the same day, but the rules are nuanced and we always recommend a careful calculation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Will a minor criminal conviction stop my application?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">It depends on the nature and sentence. Custodial sentences of 4+ years mean a permanent bar. Between 12 months and 4 years means a 15-year wait from end of sentence. Minor cautions or fines from many years ago may still need to be declared but may not automatically lead to refusal. We assess each situation individually.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Do I have to give up my current nationality?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">The UK permits dual (or multiple) nationality. You do not need to renounce your current citizenship to become British. However, your home country may require you to renounce British citizenship or may automatically revoke your original nationality — you should always check with your home country's embassy first.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Can I apply if I am married to a British citizen?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, and there are reduced requirements. You can apply after 3 years of lawful residence (with ILR held immediately before application), and the absence limits are slightly more generous. You apply under Section 6(2) of the British Nationality Act.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">How long after naturalisation can I get a British passport?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must attend your citizenship ceremony first and receive your naturalisation certificate. You can then apply for a British passport — typically taking 3–6 weeks. You cannot apply for a passport before attending the ceremony.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/ilr"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Indefinite Leave to Remain</span></Link>
              <Link href="/visa-types/british-citizenship/child-registration"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Child British Citizenship</span></Link>
              <Link href="/visa-types/british-citizenship"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">All Citizenship Routes</span></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
