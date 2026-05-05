import { useState } from "react";
import { Search, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What does IAA Level 1 mean?",
        a: "The Office of the Immigration Services Commissioner (IAA) regulates immigration advisers in the UK. Level 1 is the entry level, authorising advisers to provide advice and assistance on straightforward applications including most visa categories, entry clearance, and settlement applications. It does not authorise work on matters before courts. Our registration number is F202300000.",
      },
      {
        q: "What is the difference between a visa and leave to remain?",
        a: "A visa (technically 'entry clearance') is the permission to travel to the UK and is issued before you arrive. Leave to remain is the permission to stay in the UK once you are here. Some applications — such as switching visa categories from within the UK — do not require a new visa but do require an application for leave to remain.",
      },
      {
        q: "Do I need an immigration adviser to apply for a UK visa?",
        a: "No — you can apply independently. However, many people choose to use a regulated adviser to reduce the risk of errors or refusals. A refused application can have serious consequences for future applications. We always advise on whether the cost of professional assistance is worthwhile for your specific case.",
      },
      {
        q: "Can you assist with applications from outside the UK?",
        a: "Yes. Many applications — including Skilled Worker, Student, Family, and Visitor visas — are made by individuals outside the UK. We can advise and assist remotely via email, phone, or video consultation.",
      },
      {
        q: "Is my information kept confidential?",
        a: "Absolutely. We are bound by professional confidentiality rules and the UK GDPR. Your information is only used for the purposes of providing advice and assistance, and is never shared with third parties without your consent.",
      },
    ],
  },
  {
    category: "Costs & Fees",
    items: [
      {
        q: "How much does a Skilled Worker visa cost in 2024?",
        a: "The Home Office visa application fee is £719 for applications of up to 3 years, or £1,420 for over 3 years (when applying from outside the UK). Applying from within the UK costs £827 or £1,639. These fees are in addition to the Immigration Health Surcharge (£1,035 per year) and any professional advisory fees.",
      },
      {
        q: "What is the Immigration Health Surcharge (IHS)?",
        a: "The IHS is a fee paid upfront by most non-EEA visa applicants that grants access to NHS services during their stay. As of February 2024, the rate is £1,035 per year for most categories, and £776 per year for students and youth mobility applicants. It must be paid for the full duration of the visa. If your visa is refused, the IHS is refunded.",
      },
      {
        q: "How much does a Family visa cost?",
        a: "The Family visa (spouse or partner route) currently costs £1,846 from outside the UK, or £1,258 for in-country applications. This is in addition to the IHS (£1,035 per year) and professional fees. Dependants pay the same application fee and IHS.",
      },
      {
        q: "Are your adviser fees fixed or charged hourly?",
        a: "We offer fixed-fee arrangements for most straightforward applications. Complex cases (such as appeals, asylum, or cases involving criminal histories) may be quoted on a case-by-case basis. We provide a clear, itemised cost estimate before you commit, with no hidden fees.",
      },
      {
        q: "What happens to the money I pay if my visa is refused?",
        a: "The Home Office application fee is non-refundable in the event of a refusal. The IHS is refunded if your application is refused. Our professional fees are set out clearly in our client agreement — we do not charge a success-based model, but we will advise honestly on your prospects before you apply.",
      },
    ],
  },
  {
    category: "Timelines",
    items: [
      {
        q: "How long does a Skilled Worker visa application take?",
        a: "Standard processing from outside the UK typically takes around 3 weeks. From within the UK (a 'leave to remain' application), the standard service takes up to 8 weeks. Priority service (outside the UK) takes approximately 5 working days and costs an additional £500. Super Priority (within the UK, next working day) costs £1,000.",
      },
      {
        q: "What is the priority service and how much does it cost?",
        a: "Priority processing is available for most visa categories. For applications made from outside the UK, priority costs £500 (approximately 5 working days). Super Priority within the UK (next working day decision) costs £1,000 and must be booked at an approved service centre. Availability is limited and cannot be guaranteed.",
      },
      {
        q: "How long does a Family visa application take?",
        a: "Family visa processing times vary significantly by the country of application. From the UK, standard processing takes up to 8 weeks. Some overseas applications can take 12–24 weeks during peak periods. Priority services are available in many countries.",
      },
      {
        q: "What happens if the Home Office has not decided my application by my visa expiry date?",
        a: "If you applied for an extension or variation of leave before your current visa expired, you are protected by 'Section 3C leave' — your existing conditions are automatically extended until a decision is made (or until any appeal is resolved). It is important to apply before your visa expires to benefit from this protection.",
      },
      {
        q: "Can the Home Office exceed its stated processing times?",
        a: "Yes. The stated times are targets rather than guarantees. If your application has significantly exceeded the published service standard, it is possible to make a complaint to the Home Office or, in some circumstances, seek a judicial review of the delay. We advise on this where relevant.",
      },
    ],
  },
  {
    category: "Refusals & Appeals",
    items: [
      {
        q: "My visa was refused. What can I do?",
        a: "Depending on the type of visa and the grounds for refusal, you may have the right to appeal to the First-tier Tribunal, request an Administrative Review, or make a fresh application with stronger evidence. Not all refusals carry appeal rights — particularly visitor visa refusals. We will analyse your refusal decision and advise on the most appropriate course of action.",
      },
      {
        q: "What is Administrative Review?",
        a: "Administrative Review (AR) is an in-house Home Office process that checks whether a decision was made correctly under the Immigration Rules. It is not an appeal to an independent tribunal. AR is available for most visa refusals (with some exceptions), costs £80, and typically takes 28 days. If the AR finds an error, the decision is retaken. If not, other options (appeal or fresh application) may be available.",
      },
      {
        q: "How long do I have to appeal a visa refusal?",
        a: "Time limits vary by decision type and location. For most out-of-country decisions, you have 28 days from receiving the decision to lodge an appeal. In-country decisions typically allow 14 days. Asylum appeals and Human Rights appeals have different time limits. It is critical to seek advice immediately on receiving a refusal — missing the deadline may permanently extinguish appeal rights.",
      },
      {
        q: "What are the grounds for an immigration appeal?",
        a: "An immigration appeal can be brought on the grounds that the decision is not in accordance with the Immigration Rules or applicable law, or that it breaches your human rights (under the Human Rights Act 1998). For EUSS refusals, the Withdrawal Agreement provides additional grounds. The tribunal does not reconsider the entire application from scratch — it reviews the lawfulness of the Home Office's decision.",
      },
    ],
  },
  {
    category: "Documents",
    items: [
      {
        q: "What documents do I need for a Skilled Worker visa?",
        a: "The core documents are your Certificate of Sponsorship (CoS) reference number, a valid passport, proof of English language (unless exempt), and financial evidence showing you meet the maintenance requirement. Depending on your circumstances, you may also need TB test results, a criminal record certificate, or translated documents. We provide a full, tailored document checklist for every client.",
      },
      {
        q: "Which English language tests are accepted for UK visa applications?",
        a: "The Home Office accepts a range of Secure English Language Tests (SELTs) from approved providers. The most widely accepted are IELTS (Academic or UKVI), Trinity College London ISE, and LanguageCert. For Skilled Worker applicants, the minimum requirement is B1 in speaking and listening, though degree-level educated applicants are often exempt if their degree was taught in English.",
      },
      {
        q: "Do my foreign documents need to be translated into English?",
        a: "Yes. Any document not in English or Welsh must be accompanied by a certified translation. Translations must be provided by a qualified translator and include a statement confirming accuracy, the date of translation, and the translator's credentials. We can recommend approved translation services.",
      },
      {
        q: "What is a Certificate of Sponsorship (CoS)?",
        a: "A Certificate of Sponsorship is an electronic record (not a physical document) created by a UK employer on the Sponsor Management System. It contains details of the job, salary, and applicant. Each CoS has a unique reference number that must be quoted in the visa application. Your employer must hold a valid sponsor licence before they can issue a CoS.",
      },
    ],
  },
];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const lower = search.toLowerCase();
  const filtered = faqs
    .map(cat => ({
      ...cat,
      items: cat.items.filter(
        item =>
          (!activeCategory || cat.category === activeCategory) &&
          (!lower ||
            item.q.toLowerCase().includes(lower) ||
            item.a.toLowerCase().includes(lower))
      ),
    }))
    .filter(cat => cat.items.length > 0);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            Answers to the most common questions about UK immigration. Can't find what you need?{" "}
            <Link href="/contact" className="underline hover:text-secondary transition-colors">Contact us directly.</Link>
          </p>

          <div className="relative max-w-lg">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary-foreground/50" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search questions…"
              className="w-full bg-white/10 border border-white/20 text-primary-foreground placeholder-primary-foreground/50 pl-10 pr-10 py-3 text-sm outline-none focus:border-white/40 transition-colors"
              aria-label="Search FAQs"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground">
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-6 bg-muted border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-1.5 text-sm font-medium border transition-colors rounded-sm ${!activeCategory ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-background"}`}
            >All</button>
            {faqs.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(c => c === cat.category ? null : cat.category)}
                className={`px-4 py-1.5 text-sm font-medium border transition-colors rounded-sm ${activeCategory === cat.category ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-background"}`}
              >{cat.category}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Search size={40} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">No results for "<strong className="text-foreground">{search}</strong>"</p>
              <button onClick={() => setSearch("")} className="mt-4 text-primary underline text-sm">Clear search</button>
            </div>
          ) : (
            <div className="space-y-10">
              {filtered.map(cat => (
                <div key={cat.category}>
                  <h2 className="font-serif text-2xl font-bold mb-4 pb-3 border-b border-border">{cat.category}</h2>
                  <Accordion type="multiple" className="space-y-2">
                    {cat.items.map((item, i) => (
                      <AccordionItem key={i} value={`${cat.category}-${i}`} className="border border-border bg-card px-0">
                        <AccordionTrigger className="px-5 py-4 text-left font-semibold hover:no-underline hover:text-primary transition-colors text-sm md:text-base">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm md:text-base">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 bg-primary text-primary-foreground p-8 text-center">
            <h3 className="font-serif text-xl font-bold mb-3">Still have questions?</h3>
            <p className="text-primary-foreground/80 mb-6 text-sm">Our IAA-regulated advisers are happy to discuss your specific situation.</p>
            <Link href="/free-assessment">
              <button className="bg-secondary text-secondary-foreground font-serif px-8 py-3 hover:bg-secondary/90 transition-colors">
                Book a Free Assessment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
