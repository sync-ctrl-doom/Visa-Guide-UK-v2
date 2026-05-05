import { Link } from "wouter";
import { FileText } from "lucide-react";

const LAST_UPDATED = "1 May 2025";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={20} className="text-secondary" />
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Terms of Service</h1>
          <p className="text-primary-foreground/70 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800/40 p-5 mb-10 text-sm leading-relaxed text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> This website provides general immigration information only. Nothing on this site constitutes immigration advice specific to your circumstances. For personalised advice, you must consult a regulated immigration adviser. Britannia Visas & Immigration Consultancy is regulated by the IAA (Reg. No. F202300000).
          </div>

          <div className="space-y-10 text-foreground text-base leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using this website (<strong>britannia-visas.co.uk</strong>), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this website. These terms apply to all visitors, whether or not you engage our services.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">2. Nature of Information Provided</h2>
              <p>The content on this website is provided for <strong>general informational purposes only</strong>. It does not constitute immigration advice, legal advice, or any other form of professional advice. The information reflects our understanding of UK immigration rules at the time of publication, but immigration law changes frequently.</p>
              <p className="mt-3">You should not act or refrain from acting on the basis of anything on this website without first obtaining advice from a regulated immigration adviser tailored to your specific circumstances.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">3. Our Regulatory Status</h2>
              <p>Britannia Visas & Immigration Consultancy is authorised and regulated by the Office of the Immigration Services Commissioner (IAA) at Level 1, Registration No. F202300000. This authorises us to provide immigration advice and representation on specified matters. The IAA maintains a public register of regulated advisers at <a href="https://www.gov.uk/find-an-immigration-adviser" target="_blank" rel="noopener noreferrer" className="text-primary underline">gov.uk/find-an-immigration-adviser</a>.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">4. Eligibility Checker Tool</h2>
              <p>The Eligibility Checker tool on this website provides <strong>general indicative guidance only</strong>. It does not constitute an assessment of your legal right to a visa or leave to remain. Results produced by the tool may not be accurate for your specific circumstances. Do not submit a visa application based solely on the output of this tool.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">5. No Client Relationship</h2>
              <p>Using this website, completing our free assessment form, or communicating with us by email does not create a client-adviser relationship. Such a relationship is only established when we issue a formal client care letter and you confirm your instructions in writing.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Britannia Visas & Immigration Consultancy shall not be liable for any loss or damage arising from:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5 text-muted-foreground">
                <li>Reliance on any information contained on this website;</li>
                <li>Errors, omissions, or inaccuracies in the content;</li>
                <li>Any interruption or unavailability of this website;</li>
                <li>Any third-party content linked to from this website;</li>
                <li>Any visa refusal or immigration decision by the Home Office.</li>
              </ul>
              <p className="mt-4">Nothing in these terms limits our liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">7. Intellectual Property</h2>
              <p>All content on this website — including text, graphics, logos, and the Britannia Visas & Immigration Consultancy brand — is protected by copyright and other intellectual property rights owned by or licensed to Britannia Visas & Immigration Consultancy. You may not copy, reproduce, republish, or distribute any content without our prior written consent, except for personal, non-commercial use.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">8. External Links</h2>
              <p>This website contains links to third-party websites including GOV.UK and the IAA. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">9. Acceptable Use</h2>
              <p>You agree not to use this website to transmit any material that is defamatory, offensive, fraudulent, or unlawful. You must not attempt to gain unauthorised access to any part of the website or its supporting systems.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">10. Changes to These Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">11. Governing Law</h2>
              <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-3">12. Contact</h2>
              <p>For questions about these terms, please contact us at <a href="mailto:legal@britannia-visas.co.uk" className="text-primary underline">legal@britannia-visas.co.uk</a> or write to us at 120 Chancery Lane, London, WC2A 1PX.</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link>
            <Link href="/complaints-procedure" className="text-primary underline">Complaints Procedure</Link>
            <Link href="/contact" className="text-primary underline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
