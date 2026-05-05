import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ChevronLeft, CheckCircle2, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type Answers = {
  purpose?: string;
  subAnswer?: string;
  nationality?: string;
};

type VisaResult = {
  name: string;
  route: string;
  href: string;
  cost: string;
  processingTime: string;
  keyRequirements: string[];
  suitability: string;
};

function getResult(answers: Answers): VisaResult {
  const { purpose, subAnswer, nationality } = answers;

  if (purpose === "work") {
    if (subAnswer === "job-offer") return {
      name: "Skilled Worker Visa",
      route: "Work",
      href: "/visa-types/skilled-worker",
      cost: "£719 – £1,639 (+ £1,035/yr IHS)",
      processingTime: "3 weeks (standard) / 5 days (priority)",
      keyRequirements: ["Job offer from a Home Office-licensed sponsor", "Minimum £38,700 salary (or going rate)", "Certificate of Sponsorship (CoS)", "English language requirement", "Maintenance funds"],
      suitability: "Based on your answers, the Skilled Worker visa is your primary route. Your employer must be a licensed sponsor and issue you a Certificate of Sponsorship before you apply.",
    };
    if (subAnswer === "graduate-route") return {
      name: "Graduate Visa",
      route: "Post-Study Work",
      href: "/visa-types/graduate",
      cost: "£715",
      processingTime: "8 weeks (standard)",
      keyRequirements: ["Completed a UK degree from a licenced student sponsor", "Previous Student visa or Tier 4 leave", "Cannot extend — apply for Skilled Worker after securing employment"],
      suitability: "As a recent UK graduate, the Graduate visa gives you 2 years (3 for PhDs) to work without a sponsor. Use this time to secure a Skilled Worker-eligible role.",
    };
    return {
      name: "Standard Visitor Visa",
      route: "Short-term",
      href: "/visa-types/visitor",
      cost: "£115",
      processingTime: "3 weeks",
      keyRequirements: ["No intention to work (permitted activities only)", "Proof of funds and return travel", "Ties to home country"],
      suitability: "Without a job offer or UK study history, a Visitor visa may be the most immediate option while you explore work sponsorship. You cannot work on a Visitor visa — obtain your Skilled Worker visa before commencing employment.",
    };
  }

  if (purpose === "study") return {
    name: "Student Visa",
    route: "Study",
    href: "/visa-types/student",
    cost: "£490 (+ IHS £776/yr)",
    processingTime: "3 weeks",
    keyRequirements: ["Confirmation of Acceptance for Studies (CAS) from a licensed institution", "English language (IELTS, TOEFL, or equivalent)", "Maintenance funds (£1,334/month in London)", "ATAS clearance for some postgraduate subjects"],
    suitability: "Your institution will issue a CAS once you accept an unconditional offer. You can apply up to 6 months before your course starts.",
  };

  if (purpose === "family") {
    if (subAnswer === "spouse") return {
      name: "Family Visa (Spouse / Partner Route)",
      route: "Family",
      href: "/visa-types/family",
      cost: "£1,846 (+ IHS £1,035/yr)",
      processingTime: "8–24 weeks",
      keyRequirements: ["UK sponsor earning ≥ £29,000/year (rising to £38,700 by late 2025)", "Genuine and subsisting relationship", "English language requirement", "Accommodation requirement"],
      suitability: "Your UK-based spouse or partner must meet the income threshold. Evidence of the genuine nature of your relationship is critical to a successful application.",
    };
    if (subAnswer === "parent") return {
      name: "Parent of a British Child Visa",
      route: "Family",
      href: "/visa-types/family",
      cost: "£1,846 (+ IHS £1,035/yr)",
      processingTime: "8–24 weeks",
      keyRequirements: ["Child must be British or settled in the UK", "Direct parental responsibility", "Either sole responsibility or access to the child must be shown", "No recourse to public funds"],
      suitability: "This route applies where you are the parent of a British/settled child and have direct responsibility or are granted access rights. Complex legal criteria apply.",
    };
    return {
      name: "Family Visa (Dependent Child)",
      route: "Family",
      href: "/visa-types/family",
      cost: "£1,846 (+ IHS £1,035/yr)",
      processingTime: "8–24 weeks",
      keyRequirements: ["Child must be under 18", "Parent(s) must be settled or British", "Child must not be leading an independent life"],
      suitability: "Children under 18 can join settled or British parents in the UK. They can apply at the same time as the main applicant.",
    };
  }

  if (purpose === "visit") {
    if (nationality === "eea") return {
      name: "EEA / Swiss National — Visa-Free Entry",
      route: "Visit",
      href: "/services/eea-settled-status",
      cost: "No visa fee (ETIAS scheme pending)",
      processingTime: "No application required",
      keyRequirements: ["Valid EEA/Swiss passport or national ID", "Genuine visitor intent", "Pre-Brexit residents: check EUSS status"],
      suitability: "EEA and Swiss nationals can currently visit the UK visa-free for up to 6 months. If you lived in the UK before 31 December 2020 and have not applied under the EU Settlement Scheme, this may be urgent.",
    };
    return {
      name: "Standard Visitor Visa",
      route: "Visit",
      href: "/visa-types/visitor",
      cost: "£115 (up to 2 yrs); £400 (5 yrs); £800 (10 yrs)",
      processingTime: "3 weeks",
      keyRequirements: ["Genuine visitor (tourism, business, family)", "Maximum 6 months per visit", "Adequate funds and accommodation", "Intention to leave the UK"],
      suitability: "A Visitor visa allows you to enter the UK for tourism, short business visits, or to visit family. You cannot work or study on this visa.",
    };
  }

  if (purpose === "settle") {
    if (subAnswer === "has-ilr") return {
      name: "British Citizenship (Naturalisation)",
      route: "Citizenship",
      href: "/visa-types/british-citizenship",
      cost: "£1,500 (adult naturalisation)",
      processingTime: "6 months",
      keyRequirements: ["Held ILR or settled status for 12 months", "5 years lawful UK residence", "Life in the UK Test (pass required)", "English language requirement", "Good character"],
      suitability: "As an ILR holder, you may be eligible to apply for British citizenship if you have been settled for 12 months and meet the residence and good character requirements.",
    };
    return {
      name: "Indefinite Leave to Remain (ILR)",
      route: "Settlement",
      href: "/visa-types/ilr",
      cost: "£2,885",
      processingTime: "6 months (standard) / 1–2 days (super priority)",
      keyRequirements: ["5 continuous years on qualifying visa (e.g. Skilled Worker)", "No excessive absences (max 180 days per year)", "Life in the UK Test (pass required)", "English language requirement", "No serious criminality"],
      suitability: "Once you have held a qualifying visa for 5 continuous years, you can apply for ILR — the route to permanent residence in the UK. This is a prerequisite for British citizenship.",
    };
  }

  return {
    name: "Free Assessment Recommended",
    route: "General",
    href: "/free-assessment",
    cost: "N/A",
    processingTime: "N/A",
    keyRequirements: ["Discuss your situation with a regulated adviser"],
    suitability: "Your circumstances are complex or require further information. We recommend booking a free assessment with one of our IAA-regulated advisers.",
  };
}

