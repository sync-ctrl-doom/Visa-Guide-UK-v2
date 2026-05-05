import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Tag, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, articles } from "@/data/insights";

const categoryColors: Record<string, string> = {
  "Work Visas": "bg-blue-100 text-blue-800",
  "Family": "bg-rose-100 text-rose-800",
  "Settlement": "bg-amber-100 text-amber-800",
  "Citizenship": "bg-emerald-100 text-emerald-800",
  "Costs & Fees": "bg-purple-100 text-purple-800",
};

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">This article does not exist or may have been moved.</p>
        <Link href="/insights">
          <Button className="bg-primary text-primary-foreground rounded-none font-serif">
            Back to Immigration Insights
          </Button>
        </Link>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  const otherArticles = articles
    .filter((a) => a.slug !== article.slug && a.category !== article.category)
    .slice(0, 2 - relatedArticles.length);

  const suggested = [...relatedArticles, ...otherArticles].slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-8 transition-colors">
            <ArrowLeft size={16} />
            Immigration Insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-sm ${categoryColors[article.category] || "bg-muted"}`}>
              <Tag size={11} />
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-primary-foreground/60 text-sm">
              <Clock size={14} />
              {article.readTime} min read
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
            {article.title}
          </h1>

          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3 border-t border-primary-foreground/20 pt-6">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <User size={18} className="text-secondary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-sm">{article.author}</p>
              <p className="text-primary-foreground/60 text-xs">{article.authorTitle} · {article.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">

          {/* Disclaimer */}
          <div className="bg-muted border border-border p-4 mb-10 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important:</strong> This article is intended for general information only and does not constitute immigration advice. Every case is different. You should seek advice from a regulated immigration adviser or solicitor before making any application or decision. Britannia Visas & Immigration Consultancy is regulated by the IAA (Reg. No. F202300000).
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <div key={i} className="space-y-4">
                {section.heading && (
                  <h2 className="font-serif text-2xl font-bold text-foreground">{section.heading}</h2>
                )}
                {section.paragraphs?.map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed text-lg">
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3 mt-2">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border mt-12 pt-8">
            <p className="text-sm text-muted-foreground italic">
              This article reflects the law as of {article.date}. Immigration rules change frequently. Always verify the current rules before proceeding with an application.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Does this affect your situation?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Our IAA-regulated advisers provide a free initial assessment. Tell us your circumstances and we will give you a clear view of your options.
          </p>
          <Link href="/free-assessment">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-serif text-base md:text-lg px-8 py-4 h-auto rounded-none">
              Request Free Assessment
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      {suggested.length > 0 && (
        <section className="py-10 md:py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h3 className="font-serif text-xl font-bold mb-6">Further Reading</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {suggested.map((rel) => (
                <Link key={rel.slug} href={`/insights/${rel.slug}`}>
                  <div className="group border border-border bg-card hover:border-primary/50 transition-colors p-6 h-full flex flex-col">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-sm mb-3 w-fit ${categoryColors[rel.category] || ""}`}>
                      {rel.category}
                    </span>
                    <h4 className="font-serif text-base font-bold mb-3 group-hover:text-primary transition-colors leading-snug flex-grow">
                      {rel.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary transition-colors mt-auto">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
