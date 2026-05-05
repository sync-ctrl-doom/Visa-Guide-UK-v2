import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function ChildDependantVisa() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url(https://images.pexels.com/photos/1620650/pexels-photo-1620650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/family" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Family Visa
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Child Dependant Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Bringing children under 18 to join their parent who is settled or working in the UK.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>Children under 18 can apply to join, or remain with, a parent who is settled in the UK or holds certain types of leave (such as a Skilled Worker, Student, or Family visa). The application is made in the child's name and is separate from the parent's application.</p>
              <p>Where parents are separated or divorced and the other biological parent is also involved in the child's life, the "sole responsibility" and "exclusivity" tests become complex. The Home Office requires strong evidence about the nature of parental responsibility and care arrangements.</p>
              <p>Children turning 18 will need to switch to another visa category (such as a Student visa or Skilled Worker visa) to continue living in the UK. They cannot remain on a child dependant visa past their 18th birthday.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Child must be under 18 at the date of application",
                "At least one parent must be settled in the UK or have limited leave in an eligible category",
                "If both parents are not together, the applying parent must have sole responsibility for the child, or there must be serious and compelling family or other considerations",
                "The child must not be leading an independent life",
                "Adequate accommodation and financial support must be available without recourse to public funds",
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
              <li className="pl-2">Obtain the child's birth certificate and, where relevant, adoption papers or court residence orders.</li>
              <li className="pl-2">If the other parent is alive and has parental responsibility, obtain their written consent to the child relocating to or remaining in the UK (or prepare evidence of sole responsibility).</li>
              <li className="pl-2">Prepare evidence that the parent in the UK has the right status and can financially support and accommodate the child.</li>
              <li className="pl-2">Submit the online application and pay fees — the child's biometrics must be provided at a visa application centre.</li>
              <li className="pl-2">If applying from outside the UK, the child may need to be accompanied by a parent or guardian to the visa centre.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Child Dependant — Initial (outside UK)", fee: "£1,846" },
              { label: "Child Dependant — Extension (inside UK)", fee: "£1,048" },
              { label: "Child born in UK (ILR parent, registration)", fee: "£1,214" },
              { label: "Priority Service (5 working days)", fee: "+£500" },
            ]}
            adviserFees={[
              { label: "Child Dependant Application", fee: "From £600 + VAT" },
              { label: "Child Dependant Extension", fee: "From £500 + VAT" },
              { label: "Complex Case (sole responsibility issues)", fee: "From £900 + VAT" },
              { label: "Child British Citizenship Registration", fee: "From £700 + VAT" },
            ]}
            ihsContent={<><strong>+ Immigration Health Surcharge:</strong> £1,035 per year per child — payable upfront. For a 2.5-year initial visa each child owes <strong>£2,587.50</strong> in IHS.</>}
            ihsVariant="amber"
            processingTime="Outside UK: up to 24 weeks · Inside UK: up to 8 weeks · Often decided alongside the parent's application"
            adviserNote="Sole responsibility and separated family cases require particularly careful preparation — we handle these regularly."
            freeAssessmentNote="We assess whether the sole responsibility test applies to your family situation and advise on what consent or court evidence you need."
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
                <AccordionTrigger className="text-left font-serif text-lg">What is "sole responsibility"?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Sole responsibility means that one parent has had exclusive care and control of the child's upbringing for a sustained period. It is a high threshold — you must show the other parent plays no significant role in the child's day-to-day life, decisions about schooling, health, or welfare.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Do I need the other parent's consent?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Where the other parent has parental responsibility (or equivalent), their written consent to the child living in the UK is strongly advisable and often required. Without it, the Home Office may be concerned about potential child abduction issues.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">Can a step-parent sponsor a stepchild?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, if the step-parent is settled in the UK and the natural parent (who the child is joining) also has the right status. The application is more complex where the biological parent is outside the UK and a step-parent is the main carer.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What happens when the child turns 18?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">They must switch to another immigration route before their 18th birthday. Common options include a Student visa (if studying), Skilled Worker visa (if working), or they may qualify for ILR in their own right if they have 5 years' continuous leave.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Can a child who is born in the UK get ILR automatically?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Not automatically. Being born in the UK only grants British citizenship if at least one parent is British or settled at the time of birth. If not, the child needs their own visa and must accrue 5 years of leave before qualifying for ILR (or British citizenship via registration).</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/family/spouse-visa"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Spouse Visa</span></Link>
              <Link href="/visa-types/british-citizenship/child-registration"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Child British Citizenship</span></Link>
              <Link href="/visa-types/student"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Student Visa</span></Link>
              <Link href="/visa-types/family"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">All Family Visas</span></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
