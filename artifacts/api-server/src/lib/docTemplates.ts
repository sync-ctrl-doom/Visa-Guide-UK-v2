export interface DocTemplate {
  document_name: string;
  description: string;
  category: string;
  is_required: boolean;
}

export const DOC_TEMPLATES: Record<string, DocTemplate[]> = {
  "Skilled Worker": [
    { document_name: "Passport (All Pages)", description: "Colour scans of all pages, including blank pages. Must be valid for at least 6 months.", category: "Identity", is_required: true },
    { document_name: "BRP / Current Leave Document", description: "Both sides of any current Biometric Residence Permit or vignette sticker.", category: "Identity", is_required: true },
    { document_name: "Bank Statements (3 months)", description: "Official PDF or stamped paper statements from your primary bank account.", category: "Financial", is_required: true },
    { document_name: "Payslips (3 months)", description: "Most recent three consecutive payslips from your current employer.", category: "Employment", is_required: true },
    { document_name: "Employer Letter / Certificate of Sponsorship", description: "On company letterhead: start date, job title, salary, contract type, and confirmation of sponsorship.", category: "Employment", is_required: true },
    { document_name: "TB Test Certificate", description: "If required for your nationality — valid certificate from an approved clinic.", category: "Medical", is_required: true },
    { document_name: "Medical Records / IHS Receipt", description: "Immigration Health Surcharge payment confirmation, or medical records if applicable.", category: "Medical", is_required: true },
    { document_name: "English Language Certificate", description: "Approved English language test certificate (e.g. IELTS, SELT).", category: "Other", is_required: false },
  ],
  "Spouse / Family": [
    { document_name: "Passport (All Pages)", description: "Colour scans of all pages including blank pages.", category: "Identity", is_required: true },
    { document_name: "Sponsor's Passport", description: "Colour scans of sponsor's passport, all pages.", category: "Identity", is_required: true },
    { document_name: "Marriage Certificate", description: "Original or certified copy of marriage certificate.", category: "Identity", is_required: true },
    { document_name: "Bank Statements (6 months)", description: "6 months of bank statements demonstrating the financial requirement.", category: "Financial", is_required: true },
    { document_name: "Sponsor's Payslips (3 months)", description: "Most recent three consecutive payslips from sponsor's employer.", category: "Employment", is_required: true },
    { document_name: "Proof of Accommodation", description: "Tenancy agreement, mortgage statement, or letter from landlord.", category: "Other", is_required: true },
    { document_name: "Photos Together (dated)", description: "Photographs showing the relationship, with dates where possible.", category: "Other", is_required: true },
    { document_name: "TB Test Certificate", description: "If required for your nationality — valid certificate from an approved clinic.", category: "Medical", is_required: true },
  ],
  "Student": [
    { document_name: "Passport (All Pages)", description: "Colour scans of all pages including blank pages.", category: "Identity", is_required: true },
    { document_name: "CAS Number / Offer Letter", description: "Confirmation of Acceptance for Studies (CAS) number or unconditional offer letter.", category: "Other", is_required: true },
    { document_name: "Bank Statements (28 consecutive days)", description: "28 consecutive days of bank statements showing required maintenance funds.", category: "Financial", is_required: true },
    { document_name: "English Language Certificate", description: "Approved English language test certificate.", category: "Other", is_required: true },
    { document_name: "TB Test Certificate", description: "If required for your nationality — valid certificate from an approved clinic.", category: "Medical", is_required: true },
    { document_name: "ATAS Certificate", description: "Academic Technology Approval Scheme certificate if your subject requires it.", category: "Other", is_required: false },
  ],
  "Tourist / Visitor": [
    { document_name: "Passport (All Pages)", description: "Colour scans of all pages including blank pages.", category: "Identity", is_required: true },
    { document_name: "Bank Statements (3 months)", description: "Official PDF or stamped paper statements from your primary bank account.", category: "Financial", is_required: true },
    { document_name: "Proof of Employment / Leave Letter", description: "Letter from employer confirming employment and approved leave.", category: "Employment", is_required: true },
    { document_name: "Travel Itinerary", description: "Confirmed flight bookings and accommodation details.", category: "Other", is_required: true },
    { document_name: "Proof of Accommodation", description: "Hotel bookings, host invitation letter, or Airbnb confirmation.", category: "Other", is_required: true },
  ],
  "ILR": [
    { document_name: "Passport (All Pages)", description: "Colour scans of all pages including blank pages.", category: "Identity", is_required: true },
    { document_name: "All Previous BRPs", description: "All current and previous Biometric Residence Permits.", category: "Identity", is_required: true },
    { document_name: "Bank Statements (12 months)", description: "12 months of bank statements.", category: "Financial", is_required: true },
    { document_name: "Payslips (12 months)", description: "12 months of payslips from current employer.", category: "Employment", is_required: true },
    { document_name: "Tax Returns (if self-employed)", description: "HMRC Self Assessment tax returns if self-employed.", category: "Financial", is_required: false },
    { document_name: "Absence Record", description: "Record of all absences from the UK during qualifying period.", category: "Other", is_required: true },
    { document_name: "Life in the UK Test Certificate", description: "Pass certificate from the Life in the UK test.", category: "Other", is_required: true },
    { document_name: "English Language Certificate", description: "Approved English language test certificate.", category: "Other", is_required: true },
  ],
  "British Citizenship": [
    { document_name: "Passport (All Pages)", description: "Colour scans of all pages including blank pages.", category: "Identity", is_required: true },
    { document_name: "ILR / Settled Status Evidence", description: "BRP showing ILR or EUSS settled status share code.", category: "Identity", is_required: true },
    { document_name: "Bank Statements (12 months)", description: "12 months of bank statements.", category: "Financial", is_required: true },
    { document_name: "Absence Record", description: "Record of all absences from the UK during qualifying period.", category: "Other", is_required: true },
    { document_name: "Life in the UK Test Certificate", description: "Pass certificate from the Life in the UK test.", category: "Other", is_required: true },
    { document_name: "English Language Certificate", description: "Approved English language test certificate.", category: "Other", is_required: true },
  ],
  "EEA Settled Status": [
    { document_name: "Passport (All Pages)", description: "Colour scans of all pages including blank pages.", category: "Identity", is_required: true },
    { document_name: "Proof of Continuous Residence", description: "Evidence of 5 years continuous residence in the UK.", category: "Other", is_required: true },
    { document_name: "Bank Statements (12 months)", description: "12 months of bank statements.", category: "Financial", is_required: true },
    { document_name: "Payslips or Employment Evidence", description: "Evidence of employment or self-employment in the UK.", category: "Employment", is_required: true },
  ],
  "Right of Abode": [
    { document_name: "Passport (All Pages)", description: "Colour scans of all pages including blank pages.", category: "Identity", is_required: true },
    { document_name: "Birth Certificate", description: "Full birth certificate showing parents' details.", category: "Identity", is_required: true },
    { document_name: "Parent's Passport / Naturalisation Certificate", description: "Evidence of parent's British citizenship.", category: "Identity", is_required: true },
    { document_name: "Marriage Certificate (if applicable)", description: "If claiming through marriage to a British citizen.", category: "Identity", is_required: false },
  ],
};

export function getTemplateForVisaType(visaType: string): DocTemplate[] {
  return DOC_TEMPLATES[visaType] ?? DOC_TEMPLATES["Skilled Worker"]!;
}
