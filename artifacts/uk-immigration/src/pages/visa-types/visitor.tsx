import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Globe, Briefcase, Stethoscope, Heart, ArrowRight } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

const subTypes = [
  { icon: Globe, title: "Long-Term Visitor Visa", desc: "2, 5, or 10-year multiple-entry visas for regular UK visitors.", href: "/visa-types/visitor/long-term" },
  { icon: Briefcase, title: "Business Visitor", desc: "Attending meetings, conferences, or negotiations — no paid work.", href: "/visa-types/visitor" },
  { icon: Heart, title: "Marriage Visitor Visa", desc: "Come to the UK specifically to marry or form a civil partnership.", href: "/visa-types/visitor" },
  { icon: Stethoscope, title: "Private Medical Treatment", desc: "Visiting the UK to receive private medical treatment.", href: "/visa-types/visitor" },
];

export default function Visitor() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Standard Visitor Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            For short stays up to 6 months for tourism, business, study, or family visits.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Visitor Sub-types</h2>
            <p className="text-muted-foreground">The Standard Visitor visa covers several specific purposes of visit. Select the most relevant for full details and costs.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {subTypes.map((item) => (
                <Link key={item.title} href={item.href}>
                  <div className="border border-border p-5 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group h-full flex flex-col">
                    <item.icon className="text-secondary mb-3" size={22} />
                    <h3 className="font-serif text-lg font-semibold group-hover:text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{item.desc}</p>
                    <span className="text-xs text-primary mt-3 inline-flex items-center gap-1">Full details <ArrowRight size={12} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Standard Visitor visa has replaced various separate visitor visas. It allows you to enter the UK for up to 6 months for a range of permitted activities including tourism, seeing family, attending business meetings, or short courses of study.</p>
              <p>While often seen as a simple visa, visitor refusals are extremely common. The Home Office assesses the "genuine intention to leave" intensely, looking at your ties to your home country (job, family, property).</p>
              <p>Crucially, visitors are strictly prohibited from working, producing goods, or providing services directly to the UK public.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Must intend to leave the UK at the end of the visit",
                "Able to support yourself financially during your stay",
                "Able to pay for your return or onward journey",
                "Will not live in the UK through frequent or successive visits",
                "Will only engage in permitted visitor activities"
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
              <li className="pl-2">Determine the purpose of your visit and permitted activities.</li>
              <li className="pl-2">Gather evidence of strong ties to home country (employment letters, property deeds).</li>
              <li className="pl-2">Prepare financial evidence showing affordable travel/stay.</li>
              <li className="pl-2">Submit application and pay fee.</li>
              <li className="pl-2">Attend biometrics appointment in your home country.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Standard Visitor Visa (6 months)", fee: "£115" },
              { label: "Long-Term Visitor Visa — 2 years", fee: "£400" },
              { label: "Long-Term Visitor Visa — 5 years", fee: "£771" },
              { label: "Long-Term Visitor Visa — 10 years", fee: "£963" },
              { label: "Permitted Paid Engagement Visitor", fee: "£115" },
              { label: "Marriage / Civil Partnership Visitor", fee: "£115" },
              { label: "Private Medical Treatment Visitor", fee: "£115" },
            ]}
            adviserFees={[
              { label: "Standard Visitor Visa Application", fee: "From £350 + VAT" },
              { label: "Long-Term Visitor Visa Application", fee: "From £400 + VAT" },
              { label: "Business / Permitted Paid Engagement", fee: "From £400 + VAT" },
              { label: "Medical Treatment Visitor", fee: "From £450 + VAT" },
              { label: "Refusal Review &amp; Re-application", fee: "From £550 + VAT" },
              { label: "Administrative Review Submission", fee: "From £500 + VAT" },
            ]}
            ihsContent={<><strong>No Immigration Health Surcharge</strong> is payable on any Visitor visa — regardless of duration. Each individual stay is still limited to a maximum of 6 months.</>}
            ihsVariant="green"
            processingTime="Outside UK: ~3 weeks standard · Priority services available in most countries"
            adviserNote="We prepare a compelling covering letter highlighting your travel history and home country ties to reduce the risk of refusal."
            freeAssessmentNote="Visitor refusals are common — let us review your circumstances and travel history before you apply."
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
                <AccordionTrigger className="text-left font-serif text-lg">How long am I allowed to stay?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Up to 6 months per visit. Even with a 10-year visa, you cannot stay for more than 6 months at a time.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Can I work on a visitor visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">No. You cannot do paid or unpaid work for a UK company. You can only do permitted business activities like attending meetings, negotiating contracts, or specific training.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can I study?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You can study for up to 6 months, provided study is not the main reason for your visit (unless you are coming specifically for a short course).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">Can I extend my stay?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Usually no, unless exceptional circumstances apply (like a medical emergency) or you are extending to complete the maximum 6 months.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What if I overstayed previously?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Previous overstaying triggers mandatory refusal bans (1 to 10 years) depending on how and when you left the UK. Seek legal advice before applying.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
