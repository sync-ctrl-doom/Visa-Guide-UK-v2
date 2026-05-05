import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Clock, FileText, Landmark, Star, Quote, ChevronLeft, ChevronRight, CheckSquare } from "lucide-react";

import { useInView } from "@/hooks/useInView";

/* ── Animated counter ── */
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const { ref, inView } = useInView(0.2);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{inView ? count : 0}{suffix}</span>;
}

/* ── Fade-up wrapper ── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Testimonials data ── */
const testimonials = [
  {
    name: "Priya M.",
    country: "🇮🇳 India",
    visa: "Skilled Worker Visa",
    stars: 5,
    quote: "I was overwhelmed by the salary threshold changes in 2024. Britannia walked me through every requirement and my application was approved first time. Their preparation of the document bundle was meticulous.",
  },
  {
    name: "Ahmed K.",
    country: "🇵🇰 Pakistan",
    visa: "Family Visa",
    stars: 5,
    quote: "Reuniting with my wife after 18 months apart felt impossible. Britannia gave us a realistic assessment, prepared our evidence properly, and we had approval within 10 weeks. I cannot recommend them enough.",
  },
  {
    name: "Julia W.",
    country: "🇵🇱 Poland",
    visa: "EU Settled Status",
    stars: 5,
    quote: "I missed the EUSS deadline and was terrified. The team explained the late application process clearly, submitted compelling evidence of reasonable grounds, and I now have full settled status. Truly grateful.",
  },
  {
    name: "David C.",
    country: "🇦🇺 Australia",
    visa: "Indefinite Leave to Remain",
    stars: 5,
    quote: "After 5 years in the UK I wanted to apply for ILR but found the paperwork daunting. Britannia handled everything from start to finish. Super Priority approval — decision the next working day.",
  },
  {
    name: "Fatima A.",
    country: "🇳🇬 Nigeria",
    visa: "British Citizenship",
    stars: 5,
    quote: "Britannia guided me through the Life in the UK test prep, citizenship application, and ceremony. They were available every step of the way. I'm now a British citizen — the proudest day of my life.",
  },
];

