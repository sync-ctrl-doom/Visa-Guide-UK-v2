import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function Asylum() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Asylum Claims</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Initial support and guidance for individuals seeking international protection in the UK.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">What This Covers</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>Claiming asylum is a complex and highly sensitive process for those fleeing persecution. We provide clear, objective advice on international protection, refugee status, and humanitarian protection.</p>
              <p>We assist clients in navigating the asylum process, from the initial screening interview to preparing detailed witness statements and evidence for the substantive Home Office interview.</p>
              <p>If an initial claim is refused, we can advise on the merits of an appeal or assist in preparing fresh claims based on new evidence or changes in country circumstances.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility & Requirements</h2>
            <ul className="space-y-4">
              {[
                "Must have a well-founded fear of persecution",
                "Persecution based on race, religion, nationality, political opinion, or membership of a particular social group",
                "Must claim asylum as soon as possible upon arrival",
                "Unable to get protection from authorities in your own country",
                "Must be physically in the UK to claim"
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
              <li>Thorough preparation for the substantive asylum interview</li>
              <li>Gathering objective country-of-origin information</li>
              <li>Drafting comprehensive legal representations</li>
              <li>Advising on fresh claims where previous applications failed</li>
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
                <AccordionTrigger className="text-left font-serif text-lg">How do I make an asylum claim?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must claim at the port of entry upon arrival, or if already in the UK, at the asylum intake unit in Croydon.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">How long does asylum take?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Processing times are currently very lengthy. It often takes over 6-12 months to receive an initial decision.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">What happens while waiting?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You will be issued an Application Registration Card (ARC) and may be eligible for asylum support (housing and allowance) if destitute.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What is a fresh claim?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">If your asylum claim is refused and appeal rights exhausted, you can only make a fresh claim if you have significantly different new evidence.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Do I have the right to work?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Generally, asylum seekers cannot work. You can apply for permission if your claim has been pending for over 12 months through no fault of your own, restricted to shortage occupations.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
