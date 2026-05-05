import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { articles, categories } from "@/data/insights";

const categoryColors: Record<string, string> = {
  "Work Visas": "bg-blue-100 text-blue-800",
  "Family": "bg-rose-100 text-rose-800",
  "Settlement": "bg-amber-100 text-amber-800",
  "Citizenship": "bg-emerald-100 text-emerald-800",
  "Costs & Fees": "bg-purple-100 text-purple-800",
};

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  const featured = articles[0];
  const rest = filtered.slice(activeCategory ? 0 : 1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">From Our Desk</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Immigration Insights
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
            Expert commentary, practical guides, and timely updates on UK immigration law — written by our IAA Level 1 advisers for applicants, employers, and families navigating the system.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-muted border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex gap-3 flex-wrap items-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-1.5 text-sm font-medium border transition-colors rounded-sm ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-background"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={`px-4 py-1.5 text-sm font-medium border transition-colors rounded-sm ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-background"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">

          {/* Featured Article */}
          {!activeCategory && (
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">Featured Article</p>
              <Link href={`/insights/${featured.slug}`}>
                <div className="group grid md:grid-cols-5 border border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="md:col-span-2 bg-primary p-10 md:p-12 flex flex-col justify-between min-h-[220px]">
                    <div>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-sm mb-6 ${categoryColors[featured.category] || "bg-muted text-muted-foreground"}`}>
                        <Tag size={11} />
                        {featured.category}
                      </span>
                      <p className="text-primary-foreground/60 text-sm">{featured.date}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mt-6">
                      <Clock size={14} />
                      <span>{featured.readTime} min read</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-snug">
                        {featured.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-6 group-hover:text-secondary transition-colors">
                      Read article <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`}>
                <div className="group border border-border bg-card hover:border-primary/50 transition-colors h-full flex flex-col">
                  <div className="bg-muted p-6 border-b border-border">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-sm ${categoryColors[article.category] || "bg-muted text-muted-foreground"}`}>
                      <Tag size={11} />
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs text-muted-foreground mb-3">{article.date}</p>
                    <h3 className="font-serif text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug flex-grow">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {article.readTime} min read
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No articles in this category yet.</p>
            </div>
          )}

        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-12 md:py-16 bg-muted border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Have a question about your situation?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our articles provide general information only. For advice specific to your circumstances, speak with one of our IAA-regulated advisers — your initial assessment is free.
          </p>
          <Link href="/free-assessment">
            <button className="bg-primary text-primary-foreground font-serif tracking-wide px-8 py-4 rounded-none hover:bg-primary/90 transition-colors text-base md:text-lg">
              Request Your Free Assessment
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
