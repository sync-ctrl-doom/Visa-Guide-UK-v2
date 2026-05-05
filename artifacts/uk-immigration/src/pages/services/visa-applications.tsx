import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

export default function VisaApplications() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Visa Applications</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Comprehensive assistance with all standard visa categories, ensuring your application is prepared meticulously.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">What This Covers</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>Our visa application service encompasses the entire points-based system, including skilled worker visas, student visas, family and partner visas, and standard visitor applications.</p>
              <p>We handle the complex requirements of sponsor licences, application preparation, and final submission. We also conduct rigorous document checks to ensure your evidence meets Home Office standards before anything is submitted.</p>
              <p>Whether you are an employer looking to sponsor talent or an individual seeking to visit, study, or work in the UK, we provide end-to-end representation.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility & Requirements</h2>
            <ul className="space-y-4">
              {[
                "Appropriate visa category identified",
                "Correct documentation matching Home Office rules",
                "Sufficient maintenance funds if applicable",
                "English language requirements met if applicable",
                "Valid passport or travel document"
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
              <li>Strategic advice on the most appropriate visa route</li>
              <li>Thorough review of all supporting documentation</li>
              <li>Preparation of legal representations to accompany the application</li>
              <li>Liaising with the Home Office on your behalf</li>
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
                <AccordionTrigger className="text-left font-serif text-lg">What are the typical processing times?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Processing times vary by visa type and location of application. Standard processing is typically 3-8 weeks, but priority services may be available.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">What are the success rates?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">With proper preparation, success rates are high. However, the Home Office strictly applies the rules, so precision is crucial.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">What happens if my application is refused?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Depending on the visa, you may have the right to administrative review or appeal. We can advise on the best course of action following a refusal.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What documents are required?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Requirements are highly specific to the visa category. We provide a tailored document checklist based on your circumstances.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Do I need a sponsor?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Skilled Worker and Student visas require a licensed sponsor. Family and Visitor visas do not, though Family visas require a sponsoring relative.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-serif text-lg">When do I provide biometrics?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You will be prompted to book a biometric appointment after submitting your online application.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
