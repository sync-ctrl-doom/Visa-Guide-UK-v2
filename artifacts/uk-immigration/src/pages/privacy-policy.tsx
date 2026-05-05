import { Link } from "wouter";
import { Shield, Mail, Phone } from "lucide-react";

const LAST_UPDATED = "1 May 2025";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} className="text-secondary" />
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-primary-foreground/70 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl prose prose-slate max-w-none">
          <div className="bg-muted border border-border p-5 mb-10 text-sm leading-relaxed">
            <strong>Summary:</strong> Britannia Visas & Immigration Consultancy collects only the information you provide to us. We use it to respond to your enquiries and, where applicable, to assist with your immigration matter. We do not sell your data. You have full rights to access, correct, or delete your information under UK GDPR.
          </div>

          <div className="space-y-10 text-foreground text-base leading-relaxed">
            <section aria-labelledby="who-we-are">
              <h2 id="who-we-are" className="font-serif text-2xl font-bold mb-3">1. Who We Are</h2>
              <p>Britannia Visas & Immigration Consultancy ("we", "us", "our") is an immigration advisory firm regulated by the Office of the Immigration Services Commissioner (IAA), Registration No. F202300000. Our registered address is 120 Chancery Lane, London, WC2A 1PX.</p>
              <p className="mt-3">We are the data controller for the personal information you provide to us. For any privacy-related queries, contact us at <a href="mailto:privacy@britannia-visas.co.uk" className="text-primary underline">privacy@britannia-visas.co.uk</a>.</p>
            </section>

            <section aria-labelledby="data-we-collect">
              <h2 id="data-we-collect" className="font-serif text-2xl font-bold mb-3">2. Information We Collect</h2>
              <p>We collect information in the following ways:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Contact enquiries:</strong> Name, email address, phone number, and the details of your immigration enquiry when you submit our contact or assessment form.</li>
                <li><strong className="text-foreground">Newsletter subscription:</strong> Email address only.</li>
                <li><strong className="text-foreground">Client instructions:</strong> Where we are instructed to advise on a matter, we will collect additional personal and immigration-related information necessary to provide that advice, including passport details, visa history, and employment or family information.</li>
                <li><strong className="text-foreground">Website usage data:</strong> We may use analytics tools to collect anonymised information about how visitors use our website (pages visited, time on site, referral source). This data does not identify you personally.</li>
              </ul>
            </section>

            <section aria-labelledby="how-we-use">
              <h2 id="how-we-use" className="font-serif text-2xl font-bold mb-3">3. How We Use Your Information</h2>
              <p>We process your personal data for the following purposes and legal bases:</p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-3 border border-border font-semibold">Purpose</th>
                      <th className="text-left p-3 border border-border font-semibold">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Responding to your enquiry", "Legitimate interests / Pre-contractual steps"],
                      ["Providing immigration advice and services", "Performance of a contract"],
                      ["Sending newsletters (if opted in)", "Consent"],
                      ["Complying with IAA regulatory obligations", "Legal obligation"],
                      ["Improving our website", "Legitimate interests"],
                    ].map(([purpose, basis], i) => (
                      <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/40"}>
                        <td className="p-3 border border-border">{purpose}</td>
                        <td className="p-3 border border-border text-muted-foreground">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="data-sharing">
              <h2 id="data-sharing" className="font-serif text-2xl font-bold mb-3">4. Data Sharing</h2>
              <p>We do not sell, rent, or trade your personal information. We may share it in the following limited circumstances:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">The Home Office and UKVI:</strong> Where necessary to process your immigration application or comply with legal obligations.</li>
                <li><strong className="text-foreground">Professional advisers:</strong> Such as solicitors or barristers instructed on your matter, subject to confidentiality obligations.</li>
                <li><strong className="text-foreground">Technology service providers:</strong> Including secure cloud storage and email providers who process data on our behalf under data processing agreements.</li>
                <li><strong className="text-foreground">Regulatory bodies:</strong> Where we are required to disclose information by law or to the IAA in connection with a complaint or investigation.</li>
              </ul>
            </section>

            <section aria-labelledby="retention">
              <h2 id="retention" className="font-serif text-2xl font-bold mb-3">5. How Long We Keep Your Data</h2>
              <p>We retain client files for a minimum of <strong>6 years</strong> from the date of conclusion of the matter, in line with professional indemnity insurance requirements and the IAA Code of Standards. Enquiry-only correspondence is retained for <strong>2 years</strong>. Newsletter subscriptions are retained until you unsubscribe.</p>
            </section>

            <section aria-labelledby="your-rights">
              <h2 id="your-rights" className="font-serif text-2xl font-bold mb-3">6. Your Rights Under UK GDPR</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Right of access:</strong> Request a copy of the information we hold about you.</li>
                <li><strong className="text-foreground">Right to rectification:</strong> Ask us to correct inaccurate data.</li>
                <li><strong className="text-foreground">Right to erasure:</strong> Ask us to delete your data where there is no compelling reason to continue processing it.</li>
                <li><strong className="text-foreground">Right to restrict processing:</strong> Ask us to pause processing your data.</li>
                <li><strong className="text-foreground">Right to data portability:</strong> Receive your data in a structured, machine-readable format.</li>
                <li><strong className="text-foreground">Right to object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                <li><strong className="text-foreground">Right to withdraw consent:</strong> Where processing is based on consent, withdraw it at any time.</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:privacy@britannia-visas.co.uk" className="text-primary underline">privacy@britannia-visas.co.uk</a>. We will respond within 30 days. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary underline">ico.org.uk</a>.</p>
            </section>

            <section aria-labelledby="cookies">
              <h2 id="cookies" className="font-serif text-2xl font-bold mb-3">7. Cookies</h2>
              <p>Our website uses minimal cookies. We use only essential functional cookies (for example, to save your language and theme preference in your browser's local storage). We do not use third-party advertising cookies. Analytics, where used, is anonymised and does not require consent under UK PECR.</p>
            </section>

            <section aria-labelledby="security">
              <h2 id="security" className="font-serif text-2xl font-bold mb-3">8. Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. All data is stored on UK/EU-based servers. We review our security practices regularly.</p>
            </section>

            <section aria-labelledby="contact-privacy">
              <h2 id="contact-privacy" className="font-serif text-2xl font-bold mb-3">9. Contact</h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-border p-4 bg-card flex items-start gap-3">
                  <Mail size={18} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a href="mailto:privacy@britannia-visas.co.uk" className="text-primary text-sm underline">privacy@britannia-visas.co.uk</a>
                  </div>
                </div>
                <div className="border border-border p-4 bg-card flex items-start gap-3">
                  <Phone size={18} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a href="tel:+442071234567" className="text-primary text-sm">+44 (0) 20 7123 4567</a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground flex flex-wrap gap-4">
            <Link href="/terms-of-service" className="text-primary underline">Terms of Service</Link>
            <Link href="/complaints-procedure" className="text-primary underline">Complaints Procedure</Link>
            <Link href="/contact" className="text-primary underline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
