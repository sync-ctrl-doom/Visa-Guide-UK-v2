import { Shield, Target, Scale, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/55 to-primary/20" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">About the Firm</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
            We believe immigration law should be practiced with transparency, empathy, and uncompromising professional standards.
          </p>
        </div>
      </section>

      {/* Core Content */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Philosophy</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p>
                  Britannia Visas & Immigration Consultancy was founded on a simple premise: individuals navigating the UK immigration system deserve honest, clear, and expert guidance without the jargon or hidden fees.
                </p>
                <p>
                  We understand that behind every visa application is a career aspiration, a family seeking reunion, or a desire for a secure future. We do not treat files as mere paperwork; we treat them as lives in transition.
                </p>
                <p>
                  Our commitment is to assess your case thoroughly, advise you candidly on your prospects of success, and represent you diligently throughout the entire process.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-muted p-6 border border-border">
                  <Target className="text-primary mb-4" size={28} />
                  <h4 className="font-bold mb-2">Clarity First</h4>
                  <p className="text-sm text-muted-foreground">Straightforward advice on costs, timelines, and requirements.</p>
                </div>
                <div className="bg-muted p-6 border border-border">
                  <Scale className="text-primary mb-4" size={28} />
                  <h4 className="font-bold mb-2">Ethical Practice</h4>
                  <p className="text-sm text-muted-foreground">We will never take on a case if we do not believe it has merit.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative z-10 border border-border bg-muted">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=800&q=80" alt="Modern Consultation Office" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card border border-border p-8 shadow-xl z-20 max-w-sm hidden sm:block">
                <h3 className="font-serif text-xl font-bold mb-2">Dedicated Expertise</h3>
                <p className="text-muted-foreground text-sm">Every client works directly with a qualified immigration specialist from consultation to decision.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IAA Section */}
      <section className="py-12 md:py-24 bg-muted border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Shield size={48} className="mx-auto text-primary mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Regulated by the IAA</h2>
              <p className="text-lg text-muted-foreground">
                What it means for you and why it matters.
              </p>
            </div>

            <div className="space-y-8 bg-card p-8 md:p-12 border border-border shadow-sm">
              <p className="text-muted-foreground leading-relaxed">
                In the UK, it is a criminal offence to provide immigration advice unless regulated by the Office of the Immigration Services Commissioner (IAA) or an equivalent professional body. 
              </p>
              
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold">Why choose a regulated adviser?</h3>
                
                {[
                  "Accountability: We are subject to rigorous audits and adhere to a strict Code of Standards.",
                  "Competence: We must prove our legal knowledge and keep it current through continuous professional development.",
                  "Protection: You are protected by professional indemnity insurance and have access to an independent complaints scheme.",
                  "Integrity: We are legally bound to act in your best interests, maintain confidentiality, and ensure client funds are protected."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  We are registered at Level 1, allowing us to advise on applications within the Immigration Rules. Registration Number: F202300000.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
