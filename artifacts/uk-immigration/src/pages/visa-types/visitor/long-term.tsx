import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function LongTermVisitorVisa() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/visitor" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Visitor Visa
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Long-Term Visitor Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Multiple-entry visas valid for 2, 5, or 10 years — ideal for regular UK visitors who want to avoid repeated applications.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Long-Term Visitor visa is a Standard Visitor visa granted for 2, 5, or 10 years. Unlike a single-entry or 6-month visa, it allows multiple visits to the UK over the duration — without needing to apply each time.</p>
              <p>Crucially, each individual stay is still limited to 6 months. The long-term visa does not allow you to stay longer on any single visit, nor does it grant any right to work or settle. It simply saves the cost and effort of repeated short-term visa applications.</p>
              <p>Long-term visas are usually granted to applicants who have a good travel history to the UK or other Western countries, demonstrate strong ties to their home country, and have a clear pattern of short-term visits.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Who Should Apply?</h2>
            <ul className="space-y-4">
              {[
                "Regular UK visitors — for business, family, or tourism — who visit more than once or twice per year",
                "Grandparents or parents who visit family members settled in the UK multiple times per year",
                "Business travellers attending meetings, conferences, or training courses regularly",
                "Applicants with a clean visa and travel history who are likely to be granted a longer visa",
                "Those who want to avoid repeating the full application process every 6 months",
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
              <li className="pl-2">Identify the correct visa duration to request: 2 years is typically granted to first-time or newer applicants; 5 or 10 years to those with a strong UK/Western travel history.</li>
              <li className="pl-2">Gather evidence of strong ties to your home country: employment letter, property ownership, family responsibilities, business interests.</li>
              <li className="pl-2">Show sufficient financial means to fund all planned visits without working in the UK.</li>
              <li className="pl-2">Submit the online application and attend a biometric appointment at a visa application centre in your country.</li>
              <li className="pl-2">Note: the Home Office decides what duration to grant — you can request a longer one but the ECO may grant a shorter period based on your profile.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Standard Visitor Visa (6 months, single use)", fee: "£115" },
              { label: "Long-Term Visitor Visa — 2 years", fee: "£400" },
              { label: "Long-Term Visitor Visa — 5 years", fee: "£771" },
              { label: "Long-Term Visitor Visa — 10 years", fee: "£963" },
              { label: "Priority Service (most countries)", fee: "+£250" },
            ]}
            adviserFees={[
              { label: "Long-Term Visitor Visa Application", fee: "From £400 + VAT" },
              { label: "Standard Visitor Visa Application", fee: "From £350 + VAT" },
              { label: "Refusal Review &amp; Re-application", fee: "From £550 + VAT" },
              { label: "Administrative Review Submission", fee: "From £500 + VAT" },
            ]}
            ihsContent={<><strong>No Immigration Health Surcharge</strong> is payable on any visitor visa — regardless of duration. Each individual stay is still limited to a maximum of 6 months.</>}
            ihsVariant="green"
            processingTime="Outside UK: approximately 3 weeks standard · Priority available at most centres worldwide"
            adviserNote="We prepare a compelling covering letter highlighting your travel history and ties to home country to maximise the chances of a longer-duration grant."
            freeAssessmentNote="We assess your travel history and ties to advise on the best visa duration to request and what evidence to include."
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
                <AccordionTrigger className="text-left font-serif text-lg">Can I request a 10-year visa on my first application?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You can request any duration, but the Entry Clearance Officer will grant what they consider appropriate for your profile. First-time applicants or those with limited travel history are typically granted shorter durations (2 years). Those with a strong, clean travel history across multiple countries are more likely to receive 5 or 10 years.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">How many days per year can I spend in the UK?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Each stay is limited to 6 months, but there is no fixed annual limit. However, the Home Office is alert to applicants who appear to be living in the UK through successive or frequent visits. Spending the majority of each year in the UK on a visitor visa is a reason for refusal on future applications.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can I work during a visit?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">No. A visitor visa of any duration does not permit paid work, self-employment, or providing services to UK clients. Permitted business activities (attending meetings, negotiating contracts) are allowed but not paid work.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Is it worth getting a 10-year visa vs multiple 6-month visas?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Usually yes. A 10-year visa costs £963 versus approximately £115 per 6-month application. For regular visitors, a 10-year visa pays for itself in 8-9 applications. It also saves time and the stress of repeated applications.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What if I need to stay longer than 6 months on one visit?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">A visitor visa cannot be extended beyond 6 months except in very limited emergency circumstances (serious illness, for example). If you need to stay longer or for a specific purpose (work, study, family), you would need to leave and apply for the appropriate visa.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/visitor"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Standard Visitor Visa</span></Link>
              <Link href="/visa-types/family"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Family Visa</span></Link>
              <Link href="/visa-types/skilled-worker"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Skilled Worker Visa</span></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
