import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function NationalityCitizenship() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Nationality & Citizenship</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Applications to formalise your status as a British citizen through naturalisation or registration.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">What This Covers</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>British citizenship provides ultimate security, allowing you to hold a British passport and vote in UK elections. The process is rigorous and requires demonstrating a strong commitment to the UK.</p>
              <p>We assist adults applying for naturalisation, ensuring they meet the complex absence limits, the 'good character' requirement, and the Knowledge of Language and Life in the UK thresholds.</p>
              <p>We also manage registration applications for children, handling cases involving birth in the UK to foreign parents, or children born abroad to British citizens.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility & Requirements</h2>
            <ul className="space-y-4">
              {[
                "Must hold ILR/Settled Status for at least 12 months (unless married to a British citizen)",
                "Strict limits on days spent outside the UK",
                "Must pass the Life in the UK test",
                "Must meet English language requirements",
                "Must satisfy the Good Character requirement (no recent/serious criminal convictions)"
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
              <li>Calculating complex absence limits over the qualifying period</li>
              <li>Advising on Good Character concerns (e.g., driving offences, tax issues)</li>
              <li>Preparing comprehensive applications for naturalisation</li>
              <li>Guiding through registration processes for minors</li>
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
                <AccordionTrigger className="text-left font-serif text-lg">How long do I need to live in the UK?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Usually 5 years plus 1 year holding ILR (6 years total). If married to a British citizen, you can apply immediately upon receiving ILR, provided you've lived in the UK for 3 years.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What is the Life in the UK test?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">A multiple-choice test on British history, culture, and values. It is a mandatory requirement for naturalisation.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Does the UK allow dual citizenship?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, the UK permits dual nationality, but your home country might not. We always advise checking your home country's laws.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">How do I apply for my children?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Children under 18 'register' rather than naturalise. The rules depend heavily on where they were born and the parents' status at the time of birth.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What are typical processing times?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Standard processing is up to 6 months. You must attend a citizenship ceremony once approved.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
