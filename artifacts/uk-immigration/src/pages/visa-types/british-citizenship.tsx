import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, UserCheck, Baby, Globe, ArrowRight } from "lucide-react";
import { CostsSection } from "@/components/CostsSection";

const subTypes = [
  { icon: UserCheck, title: "Naturalisation (Adult)", desc: "The main route for adults with ILR to become British citizens.", href: "/visa-types/british-citizenship/naturalisation" },
  { icon: Baby, title: "Child Registration", desc: "Children under 18 becoming British citizens — by entitlement or discretion.", href: "/visa-types/british-citizenship/child-registration" },
  { icon: Globe, title: "British Overseas Territories / BN(O)", desc: "Registration routes for those with other types of British nationality.", href: "/visa-types/bno" },
];

export default function BritishCitizenship() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">British Citizenship</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            The final step to becoming a British national through naturalisation or registration.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10 md:space-y-16">

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Citizenship Routes</h2>
            <p className="text-muted-foreground">The route to British citizenship depends on your age and circumstances. Select the most relevant route for full requirements and a breakdown of costs.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {subTypes.map((item) => (
                <Link key={item.title} href={item.href}>
                  <div className="border border-border p-5 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group h-full flex flex-col">
                    <item.icon className="text-secondary mb-3" size={22} />
                    <h3 className="font-serif text-base font-semibold group-hover:text-primary mb-1">{item.title}</h3>
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
              <p>British citizenship provides the right to live permanently in the UK, apply for a British passport, and vote. The two main ways to apply are Naturalisation (for adults) and Registration (mostly for children).</p>
              <p>The Home Office treats citizenship as a privilege, not a right. Applications are heavily scrutinised on the 'Good Character' requirement, meaning past criminal convictions, tax issues, or immigration breaches can lead to refusal.</p>
              <p>Absence limits for citizenship are strict: typically no more than 450 days outside the UK in the 5-year qualifying period, and no more than 90 days in the final 12 months.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Eligibility Requirements</h2>
            <ul className="space-y-4">
              {[
                "Hold ILR or Settled Status for at least 12 months (unless married to Brit)",
                "Meet the strict absence limits over the 3 or 5 year qualifying period",
                "Pass the Life in the UK test",
                "Meet B1 English language requirements",
                "Satisfy the Good Character requirement"
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
              <li className="pl-2">Calculate absences over the qualifying period to confirm eligibility.</li>
              <li className="pl-2">Pass the Life in the UK test.</li>
              <li className="pl-2">Prepare English language evidence and Good Character declaration.</li>
              <li className="pl-2">Submit Form AN (naturalisation) or Form MN1 (child registration) online.</li>
              <li className="pl-2">Upon approval, attend a Citizenship Ceremony to receive your certificate.</li>
            </ol>
          </div>

          <CostsSection
            govFees={[
              { label: "Naturalisation — Adult (standard route)", fee: "£1,630" },
              { label: "Naturalisation — Spouse of British Citizen", fee: "£1,630" },
              { label: "Registration — Child (under 18)", fee: "£1,214" },
              { label: "Registration — Adult (entitlement / discretion)", fee: "£1,431" },
              { label: "Citizenship Ceremony Fee (per person)", fee: "£80" },
              { label: "Life in the UK Test (per sitting)", fee: "£50" },
            ]}
            adviserFees={[
              { label: "Naturalisation Application (adult)", fee: "From £850 + VAT" },
              { label: "Naturalisation — Spouse of British Citizen", fee: "From £800 + VAT" },
              { label: "Child Registration (under 18)", fee: "From £700 + VAT" },
              { label: "Absence Calculation &amp; Qualifying Period Check", fee: "From £250 + VAT" },
              { label: "Good Character Assessment &amp; Advice", fee: "From £300 + VAT" },
            ]}
            ihsContent={<><strong>No Immigration Health Surcharge</strong> applies to citizenship applications. A separate <strong>£80 ceremony fee</strong> is payable to your local council upon approval.</>}
            ihsVariant="green"
            processingTime="Standard: up to 6 months · No priority service available for citizenship"
            adviserNote="We carefully review absence history and Good Character matters before submission — citizenship refusals are difficult to overturn."
            freeAssessmentNote="We verify your qualifying period, absence record, and any Good Character concerns before you commit to this significant application fee."
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
                <AccordionTrigger className="text-left font-serif text-lg">Do I need to give up my other passport?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">The UK allows dual nationality. However, your home country might not allow it, and you could lose your original citizenship automatically. Always check with your embassy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg">Who can register vs naturalise?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Adults usually 'naturalise'. Children under 18 'register'. Some adults can also register if they have certain types of British nationality already or statelessness.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg">How strict are the absence limits?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">Very strict. The Home Office has some discretion to forgive excess absences, but this depends on why you were absent and how far over the limit you are.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-serif text-lg">What is a citizenship ceremony?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">A mandatory formal event hosted by your local council where you swear an oath of allegiance to the Monarch and pledge loyalty to the UK.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-serif text-lg">How long does the passport take after the ceremony?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">You must apply for your British passport separately after receiving your naturalisation certificate. This typically takes 3-6 weeks.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>
    </div>
  );
}
