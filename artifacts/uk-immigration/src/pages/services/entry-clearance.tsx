import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function EntryClearance() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Entry Clearance</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Guidance and representation for applying to enter the UK from abroad.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">What This Covers</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>Entry clearance is the formal procedure of applying for leave to enter the UK from overseas. This process results in an entry clearance vignette (sticker) being placed in your passport.</p>
              <p>We handle complex issues surrounding visa endorsements, switching conditions, and port of entry disputes. The process requires precise documentation to satisfy Entry Clearance Officers at overseas posts.</p>
              <p>Our team ensures that your application is robust, addressing any previous immigration history or potential complications before submission.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility & Requirements</h2>
            <ul className="space-y-4">
              {[
                "Application must be made from outside the UK",
                "Meet the requirements of the specific visa category",
                "Provide mandatory biometric information",
                "Declare full immigration history",
                "Pass general grounds for refusal checks"
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
              <li>Comprehensive review of entry clearance requirements</li>
              <li>Preparation of supporting evidence and legal cover letters</li>
              <li>Advice on traveling with Biometric Residence Permits</li>
              <li>Guidance on port of entry procedures</li>
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
                <AccordionTrigger className="text-left font-serif text-lg">What is the difference between entry clearance and a visa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">In practice, they are often used interchangeably. Entry clearance is the specific permission granted to a person prior to arrival in the UK.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">How long does entry clearance last?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Usually 30 or 90 days to allow you to travel to the UK, after which you collect your Biometric Residence Permit.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">What should I do if refused at the border?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Seek immediate legal advice. If you hold entry clearance, border officials need significant grounds to cancel it.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">How do I travel with my BRP?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must present your BRP alongside your valid passport when returning to the UK.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Can I apply from within the UK?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">No, entry clearance applications must be made from outside the UK, usually from your country of nationality or residence.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
