import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function RightOfAbode() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Right of Abode</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Establishing and proving your legal right to live in the UK free from immigration control.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">What This Covers</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The right of abode means you are entirely free from UK immigration control. You do not need a visa to enter, and there are no limits on how long you can stay or what you can do.</p>
              <p>We assist clients in proving their right of abode, often through patriality rules or complex historical Commonwealth connections. If you qualify, you must obtain a Certificate of Entitlement in your foreign passport or apply for a British passport.</p>
              <p>Unlike Indefinite Leave to Remain (ILR), the right of abode cannot generally be lost through absence from the UK, offering absolute security of residence.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility & Requirements</h2>
            <ul className="space-y-4">
              {[
                "All British citizens automatically have it",
                "Certain Commonwealth citizens born before 1983",
                "Female Commonwealth citizens married to someone with the right of abode before 1983",
                "Extensive documentary evidence of family history required",
                "Must not hold a British passport if applying for a Certificate"
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
              <li>Tracing complex historical legislation to confirm your status</li>
              <li>Gathering and verifying ancestral documentation</li>
              <li>Applying for a Certificate of Entitlement</li>
              <li>Advising dual nationals on their travel rights</li>
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
                <AccordionTrigger className="text-left font-serif text-lg">Who qualifies for right of abode?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">All British citizens, and certain Commonwealth citizens who acquired it before 1 January 1983 through parentage or marriage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">How do I prove right of abode?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must apply for a Certificate of Entitlement to the Right of Abode, which is placed in your foreign passport.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can it be lost?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">It cannot be lost through absence, but Commonwealth citizens can lose it if they cease to be Commonwealth citizens.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">How does it differ from ILR?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">ILR is a permission that can lapse after 2 years outside the UK. Right of abode is a statutory right that does not lapse.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">What about dual nationals?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You cannot have a Certificate of Entitlement if you hold a valid British passport or identity card describing you as a British citizen.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