const steps = [
  {
    id: "purpose",
    question: "What is your main reason for coming to the UK?",
    options: [
      { value: "work", label: "Work", desc: "I have or am seeking UK employment" },
      { value: "study", label: "Study", desc: "University, college or language course" },
      { value: "family", label: "Join Family", desc: "Spouse, partner, parent or children" },
      { value: "visit", label: "Visit", desc: "Tourism, business or short stay" },
      { value: "settle", label: "Settle Permanently", desc: "Extend stay, ILR or citizenship" },
    ],
  },
];

const subSteps: Record<string, { question: string; options: { value: string; label: string; desc: string }[] }> = {
  work: {
    question: "What is your work situation?",
    options: [
      { value: "job-offer", label: "I have a UK job offer", desc: "From a licensed sponsor employer" },
      { value: "graduate-route", label: "I studied in the UK", desc: "I want to stay and work after graduating" },
      { value: "looking", label: "I'm looking for work", desc: "No job offer yet" },
    ],
  },
  family: {
    question: "What is your relationship to your UK-based sponsor?",
    options: [
      { value: "spouse", label: "Spouse or partner", desc: "Married, civil partner or unmarried partner" },
      { value: "child-joining", label: "I am joining my parents", desc: "My parents are settled or British" },
      { value: "parent", label: "I am a parent", desc: "My child is British or settled" },
    ],
  },
  settle: {
    question: "What is your current UK immigration status?",
    options: [
      { value: "on-visa", label: "I am on a long-term visa", desc: "e.g. Skilled Worker, Student" },
      { value: "has-ilr", label: "I have Indefinite Leave to Remain", desc: "ILR or Settled Status" },
      { value: "outside-uk", label: "I am currently outside the UK", desc: "Looking to come to settle" },
    ],
  },
};

