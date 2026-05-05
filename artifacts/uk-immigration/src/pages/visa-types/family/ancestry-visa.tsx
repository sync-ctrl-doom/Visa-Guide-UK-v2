import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function AncestryVisa() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url(https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/family" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Family Visa
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">UK Ancestry Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            For Commonwealth citizens with a UK-born grandparent — the right to live and work in the UK for up to 5 years.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The UK Ancestry visa is available to Commonwealth citizens who can prove that one of their grandparents was born in the United Kingdom (including the Channel Islands and the Isle of Man). It is one of the few UK visas that does not require a job offer or a specific sponsor.</p>
              <p>The visa is granted for 5 years. Holders have the right to work in any job, be self-employed, and study. After 5 years of continuous residence, you can apply for Indefinite Leave to Remain (ILR) and eventually British citizenship.</p>
              <p>The key challenge is the documentary evidence chain: you must produce birth and marriage certificates linking you, your parent, and your grandparent. In many Commonwealth countries, such records may be incomplete or difficult to obtain — we specialise in this.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "You must be a citizen of a Commonwealth country",
                "One of your grandparents must have been born in the United Kingdom (England, Scotland, Wales, Northern Ireland, Channel Islands, Isle of Man)",
                "You must be aged 17 or over at the time of application",
                "You must be able to work and intend to take or seek employment in the UK",
                "You must be able to adequately maintain and accommodate yourself and any dependants without recourse to public funds",
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
              <li className="pl-2">Build the documentary chain: obtain your own birth certificate, your parent's birth certificate, and your grandparent's UK birth certificate. Marriage certificates may be needed to link surnames.</li>
              <li className="pl-2">If documents are missing or in a foreign language, arrange translations and obtain replacement certificates from national registries — we can advise on this.</li>
              <li className="pl-2">Prepare evidence of Commonwealth citizenship (your passport) and ability to maintain yourself (bank statements, employment letter, or savings).</li>
              <li className="pl-2">Submit your online application from outside the UK and pay the visa fee and Immigration Health Surcharge.</li>
              <li className="pl-2">Attend a biometric appointment at a visa application centre in your country.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "UK Ancestry Visa — Initial (outside UK, 5 years)", fee: "£532" },
              { label: "UK Ancestry Visa — Extension (inside UK, 2.5 years)", fee: "£532" },
              { label: "Dependant Spouse / Partner (per person)", fee: "£532" },
              { label: "Dependant Child (per child)", fee: "£532" },
              { label: "ILR after 5 years (Ancestry route)", fee: "£2,885" },
            ]}
            adviserFees={[
              { label: "UK Ancestry Visa Application", fee: "From £700 + VAT" },
              { label: "Ancestry Document Chain Review", fee: "From £300 + VAT" },
              { label: "Ancestry Visa Extension", fee: "From £600 + VAT" },
              { label: "Dependant Application", fee: "From £400 + VAT" },
              { label: "ILR Application (Ancestry route)", fee: "From £850 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £1,035 per year — the initial 5-year visa requires <strong>£5,175</strong> in IHS upfront (in addition to the £532 visa fee).</>}
            ihsVariant="amber"
            processingTime="Outside UK: 3–6 weeks standard · Priority services available at most visa centres"
            adviserNote="We specialise in building the ancestry documentary chain, including locating and verifying historic UK birth records."
            freeAssessmentNote="We review your grandparent's birth details and the document chain before you commit — we can tell you what records you need before you start."
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
                <AccordionTrigger className="text-left font-serif text-lg">Which countries qualify as Commonwealth countries?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Most independent Commonwealth member states qualify, including Australia, Canada, New Zealand, India, Pakistan, South Africa, Nigeria, Jamaica, and many others. British Overseas Territories citizens may also qualify. Contact us to confirm your specific nationality.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What if my grandparent was born in Ireland?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Ireland (the Republic) is not part of the UK. However, Northern Ireland IS part of the UK — so if your grandparent was born in Northern Ireland, you qualify. If born in the Republic of Ireland, you do not qualify for the Ancestry visa but may have other routes available.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can I bring my family?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes. Your spouse or civil partner and children under 18 can apply as dependants on your UK Ancestry visa. They will have the same right to work and study as you do.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What if I can't find my grandparent's birth certificate?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">UK birth records are held at the General Register Office and are publicly accessible. We can help you search for and obtain a certified copy of your grandparent's UK birth certificate, which is usually required as primary evidence.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Do I need a job offer?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">No. Unlike the Skilled Worker visa, there is no requirement for a Certificate of Sponsorship or job offer. You simply need to show you are able to work and intend to seek employment once in the UK. The visa allows you to work in any occupation.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/family/spouse-visa"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Spouse Visa</span></Link>
              <Link href="/visa-types/ilr"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Indefinite Leave to Remain</span></Link>
              <Link href="/visa-types/british-citizenship"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">British Citizenship</span></Link>
              <Link href="/visa-types/family"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">All Family Visas</span></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
