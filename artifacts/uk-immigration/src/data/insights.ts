export interface InsightArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  authorTitle: string;
  excerpt: string;
  readTime: number;
  sections: {
    heading?: string;
    paragraphs?: string[];
    list?: string[];
  }[];
}

export const articles: InsightArticle[] = [
  {
    slug: "skilled-worker-salary-thresholds-2024",
    title: "Skilled Worker Visa 2024: New Salary Thresholds and What They Mean for You",
    date: "12 April 2024",
    category: "Work Visas",
    author: "A. Harrison",
    authorTitle: "IAA Level 1 Adviser",
    excerpt:
      "In April 2024, the Home Office raised the general salary threshold for Skilled Worker visa applicants from £26,200 to £38,700. We explain what changed, who is affected, and what options remain for those who fall below the new minimum.",
    readTime: 6,
    sections: [
      {
        heading: "What Changed in April 2024?",
        paragraphs: [
          "On 4 April 2024, the general minimum salary threshold for the Skilled Worker visa was increased from £26,200 per year to £38,700 per year. This represents a 48% increase and is the single largest change to the Skilled Worker route since the points-based system was introduced in December 2020.",
          "The increase applies to new applicants and to those extending or switching into the Skilled Worker route. Those who were already on a Skilled Worker visa granted before 4 April 2024 benefit from transitional provisions and can continue to renew at the previous lower threshold, provided the job and employer remain the same.",
        ],
      },
      {
        heading: "The 'Going Rate' Requirement",
        paragraphs: [
          "In addition to the general threshold, applicants must also meet the 'going rate' for their specific occupation code, which is set at the 50th percentile (median) of earnings for that role according to ONS data. The higher of the general threshold or the going rate applies.",
          "This means that for many highly skilled roles — particularly in healthcare, engineering, and technology — the going rate will exceed £38,700 and must be met regardless.",
        ],
      },
      {
        heading: "New Entrant and Other Discounts",
        paragraphs: [
          "The Home Office retained a 'new entrant' discount, allowing qualifying applicants to be paid 70% of the applicable going rate (subject to a floor of £30,960). To qualify as a new entrant, you must be:",
        ],
        list: [
          "Under 26 at the time of application",
          "Switching from a Student or Graduate visa",
          "In the first two years of a UK postgraduate doctor or dentist training programme",
          "Sponsored as a 'new entrant' for the first year of a role that leads to a higher skilled job",
        ],
      },
      {
        heading: "The Immigration Salary List",
        paragraphs: [
          "Certain occupations on the Immigration Salary List (ISL, formerly the Shortage Occupation List) continue to attract a discount, allowing employers to pay 80% of the going rate for those roles. As of April 2024 the list was substantially reduced, and it is important to verify whether a specific role remains eligible.",
          "Key health and care roles retain their ISL status, though the Health and Care visa now has its own specific rules separate from the main Skilled Worker route.",
        ],
      },
      {
        heading: "Practical Implications for Employers and Applicants",
        paragraphs: [
          "Employers should review all existing Certificates of Sponsorship (CoS) assigned before 4 April 2024 to understand the transitional rules and ensure any renewal applications are processed correctly.",
          "For new applicants who cannot meet the £38,700 threshold, it is important to explore whether a discount applies, whether there is a higher-paying alternative role that better reflects the work being done, or whether the employer can legitimately restructure the package to include allowances that count toward the salary threshold.",
        ],
      },
      {
        heading: "Our View",
        paragraphs: [
          "The April 2024 changes represent the most significant tightening of the Skilled Worker route in recent memory. Many applicants who would previously have qualified no longer will, and employers face real challenges in recruiting internationally for lower-salary positions.",
          "If you are uncertain whether your circumstances meet the new requirements, we strongly advise seeking a professional assessment before making an application. A refused application can affect future visa prospects and employer sponsor licence ratings.",
        ],
      },
    ],
  },
  {
    slug: "family-visa-income-requirement-guide",
    title: "The £29,000 Family Visa Income Requirement: A Complete Guide",
    date: "28 March 2024",
    category: "Family",
    author: "A. Harrison",
    authorTitle: "IAA Level 1 Adviser",
    excerpt:
      "From April 2024, the minimum income threshold for a spouse or partner visa application rose from £18,600 to £29,000. We break down how the threshold is calculated, what sources of income count, and what happens when you cannot meet it with earnings alone.",
    readTime: 7,
    sections: [
      {
        heading: "The New Threshold and the Phased Approach",
        paragraphs: [
          "The Home Office has adopted a phased approach to the increase. As of 11 April 2024, the threshold stands at £29,000. It will rise again to £34,500 and ultimately to £38,700 (the equivalent of the Skilled Worker threshold) by early 2025. At each stage, the new threshold applies to fresh applications; transitional rules protect those on existing leave.",
        ],
      },
      {
        heading: "Whose Income Counts?",
        paragraphs: [
          "The income requirement is assessed against the UK-based partner (the 'sponsor') — not the applicant abroad. The sponsor's income from the following sources is accepted:",
        ],
        list: [
          "Employment or self-employment income in the UK",
          "Non-employment income such as rental income, dividends, or interest",
          "Cash savings in excess of £88,500 (the excess above this figure can be used to top up income)",
          "State, occupational, or private pensions received in the UK",
        ],
      },
      {
        heading: "How Savings Are Used",
        paragraphs: [
          "If the sponsor's income falls below the threshold, savings can bridge the gap. The formula is: (£29,000 − annual income) × 2.5, added to £88,500 = the minimum cash savings required. For example, if the sponsor earns nothing, they would need to hold approximately £161,000 in savings.",
          "Savings must have been held continuously for at least 6 months before the application is made, and they must be held in the sponsor's or applicant's name.",
        ],
      },
      {
        heading: "What Does Not Count",
        paragraphs: [
          "It is important to understand what the Home Office will not accept. The following cannot be used to meet the income requirement:",
        ],
        list: [
          "The applicant's foreign income or employment income while abroad (with limited exceptions for pre-existing employment continuing remotely)",
          "Income from public funds (benefits, Universal Credit, etc.)",
          "Loans or credit facilities",
          "Promises of future income",
          "Third-party sponsorship from family members",
        ],
      },
      {
        heading: "The Suitability and Evidential Requirements",
        paragraphs: [
          "Even where the income threshold is met, applicants must submit financial evidence in a strictly prescribed format. Employment income must be evidenced with payslips covering a period determined by the type of employment, bank statements showing salary credits, and a letter from the employer confirming contract terms.",
          "Self-employed sponsors face additional requirements including tax returns, HMRC documentation, and business accounts. Errors in the format of financial evidence are one of the most common reasons for refusal, and it is entirely avoidable with careful preparation.",
        ],
      },
    ],
  },
  {
    slug: "eu-settlement-scheme-late-applications",
    title: "EU Settlement Scheme: Your Options If You Missed the Deadline",
    date: "15 February 2024",
    category: "Settlement",
    author: "A. Harrison",
    authorTitle: "IAA Level 1 Adviser",
    excerpt:
      "The main EUSS deadline passed on 30 June 2021, but late applications are still being accepted for those with 'reasonable grounds'. We explain who qualifies, what evidence is needed, and what happens if your late application is refused.",
    readTime: 5,
    sections: [
      {
        heading: "The Scheme Is Still Open — For Now",
        paragraphs: [
          "Despite the 30 June 2021 deadline having passed, the EU Settlement Scheme remains open for late applications. However, late applicants must demonstrate 'reasonable grounds' for missing the deadline. Without this, the Home Office will refuse the application without considering whether the person would have otherwise qualified.",
        ],
      },
      {
        heading: "What Counts as Reasonable Grounds?",
        paragraphs: [
          "The Home Office has published guidance setting out a non-exhaustive list of examples. In broad terms, reasonable grounds include:",
        ],
        list: [
          "Serious medical or physical incapacity preventing the person from applying",
          "A significant lack of capacity — including children in care who were not applied for by their carers",
          "Being a victim of modern slavery or domestic abuse where the abuser prevented the application",
          "Lack of awareness of the requirement, particularly for elderly or isolated individuals",
          "Reasonable reliance on a third party (such as an employer or adviser) who failed to act",
          "Care leavers who were not assisted in making an application in time",
        ],
      },
      {
        heading: "Joining Family Members",
        paragraphs: [
          "A separate category of late applications exists for joining family members — i.e., those whose relationship with an EUSS holder existed before 31 December 2020 but who have not yet applied. The rules here are more relaxed: there is no specific deadline for these applications, though the relationship must have pre-dated the end of the transition period.",
          "Children born or adopted after 30 June 2021 to an EUSS holder can also apply as joining family members, regardless of when they were born.",
        ],
      },
      {
        heading: "Upgrading from Pre-Settled to Settled Status",
        paragraphs: [
          "Those who hold pre-settled status and have now accumulated 5 years of continuous residence can apply to upgrade to full settled status. This does not happen automatically — a new application must be submitted. Pre-settled status can now be extended once, but an upgrade to settled status should be pursued as soon as eligibility is reached.",
        ],
      },
      {
        heading: "What If a Late Application Is Refused?",
        paragraphs: [
          "An EUSS refusal carries a right of appeal to the First-tier Tribunal (Immigration and Asylum Chamber). Grounds of appeal include that the refusal was not in accordance with the EUSS regulations, or that it was incompatible with the Withdrawal Agreement. Time limits are strict (28 days for those refused from abroad), so specialist advice should be sought immediately upon receiving a refusal decision.",
        ],
      },
    ],
  },
  {
    slug: "graduate-visa-route-to-settlement",
    title: "The Graduate Visa: A Strategic Route to UK Settlement",
    date: "3 January 2024",
    category: "Work Visas",
    author: "A. Harrison",
    authorTitle: "IAA Level 1 Adviser",
    excerpt:
      "The Graduate visa offers 2–3 years of unrestricted post-study work rights. While it does not count directly toward ILR, it creates the time and flexibility to secure a Skilled Worker visa and begin the settlement clock. We explain how to use it strategically.",
    readTime: 5,
    sections: [
      {
        heading: "What the Graduate Visa Gives You",
        paragraphs: [
          "The Graduate route allows international students who have completed a UK degree or eligible qualification to remain in the UK for 2 years (or 3 years for PhD graduates) without needing a job offer or sponsor. During this time, there are virtually no restrictions on the type of work or the number of jobs held.",
          "This flexibility is significant. You can work at any skill level, try different industries, be self-employed, or even not work at all. The only prohibited activities are working as a professional sportsperson or a sports coach.",
        ],
      },
      {
        heading: "The Critical Limitation: No ILR Count",
        paragraphs: [
          "The Graduate visa does not count toward the 5-year continuous residence required for Indefinite Leave to Remain (ILR) on the Skilled Worker route. This is perhaps the most important point to understand when planning your immigration pathway.",
          "For example, if you spend 2 years on a Graduate visa and then switch to a Skilled Worker visa, your ILR clock starts from the date you were granted the Skilled Worker visa — not from when you arrived in the UK or started work.",
        ],
      },
      {
        heading: "The Strategic Use Case",
        paragraphs: [
          "Despite this limitation, the Graduate visa remains one of the most valuable tools in the post-study immigration toolkit. Its primary strategic value is to provide time to:",
        ],
        list: [
          "Find a Skilled Worker-eligible employer willing to sponsor you",
          "Accumulate UK work experience that makes you more competitive",
          "Meet the salary threshold — potentially by gaining experience that leads to promotion",
          "Allow your employer time to obtain or strengthen a sponsor licence",
          "Explore self-employment or entrepreneurship before committing to a sponsored route",
        ],
      },
      {
        heading: "Switching to a Skilled Worker Visa",
        paragraphs: [
          "You can switch from a Graduate visa to a Skilled Worker visa from within the UK at any point, provided you have a valid Certificate of Sponsorship (CoS) from a licensed employer. There is no need to travel overseas to make the switch.",
          "It is important to apply before your Graduate visa expires. Overstaying — even by a single day — triggers serious immigration consequences including mandatory refusal periods.",
        ],
      },
      {
        heading: "Dependants on the Graduate Visa",
        paragraphs: [
          "Family members (spouse/partner and children) who were your dependants on your Student visa can switch to the Graduate route alongside you. However, you cannot bring new dependants who were not already in the UK on your Student visa. This is an important consideration for those whose family circumstances change after graduation.",
        ],
      },
    ],
  },
  {
    slug: "life-in-the-uk-test-guide",
    title: "The Life in the UK Test: What to Expect and How to Prepare",
    date: "18 November 2023",
    category: "Citizenship",
    author: "A. Harrison",
    authorTitle: "IAA Level 1 Adviser",
    excerpt:
      "Passing the Life in the UK test is a mandatory step for both ILR and naturalisation applications. We explain the format, what topics are covered, who is exempt, and the most effective preparation strategies.",
    readTime: 4,
    sections: [
      {
        heading: "Who Must Take the Test?",
        paragraphs: [
          "The Life in the UK test is a mandatory requirement for most applicants for Indefinite Leave to Remain (ILR) and for naturalisation as a British citizen. It must also be passed by non-EEA nationals applying for certain other forms of settlement.",
        ],
        list: [
          "Exempt: Those aged 65 or over",
          "Exempt: Those with a long-term physical or mental condition that prevents them from studying for or taking the test",
          "Not exempt: EEA and Swiss nationals (post-Brexit) unless they meet an exemption",
          "Not exempt: Those previously exempt who are making a new application where it is now required",
        ],
      },
      {
        heading: "Format and Venue",
        paragraphs: [
          "The test consists of 24 multiple-choice questions drawn from the official handbook, 'Life in the United Kingdom: A Guide for New Residents' (3rd edition). Applicants have 45 minutes to complete the test, and must score at least 75% (18 out of 24) to pass.",
          "Tests are taken at a Home Office-approved test centre. Results are given immediately on completion. A pass certificate is issued and must be included with your ILR or naturalisation application. There is no expiry on a pass certificate once obtained.",
        ],
      },
      {
        heading: "What the Test Covers",
        paragraphs: [
          "Questions are drawn from the official handbook only — no questions are drawn from external sources. The handbook covers:",
        ],
        list: [
          "The values and principles of the UK (democracy, the rule of law, individual liberty, tolerance)",
          "British history from prehistoric times to the modern era",
          "Iconic British figures in the arts, science, and politics",
          "The UK's democratic institutions: Parliament, devolution, the monarchy",
          "Everyday life: the National Health Service, education, housing, and employment rights",
          "The UK's place in the world: international organisations and foreign policy",
        ],
      },
      {
        heading: "Effective Preparation",
        paragraphs: [
          "The single most important preparation step is to read the official handbook from cover to cover — ideally more than once. All test questions are derived from it. Do not rely solely on revision apps or summaries, as these may omit material or contain inaccuracies.",
          "Practice tests are available on the official testing website and from various third-party providers. Completing multiple practice papers under timed conditions will help build familiarity with the question style and identify gaps in knowledge.",
          "Most applicants who prepare methodically find the test straightforward. Those who struggle typically have not read the full handbook and have relied on apps alone.",
        ],
      },
    ],
  },
  {
    slug: "immigration-health-surcharge-guide",
    title: "The Immigration Health Surcharge: A Complete Cost Guide for 2024–25",
    date: "5 October 2023",
    category: "Costs & Fees",
    author: "A. Harrison",
    authorTitle: "IAA Level 1 Adviser",
    excerpt:
      "The Immigration Health Surcharge (IHS) is paid upfront by most visa applicants and grants access to NHS services. With recent increases, understanding exactly how much you will pay — and who is exempt — is essential for budgeting your application.",
    readTime: 4,
    sections: [
      {
        heading: "What Is the Immigration Health Surcharge?",
        paragraphs: [
          "The Immigration Health Surcharge (IHS) is a fee paid by most non-EEA nationals applying for a visa of more than 6 months. It is paid as part of the visa application process and must be paid upfront, in full, for the entire duration of the visa — regardless of whether NHS services are actually used.",
          "As of February 2024, the standard IHS rate is £1,035 per year of the visa (or part year). For student and youth mobility scheme applicants, the rate is £776 per year.",
        ],
      },
      {
        heading: "How the IHS Is Calculated",
        paragraphs: [
          "The IHS is calculated by multiplying the applicable yearly rate by the number of years (and any portion of a year) in the visa duration. Some examples:",
        ],
        list: [
          "Skilled Worker visa (3 years): 3 × £1,035 = £3,105",
          "Skilled Worker visa (5 years): 5 × £1,035 = £5,175",
          "Family visa (2.5 years): 2.5 × £1,035 = £2,587.50",
          "Student visa (3 years): 3 × £776 = £2,328",
          "Each dependant pays the same IHS as the main applicant",
        ],
      },
      {
        heading: "Who Is Exempt?",
        paragraphs: [
          "Not all applicants must pay the IHS. The following are exempt:",
        ],
        list: [
          "Those applying for Indefinite Leave to Remain (ILR) — there is no IHS for settlement applications",
          "Diplomats and their dependants",
          "Those applying under the Health and Care visa route (healthcare workers and their dependants)",
          "Stateless persons and certain refugees",
          "Overseas domestic workers in certain categories",
          "Those with applications exempt under a bilateral agreement (some Commonwealth countries)",
        ],
      },
      {
        heading: "IHS Refunds",
        paragraphs: [
          "The IHS is refunded if your visa application is refused, withdrawn, or if you pay more than you should have. It is also refunded on a pro-rata basis if you receive ILR or British citizenship earlier than the original visa expiry. Refunds must be applied for — they are not issued automatically.",
        ],
      },
      {
        heading: "Planning Your Costs",
        paragraphs: [
          "For families applying together, the IHS can represent a very significant upfront cost. A family of four applying for 5-year Skilled Worker visas would face an IHS bill of £20,700, before any visa application fees are added.",
          "Understanding the full cost of a visa application — including the IHS, application fee, biometric appointment, and any professional fees — is essential before committing to an immigration route. We always provide a clear, itemised cost estimate at the outset of our engagement.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export const categories = [...new Set(articles.map((a) => a.category))];
