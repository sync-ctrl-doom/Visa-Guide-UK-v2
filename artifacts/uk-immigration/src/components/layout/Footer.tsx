import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Linkedin, Facebook, ArrowRight } from "lucide-react";

import logoHorizontal from "@/assets/logo-horizontal.png";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.07a8.16 8.16 0 0 0 4.77 1.52V7.12a4.85 4.85 0 0 1-1-.43z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter bar */}
      <div className="border-b border-primary-foreground/10 bg-primary/90">
        <div className="container mx-auto px-4 py-8 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif text-lg font-semibold">Stay updated on UK immigration changes</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Policy updates, new guidance, and practical tips — no spam.</p>
            </div>
            {subscribed ? (
              <p className="text-sm font-semibold text-secondary">✓ You're subscribed. Thank you.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="flex-1 md:w-64 bg-white/10 border border-white/20 text-primary-foreground placeholder-primary-foreground/50 px-4 py-2.5 text-sm outline-none focus:border-white/40 transition-colors"
                />
                <button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors px-5 py-2.5 text-sm font-semibold shrink-0 flex items-center gap-1.5">
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <img src={logoHorizontal} alt="Britannia Visas & Immigration Consultancy" className="h-20 w-auto filter brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Professional UK immigration guidance from IAA Level 1 regulated advisers. Serving clients worldwide since 2009.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="bg-white p-2 rounded-sm inline-block">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider text-center border-b border-black pb-1 mb-1">IAA</div>
                <div className="text-[8px] text-black font-medium">Level 1 Registered</div>
              </div>
              <div className="text-xs text-primary-foreground/60 font-mono">Reg No: F202300000</div>
            </div>
            <div className="flex gap-3 pt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-white/10 hover:bg-white/20 transition-colors text-primary-foreground">
                <Linkedin size={16} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 bg-white/10 hover:bg-white/20 transition-colors text-primary-foreground">
                <TikTokIcon size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-white/10 hover:bg-white/20 transition-colors text-primary-foreground">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link href="/visa-types" className="hover:text-secondary transition-colors">Visa Categories</Link></li>
              <li><Link href="/eligibility-checker" className="hover:text-secondary transition-colors">Eligibility Checker</Link></li>
              <li><Link href="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link href="/insights" className="hover:text-secondary transition-colors">Immigration Insights</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About the Firm</Link></li>
              <li><Link href="/free-assessment" className="hover:text-secondary transition-colors">Free Assessment</Link></li>
              <li><Link href="/secure-portal" className="hover:text-secondary transition-colors">Client Document Portal</Link></li>
            </ul>
          </div>

          {/* Visa Routes */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wide">Visa Routes</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/visa-types/skilled-worker" className="hover:text-secondary transition-colors">Skilled Worker Visa</Link></li>
              <li><Link href="/visa-types/family" className="hover:text-secondary transition-colors">Family Visa</Link></li>
              <li><Link href="/visa-types/student" className="hover:text-secondary transition-colors">Student Visa</Link></li>
              <li><Link href="/visa-types/visitor" className="hover:text-secondary transition-colors">Visitor Visa</Link></li>
              <li><Link href="/visa-types/ilr" className="hover:text-secondary transition-colors">Settlement (ILR)</Link></li>
              <li><Link href="/visa-types/british-citizenship" className="hover:text-secondary transition-colors">British Citizenship</Link></li>
              <li><Link href="/visa-types/bno" className="hover:text-secondary transition-colors">BN(O) Visa</Link></li>
              <li><Link href="/visa-types/graduate" className="hover:text-secondary transition-colors">Graduate Visa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 text-secondary mt-0.5" />
                <span>120 Chancery Lane<br />London, WC2A 1PX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-secondary" />
                <a href="tel:+442071234567" className="hover:text-secondary transition-colors">+44 (0) 20 7123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-secondary" />
                <a href="mailto:info@britannia-visas.co.uk" className="hover:text-secondary transition-colors">info@britannia-visas.co.uk</a>
              </li>
            </ul>
            <div className="text-xs text-primary-foreground/60 leading-relaxed border-t border-primary-foreground/10 pt-4">
              <p><strong className="text-primary-foreground/80">Mon–Fri:</strong> 9:00am – 5:30pm</p>
              <p className="mt-1"><strong className="text-primary-foreground/80">Sat:</strong> By appointment</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 space-y-4">
          <p className="text-xs text-primary-foreground/50 leading-relaxed max-w-4xl">
            <strong className="text-primary-foreground/70">Disclaimer:</strong> The information on this website is for general informational purposes only and does not constitute immigration advice. It should not be relied upon as a substitute for advice from a qualified and regulated immigration adviser. Britannia Visas & Immigration Consultancy is regulated by the Office of the Immigration Services Commissioner (IAA), Registration No. F202300000, authorised at Level 1.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Britannia Visas & Immigration Consultancy Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
              <Link href="/complaints-procedure" className="hover:text-primary-foreground transition-colors">Complaints Procedure</Link>
              <Link href="/sitemap" className="hover:text-primary-foreground transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