/* ── Team data ── */
const team = [
  { initials: "AH", name: "A. Harrison", title: "Senior Immigration Adviser", specialisation: "Work & Corporate Visas", experience: "12 yrs" },
  { initials: "SP", name: "S. Patel", title: "Immigration Adviser", specialisation: "Family & Settlement", experience: "8 yrs" },
  { initials: "MI", name: "M. Ibrahim", title: "Immigration Consultant", specialisation: "Asylum & Human Rights", experience: "10 yrs" },
  { initials: "LC", name: "L. Chen", title: "Immigration Adviser", specialisation: "Student & Graduate Routes", experience: "6 yrs" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    timerRef.current = setInterval(() => setSlide(s => (s + 1) % testimonials.length), 5000);
  }
  useEffect(() => { startTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, []);

  function goTo(i: number) {
    if (timerRef.current) clearInterval(timerRef.current);
    setSlide(i);
    startTimer();
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden bg-primary text-primary-foreground pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 opacity-55 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-secondary text-secondary-foreground font-medium tracking-wide mb-6 rounded-sm">
              <Shield size={16} />
              <span>IAA Level 1 Regulated Adviser</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Clarity in Complex<br />Immigration Law.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl">
              Professional, authoritative guidance for your UK visa, settlement, and citizenship applications. We replace anxiety with assurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/eligibility-checker">
                <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-serif text-lg rounded-none px-8 py-6 h-auto gap-2">
                  <CheckSquare size={20} /> Check Eligibility
                </Button>
              </Link>
              <Link href="/free-assessment">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-serif text-lg rounded-none px-8 py-6 h-auto">
                  Free Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Animated Stats ── */}
      <section className="py-14 bg-muted border-y border-border" aria-label="Key statistics">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 98, suffix: "%", label: "Application Success Rate" },
              { target: 3200, suffix: "+", label: "Applications Handled" },
              { target: 15, suffix: "+", label: "Years of Expertise" },
              { target: 48, suffix: "h", label: "Initial Assessment" },
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeUp className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Expertise You Can Rely On</h2>
            <p className="text-muted-foreground text-lg">Comprehensive advice and representation across all key UK immigration routes.</p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Landmark, title: "Work & Corporate", desc: "Skilled Worker visas, Global Business Mobility, and corporate sponsor licences.", href: "/services/visa-applications" },
              { icon: CheckCircle2, title: "Family & Settlement", desc: "Spouse visas, family reunion, Indefinite Leave to Remain (ILR), and citizenship.", href: "/services/eea-settled-status" },
              { icon: FileText, title: "Study & Temporary", desc: "Student visas, Graduate route, Standard Visitor, and temporary worker categories.", href: "/visa-types/student" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="group p-8 border border-border bg-card hover:border-primary/50 transition-colors h-full flex flex-col">
                  <div className="h-12 w-12 bg-muted flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{item.desc}</p>
                  <Link href={item.href} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligibility Checker CTA Banner ── */}
      <section className="py-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-1">Not sure which visa you need?</h2>
              <p className="text-secondary-foreground/80">Answer 4 quick questions and we'll point you in the right direction — free.</p>
            </div>
            <Link href="/eligibility-checker" className="shrink-0">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-serif rounded-none px-8 py-5 h-auto gap-2 text-base">
                <CheckSquare size={18} /> Run Eligibility Check
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeUp className="relative aspect-[4/3] pb-16 md:pb-0">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="Modern Professional Office" className="object-cover w-full h-full shadow-2xl" />
              <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 bg-secondary text-secondary-foreground p-6 md:p-8 shadow-xl max-w-[240px]">
                <Shield size={32} className="mb-4" />
                <p className="font-serif text-lg font-bold leading-snug">Regulated by the IAA for your peace of mind.</p>
              </div>
            </FadeUp>

            <div className="space-y-8">
              <FadeUp>
                <h2 className="font-serif text-4xl font-bold mb-6">A Standard of Excellence in Immigration Advice</h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  Immigration law is deeply personal. A delayed application or a simple error can uproot lives. We approach every case with meticulous attention to detail and unwavering professionalism.
                </p>
              </FadeUp>

              <ul className="space-y-6">
                {[
                  { title: "Direct Expert Contact", desc: "No call centres. You speak directly with your dedicated adviser from day one." },
                  { title: "Transparent Fees", desc: "Fixed-fee structures with no hidden costs. You know exactly what your investment will be." },
                  { title: "Accountable & Regulated", desc: "As IAA Level 1 advisers, we are bound by a strict code of standards and ethics." },
                ].map((item, i) => (
                  <FadeUp key={i} delay={i * 100}>
                    <li className="flex gap-4">
                      <div className="mt-1 text-secondary"><CheckCircle2 size={20} /></div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-primary-foreground/70">{item.desc}</p>
                      </div>
                    </li>
                  </FadeUp>
                ))}
              </ul>

              <FadeUp className="pt-4">
                <Link href="/about">
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none font-serif tracking-wide px-6">
                    Read About Our Firm
                  </Button>
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expert Team ── */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeUp className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Advisers</p>
            <h2 className="font-serif text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground text-lg">
              Every client is assigned a dedicated adviser who specialises in their visa category.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="border border-border bg-card p-6 text-center group hover:border-primary/40 transition-colors h-full">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold mx-auto mb-4 group-hover:bg-secondary transition-colors">
                    {member.initials}
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.title}</p>
                  <div className="inline-block bg-muted px-3 py-1 text-xs font-semibold text-primary mb-3">{member.specialisation}</div>
                  <p className="text-xs text-muted-foreground">{member.experience} experience · IAA Level 1</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-12 md:py-24 bg-muted border-y border-border" aria-label="Client testimonials">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeUp className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="font-serif text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} size={20} className="fill-amber-400 text-amber-400" />)}
              <span className="ml-2 text-muted-foreground text-sm font-medium">5.0 · 200+ reviews</span>
            </div>
          </FadeUp>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full shrink-0 px-2">
                    <div className="bg-card border border-border p-8 md:p-10">
                      <Quote size={32} className="text-primary/20 mb-4" />
                      <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{t.quote}"</p>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{t.name} <span className="text-muted-foreground font-normal">{t.country}</span></p>
                            <p className="text-xs text-muted-foreground">{t.visa}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.stars }).map((_, s) => <Star key={s} size={14} className="fill-amber-400 text-amber-400" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={() => goTo((slide - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial" className="p-2 border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors">
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Go to testimonial ${i + 1}`} className={`h-2 rounded-full transition-all ${i === slide ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"}`} />
              ))}
              <button onClick={() => goTo((slide + 1) % testimonials.length)} aria-label="Next testimonial" className="p-2 border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-12 md:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeUp>
            <Clock size={48} className="mx-auto text-primary mb-6" />
            <h2 className="font-serif text-4xl font-bold mb-6">Your Immigration Journey Begins Here</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Take the first step towards securing your future in the UK. Your initial assessment is free, confidential, and without obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-assessment">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-lg rounded-none px-10 py-6 h-auto shadow-lg">
                  Start Free Assessment
                </Button>
              </Link>
              <Link href="/eligibility-checker">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-serif text-lg rounded-none px-10 py-6 h-auto gap-2">
                  <CheckSquare size={20} /> Check Eligibility
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
