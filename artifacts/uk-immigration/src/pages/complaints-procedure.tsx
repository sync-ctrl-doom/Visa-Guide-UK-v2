import { Link } from "wouter";
import { Scale, CheckCircle2, Clock, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const LAST_UPDATED = "1 May 2025";

export default function ComplaintsProcedure() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Scale size={20} className="text-secondary" />
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Complaints Procedure</h1>
          <p className="text-primary-foreground/70 text-sm">Last updated: {LAST_UPDATED} · IAA Reg. No. F202300000</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-muted border border-border p-5 mb-10 text-sm leading-relaxed">
            <strong>Our commitment:</strong> We are committed to providing a high-quality service. If something goes wrong, we need you to tell us so we can put it right. This procedure explains how to raise a complaint and what will happen next. As an IAA-regulated adviser, we are required to maintain a formal complaints process.
          </div>

          <div className="space-y-10 text-foreground text-base leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">How to Make a Complaint</h2>
              <p>If you are unhappy with any aspect of our service — including the advice you received, the conduct of a member of staff, delays, or fees — please contact us as soon as possible. You can raise a complaint in any of the following ways:</p>

              <div className="grid gap-4 mt-6">
                <div className="border border-border bg-card p-5 flex items-start gap-4">
                  <Mail size={20} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">By email</p>
                    <a href="mailto:complaints@britannia-visas.co.uk" className="text-primary underline text-sm">complaints@britannia-visas.co.uk</a>
                    <p className="text-sm text-muted-foreground mt-1">Please include your full name, matter reference number, and a clear description of your complaint.</p>
                  </div>
                </div>
                <div className="border border-border bg-card p-5 flex items-start gap-4">
                  <Phone size={20} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">By telephone</p>
                    <a href="tel:+442071234567" className="text-primary text-sm">+44 (0) 20 7123 4567</a>
                    <p className="text-sm text-muted-foreground mt-1">Mon–Fri, 9:00am–5:30pm. Ask for the Complaints Manager.</p>
                  </div>
                </div>
                <div className="border border-border bg-card p-5 flex items-start gap-4">
                  <MapPin size={20} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">By post</p>
                    <p className="text-sm text-muted-foreground">Complaints Manager<br />Britannia Visas & Immigration Consultancy<br />120 Chancery Lane, London, WC2A 1PX</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">What Happens Next</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Acknowledgement", time: "Within 3 working days", desc: "We will acknowledge receipt of your complaint in writing and let you know who is handling it." },
                  { step: "2", title: "Investigation", time: "Within 14 working days", desc: "The Complaints Manager will review your file, speak with relevant staff, and investigate the issues you have raised." },
                  { step: "3", title: "Written Response", time: "Within 28 working days", desc: "We will send you a full written response addressing each point of your complaint, explaining what happened, and (where appropriate) what we will do to put things right." },
                  { step: "4", title: "Final Decision", time: "Up to 8 weeks", desc: "If we need more time to investigate a complex matter, we will let you know. In any event, you will receive our final decision within 8 weeks of your complaint being received." },
                ].map(item => (
                  <div key={item.step} className="flex gap-5 border border-border bg-card p-5">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold font-serif shrink-0">{item.step}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <p className="font-semibold">{item.title}</p>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock size={12} /> {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">If You Are Not Satisfied</h2>
              <p>If you are not satisfied with our final response, or if 8 weeks have passed since you made your complaint without a resolution, you have the right to refer your complaint to the <strong>Office of the Immigration Services Commissioner (IAA)</strong>.</p>

              <div className="mt-6 bg-primary/5 border border-primary/20 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Scale size={20} className="text-primary shrink-0 mt-0.5" />
                  <h3 className="font-serif text-lg font-bold">Office of the Immigration Services Commissioner (IAA)</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>5th Floor, 21 Bloomsbury Street, London, WC1B 3HF</p>
                  <p>Tel: <a href="tel:03450000046" className="text-primary">0345 000 0046</a></p>
                  <p>Email: <a href="mailto:info@IAA.gov.uk" className="text-primary">info@IAA.gov.uk</a></p>
                  <a href="https://www.gov.uk/government/organisations/office-of-the-immigration-services-commissioner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary underline mt-2">
                    Visit the IAA website <ExternalLink size={12} />
                  </a>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">The IAA is the independent regulator of immigration advisers. It can investigate complaints about the conduct of regulated advisers and take disciplinary action where necessary.</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">Remedies</h2>
              <p>Where a complaint is upheld, we may offer one or more of the following remedies depending on the circumstances:</p>
              <ul className="mt-3 space-y-2">
                {[
                  "An apology",
                  "Clarification or additional advice",
                  "A reduction in or refund of professional fees",
                  "Correction of an error in advice or documentation",
                  "A referral to independent specialist legal advice",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">Record Keeping</h2>
              <p>We maintain a register of all complaints received. This register is reviewed annually to identify trends and improve our services. All complaint records are kept for a minimum of 6 years.</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-primary underline">Terms of Service</Link>
            <Link href="/contact" className="text-primary underline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
