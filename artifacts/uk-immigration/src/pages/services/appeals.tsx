import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function Appeals() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Immigration Appeals & Tribunals</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Professional representation when challenging Home Office decisions and refusal letters.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">What This Covers</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>Receiving a refusal letter can be devastating, but it is often not the end of the road. We provide robust representation in the First-tier Tribunal and Upper Tribunal for immigration and asylum appeals.</p>
              <p>Our work includes dissecting Home Office refusal letters, formulating strong legal grounds for appeal, and preparing comprehensive appeal bundles. We handle administrative reviews for points-based system refusals and out-of-time appeals where deadlines were missed.</p>
              <p>Where the Home Office has acted unlawfully but no right of appeal exists, we can advise on the merits of Judicial Review proceedings.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility & Requirements</h2>
            <ul className="space-y-4">
              {[
                "Must have a statutory right of appeal or administrative review",
                "Strict time limits apply (usually 14 days in-country, 28 days out-of-country)",
                "Grounds must be based in law, human rights, or refugee convention",
                "Must pay the relevant tribunal fees unless exempt",
                "Evidence must specifically address the reasons for refusal"
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
              <li>Detailed analysis of your refusal letter</li>
              <li>Drafting grounds of appeal and witness statements</li>
              <li>Compiling the Appellant's bundle</li>
              <li>Instructing specialist barristers for tribunal hearings</li>
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
                <AccordionTrigger className="text-left font-serif text-lg">How long do I have to appeal?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Usually 14 days if you are in the UK, and 28 days if you applied from overseas. The deadline is strict.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What are the costs involved?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Tribunal fees apply (£80 for a decision on the papers, £140 for an oral hearing), plus our legal fees and potentially barrister fees.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Do I need a barrister?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">While we prepare your case, we typically instruct specialist immigration barristers (counsel) to represent you on the day of the hearing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What happens if my appeal fails?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">If there is an error of law in the judge's decision, you may be able to seek permission to appeal to the Upper Tribunal.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What are the success rates?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">A significant percentage of Home Office decisions are overturned at appeal. Success depends entirely on the specific facts and preparation of your case.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
