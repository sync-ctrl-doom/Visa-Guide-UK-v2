import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft, AlertTriangle } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

export default function AdultDependentRelative() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url(https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <Link href="/visa-types/family" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Family Visa
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">Adult Dependent Relative Visa</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            For parents, grandparents, and adult relatives who require long-term personal care from a settled UK family member.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 rounded">
            <AlertTriangle className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-amber-800 dark:text-amber-200">The Adult Dependent Relative visa has an extremely high refusal rate. Applications require compelling medical evidence and must show the required care is unavailable or unaffordable in the home country. Professional advice is strongly recommended before applying.</p>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>The Adult Dependent Relative (ADR) visa allows parents, grandparents, siblings, and adult children to come to the UK to receive long-term personal care from a British citizen or settled person. It is the most difficult family visa to obtain.</p>
              <p>The Home Office requires evidence that the relative requires long-term personal care as a result of age, illness, or disability, and that the required level of care is <strong>not available or not affordable</strong> in their home country — even with professional help or community support.</p>
              <p>This is a direct grant of ILR (settlement), not a temporary visa. If granted, the person can remain permanently. However, the Home Office grants this visa very sparingly, and a well-prepared application is essential.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "The applicant must be a parent, grandparent, brother, sister, son, or daughter aged 18 or over",
                "The UK sponsor must be British, have ILR, or have certain other settled status",
                "The relative must need long-term personal care due to age, illness, or disability",
                "The required care must not be available in the home country (even with support from other relatives or professional carers)",
                "The required care must not be affordable in the home country (evidenced by cost comparisons)",
                "The UK sponsor must be able to financially maintain and accommodate the relative without public funds",
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
              <li className="pl-2">Obtain a comprehensive medical report detailing the specific care needs, diagnosis, and prognosis — this must be from a qualified medical professional and be as detailed as possible.</li>
              <li className="pl-2">Research the availability and cost of professional care in the home country: obtain evidence from local care providers, hospitals, or social services showing that adequate care is unavailable or unaffordable.</li>
              <li className="pl-2">The UK sponsor prepares financial evidence showing they can maintain and accommodate the relative without any public funds. A formal undertaking ("sponsorship declaration") may be required.</li>
              <li className="pl-2">Submit the application from outside the UK along with all supporting evidence.</li>
              <li className="pl-2">Await a decision — the Entry Clearance Officer may request an interview. Due to the complexity, processing can take several months.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Adult Dependent Relative — Initial Grant (ILR)", fee: "£3,250" },
              { label: "Adult Dependent Relative — Extension (if granted)", fee: "£3,250" },
            ]}
            adviserFees={[
              { label: "ADR Initial Application (full preparation)", fee: "From £950 + VAT" },
              { label: "Medical &amp; Care Evidence Strategy", fee: "From £500 + VAT" },
              { label: "ADR Refusal Appeal / Review", fee: "From £1,400 + VAT" },
            ]}
            ihsContent={<><strong>Immigration Health Surcharge:</strong> The ADR visa grants ILR (settlement) directly — <strong>no IHS is payable</strong>. ILR holders have full access to the NHS.</>}
            ihsVariant="green"
            processingTime="Outside UK only · Processing may take 3–6+ months · No priority service available"
            adviserNote="Given the very high refusal rate, we strongly recommend a detailed case assessment before spending money on this application."
            freeAssessmentNote="We assess your relative's care needs and the feasibility of the application before you commit. We will be honest if the prospects are low."
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
                <AccordionTrigger className="text-left font-serif text-lg">Why is this visa so difficult to get?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Because the UK government deliberately set a high threshold: the care must be unavailable or unaffordable in the home country. If professional carers exist in the home country — even if expensive — the Home Office may argue care is available. You must systematically prove otherwise with concrete evidence.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Can I bring both parents at the same time?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Yes, if both parents qualify individually. If only one parent needs care, the other parent may be able to come as a dependant if they are included on the application. Each case is assessed on its own merits.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">What if there are other relatives in the home country?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">The Home Office will consider whether other relatives can provide or fund the required care. If siblings or other family members live nearby and could potentially care for the relative, this will be raised as an issue. You must address why they cannot or will not provide adequate care.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What happens if the application is refused?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You have a right to appeal to the First-tier Tribunal. Appeals on this route engage Article 8 ECHR (right to private and family life). The appeal process can take 12–18 months, but can succeed where the original application was poorly presented.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">Does the UK sponsor need to give up work to provide care?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">No, but you must demonstrate that the sponsor intends to provide personal care and can accommodate the relative. The sponsor does not need to be the sole carer — arranging additional professional care in the UK is acceptable once the relative is here.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="border border-border p-6 bg-muted/30 space-y-3">
            <p className="font-serif text-lg font-semibold">Related Visa Routes</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visa-types/family/spouse-visa"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Spouse Visa</span></Link>
              <Link href="/visa-types/ilr"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Indefinite Leave to Remain</span></Link>
              <Link href="/services/appeals"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">Immigration Appeals</span></Link>
              <Link href="/visa-types/family"><span className="text-sm border border-border px-3 py-1.5 hover:bg-muted transition-colors cursor-pointer">All Family Visas</span></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
