import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function EEASettledStatus() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">EEA & Settled Status</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Support navigating the EU Settlement Scheme and securing your status in the UK.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">What This Covers</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The EU Settlement Scheme (EUSS) provides the basis for EEA and Swiss nationals, and their family members, to continue living in the UK post-Brexit. We assist with applications for both pre-settled and settled status.</p>
              <p>While the main deadline has passed, late applications are still possible if there are reasonable grounds. We also assist joining family members and handle complex cases involving retained rights of residence.</p>
              <p>If your application has been refused, we provide representation for appeals and administrative reviews under the EUSS regulations.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility & Requirements</h2>
            <ul className="space-y-4">
              {[
                "EEA, EU, or Swiss national (or family member)",
                "Started living in the UK by 31 December 2020",
                "Proof of continuous residence",
                "Valid passport or national identity card",
                "Reasonable grounds required for late applications"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 bg-muted p-6 md:p-8 border border-border">
            <h2 className="font-serif text-3xl font-bold">How We Can Help</h2>
            <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-lg">
              <li>Advising on eligibility for late EUSS applications</li>
              <li>Assisting with upgrading from pre-settled to settled status</li>
              <li>Preparing applications for joining family members</li>
              <li>Appealing against EUSS refusals</li>
            </ul>
          </div>

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
                <AccordionTrigger className="text-left font-serif text-lg">What is the difference between settled and pre-settled status?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Settled status is permanent residence (ILR) usually granted after 5 years. Pre-settled status is temporary, lasting 5 years, for those with less residence.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What if I missed the deadline?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You can still apply if you have reasonable grounds for missing it, such as medical issues or lack of capacity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can my family members still apply?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, joining family members can apply if the relationship existed before 31 December 2020 (unless a child born since).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">How do I switch from pre-settled to settled status?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must apply once you reach 5 years of continuous residence. It does not happen automatically.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What proof of residence is needed?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Bank statements, council tax bills, P60s, utility bills, or employer letters covering the qualifying period.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