export default function EligibilityChecker() {
  const [step, setStep] = useState<"purpose" | "sub" | "nationality" | "result">("purpose");
  const [answers, setAnswers] = useState<Answers>({});

  function selectPurpose(value: string) {
    const newAnswers = { ...answers, purpose: value, subAnswer: undefined };
    setAnswers(newAnswers);
    if (value === "study" || value === "visit") {
      setStep("nationality");
    } else {
      setStep("sub");
    }
  }

  function selectSub(value: string) {
    setAnswers(a => ({ ...a, subAnswer: value }));
    setStep("nationality");
  }

  function selectNationality(value: string) {
    setAnswers(a => ({ ...a, nationality: value }));
    setStep("result");
  }

  function reset() {
    setAnswers({});
    setStep("purpose");
  }

  const result = step === "result" ? getResult(answers) : null;
  const currentSubStep = answers.purpose ? subSteps[answers.purpose] : null;

  const stepNumber = step === "purpose" ? 1 : step === "sub" ? 2 : step === "nationality" ? (currentSubStep ? 3 : 2) : 4;
  const totalSteps = currentSubStep ? 4 : 3;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">Free Tool</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">Visa Eligibility Checker</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Answer a few quick questions to identify the most likely UK visa route for your circumstances.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">

          {step !== "result" && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground font-medium">Step {stepNumber} of {totalSteps}</span>
                {step !== "purpose" && (
                  <button
                    onClick={() => setStep(step === "nationality" && currentSubStep ? "sub" : step === "nationality" ? "purpose" : "purpose")}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                )}
              </div>
              <div className="h-1.5 bg-muted rounded-full">
                <div
                  className="h-1.5 bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(stepNumber / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {step === "purpose" && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold mb-6">{steps[0].question}</h2>
              {steps[0].options.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => selectPurpose(opt.value)}
                  className="w-full flex items-center justify-between p-5 border border-border bg-card hover:border-primary hover:bg-muted/40 transition-colors text-left group"
                >
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{opt.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
                </button>
              ))}
            </div>
          )}

          {step === "sub" && currentSubStep && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold mb-6">{currentSubStep.question}</h2>
              {currentSubStep.options.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => selectSub(opt.value)}
                  className="w-full flex items-center justify-between p-5 border border-border bg-card hover:border-primary hover:bg-muted/40 transition-colors text-left group"
                >
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{opt.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
                </button>
              ))}
            </div>
          )}

          {step === "nationality" && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold mb-6">What is your nationality?</h2>
              {[
                { value: "eea", label: "🇪🇺 EEA or Swiss national", desc: "EU member states or Switzerland" },
                { value: "commonwealth", label: "🌐 Commonwealth national", desc: "e.g. India, Pakistan, Nigeria, Australia, Canada" },
                { value: "other", label: "🌍 Other international nationality", desc: "All other countries" },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => selectNationality(opt.value)}
                  className="w-full flex items-center justify-between p-5 border border-border bg-card hover:border-primary hover:bg-muted/40 transition-colors text-left group"
                >
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{opt.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
                </button>
              ))}
            </div>
          )}

          {step === "result" && result && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} className="text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Recommended visa</p>
                  <h2 className="font-serif text-2xl font-bold">{result.name}</h2>
                </div>
              </div>

              <div className="bg-muted border border-border p-5 text-sm text-foreground leading-relaxed">
                {result.suitability}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-border p-4 bg-card">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Estimated Cost</p>
                  <p className="font-semibold text-foreground">{result.cost}</p>
                </div>
                <div className="border border-border p-4 bg-card">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Processing Time</p>
                  <p className="font-semibold text-foreground">{result.processingTime}</p>
                </div>
              </div>

              <div className="border border-border p-5 bg-card">
                <p className="font-semibold mb-3 text-sm">Key Requirements</p>
                <ul className="space-y-2">
                  {result.keyRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-5 text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important:</strong> This tool provides general guidance only and does not constitute immigration advice. Your individual circumstances may affect eligibility. Please consult a regulated adviser before applying.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/free-assessment" className="flex-1">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-serif rounded-none py-5 h-auto text-base">
                    Book Free Assessment <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href={result.href} className="flex-1">
                  <Button variant="outline" className="w-full rounded-none py-5 h-auto text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Full Visa Guide <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>

              <button onClick={reset} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors pt-2">
                <RotateCcw size={14} /> Start over
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
