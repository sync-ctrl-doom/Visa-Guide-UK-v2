import { Building2, PoundSterling, Clock } from "lucide-react";
import { ReactNode } from "react";

export interface CostRow {
  label: string;
  fee: string;
}

interface CostsSectionProps {
  govFees: CostRow[];
  adviserFees: CostRow[];
  ihsContent: ReactNode;
  ihsVariant?: "amber" | "green";
  processingTime: string;
  adviserNote?: string;
  freeAssessmentNote: string;
}

export function CostsSection({
  govFees,
  adviserFees,
  ihsContent,
  ihsVariant = "amber",
  processingTime,
  adviserNote,
  freeAssessmentNote,
}: CostsSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl font-bold">Fees &amp; Costs</h2>
      <p className="text-muted-foreground text-sm">
        Home Office fees correct as of 2025/2026. Always verify current rates at gov.uk before applying.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
            <Building2 size={18} className="text-primary" /> Home Office Fees
          </h3>
          <div className="border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-2.5 text-left font-medium">Application Type</th>
                  <th className="px-4 py-2.5 text-right font-medium whitespace-nowrap">Gov. Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {govFees.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                    <td className="px-4 py-2.5">{row.label}</td>
                    <td className="px-4 py-2.5 text-right font-mono font-medium">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={14} className="shrink-0" />
            <span>{processingTime}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
            <PoundSterling size={18} className="text-secondary" /> Our Adviser Fees
          </h3>
          <div className="border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="px-4 py-2.5 text-left font-medium">Service</th>
                  <th className="px-4 py-2.5 text-right font-medium whitespace-nowrap">Our Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {adviserFees.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                    <td className="px-4 py-2.5">{row.label}</td>
                    <td className="px-4 py-2.5 text-right font-mono font-medium text-primary whitespace-nowrap">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {adviserNote && (
            <p className="text-xs text-muted-foreground">{adviserNote}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className={`p-4 text-sm rounded border ${
          ihsVariant === "amber"
            ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200"
            : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
        }`}>
          {ihsContent}
        </div>
        <div className="bg-secondary/10 border border-secondary/30 p-4 rounded">
          <p className="text-sm font-medium text-secondary-foreground">Free initial assessment available</p>
          <p className="text-xs text-muted-foreground mt-1">{freeAssessmentNote}</p>
        </div>
      </div>
    </div>
  );
}
