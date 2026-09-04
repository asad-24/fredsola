import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Home,
  Landmark,
  Library,
  PiggyBank,
  ShieldCheck,
  Sprout,
  Umbrella,
  Users,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  concern: string;
  whyItMatters: string;
  howItWorks: string;
  whoMayBenefit: string[];
  considerations: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const company = {
  name: "FKSola Financial",
  tagline: "Building a better financial future.",
  representative: "Frederick Solaga",
  role: "Financial Professional",
  email: "Fred@fksolafinancial.com",
  phone: "+1 (513) 906-2376",
  location: "Main Office: Columbia, MD",
  address: "6851 Hall Ln, Suite 100, Columbia, MD 21045, United States",
  addressLines: [
    "6851 Hall Ln, Suite 100",
    "Columbia, MD 21045",
    "United States",
  ],
  npn: "1345477",
  socialStatus: "Social profiles coming soon",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const philosophy = [
  {
    title: "Protect",
    icon: ShieldCheck,
    description:
      "Help protect the people, income, and assets that matter most.",
  },
  {
    title: "Plan",
    icon: PiggyBank,
    description:
      "Develop thoughtful strategies around individual goals and priorities.",
  },
  {
    title: "Educate",
    icon: BookOpen,
    description:
      "Explain financial concepts and choices in language people understand.",
  },
  {
    title: "Prepare",
    icon: Sprout,
    description:
      "Help clients think beyond today and prepare for tomorrow.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Understand",
    description:
      "Learn about the client’s goals, priorities, responsibilities, and concerns.",
  },
  {
    step: "02",
    title: "Educate",
    description:
      "Explain available options clearly so decisions feel informed, not rushed.",
  },
  {
    step: "03",
    title: "Strategize",
    description:
      "Help evaluate appropriate strategies based on the client’s life stage and needs.",
  },
  {
    step: "04",
    title: "Move Forward",
    description:
      "Help the client take the next step when they are ready and comfortable.",
  },
];

export const services: Service[] = [
  {
    slug: "life-insurance",
    title: "Life Insurance",
    shortTitle: "Life Insurance",
    icon: Umbrella,
    summary:
      "Explore protection designed to support loved ones if life changes unexpectedly.",
    concern:
      "Many families depend on income, care, and shared responsibilities that would be difficult to replace after a loss.",
    whyItMatters:
      "Life insurance can help create a financial cushion for everyday expenses, debts, education plans, and future responsibilities.",
    howItWorks:
      "A policy is selected around coverage needs, budget, health, time horizon, and family priorities. The goal is to match protection with a realistic plan.",
    whoMayBenefit: [
      "Parents and caregivers",
      "Homeowners or borrowers",
      "Business owners",
      "Families with long-term obligations",
    ],
    considerations: [
      "Coverage amount and duration should reflect current responsibilities.",
      "Policy types vary by cost, flexibility, and long-term features.",
      "Health, age, and underwriting can affect availability and pricing.",
    ],
    faqs: [
      {
        question: "How much life insurance should someone consider?",
        answer:
          "A useful starting point is to review income, debts, family expenses, education goals, and the time loved ones may need support.",
      },
      {
        question: "Is life insurance only for families with children?",
        answer:
          "No. It may also support spouses, parents, business partners, or anyone who depends on another person financially.",
      },
    ],
  },
  {
    slug: "mortgage-protection",
    title: "Mortgage Protection",
    shortTitle: "Mortgage Protection",
    icon: Home,
    summary:
      "Review options that may help a household keep its home through difficult transitions.",
    concern:
      "A mortgage is often a family’s largest monthly obligation, and unexpected loss or illness can put housing stability under pressure.",
    whyItMatters:
      "Mortgage-focused protection can help families think through how housing costs would be handled if income changed suddenly.",
    howItWorks:
      "Coverage is considered in relation to the mortgage balance, monthly payment, household income, and broader protection strategy.",
    whoMayBenefit: [
      "New homeowners",
      "Families with a single primary income",
      "Households with long-term mortgage obligations",
      "People refinancing or purchasing property",
    ],
    considerations: [
      "Coverage should be reviewed as the mortgage balance changes.",
      "Some strategies are broader than mortgage-only protection.",
      "Budget and underwriting still matter.",
    ],
    faqs: [
      {
        question: "Is mortgage protection different from homeowner’s insurance?",
        answer:
          "Yes. Homeowner’s insurance generally protects property; mortgage protection focuses on the household’s ability to manage the mortgage after certain life events.",
      },
      {
        question: "Can coverage be reviewed after refinancing?",
        answer:
          "Yes. Refinancing is a good time to revisit the amount, term, and fit of the strategy.",
      },
    ],
  },
  {
    slug: "living-benefits",
    title: "Living Benefits",
    shortTitle: "Living Benefits",
    icon: HeartHandshake,
    summary:
      "Learn how certain policy features may provide support during qualifying health events.",
    concern:
      "A serious illness or injury can affect income, savings, and family stability while someone is still living.",
    whyItMatters:
      "Living benefits may help people understand options that can provide financial flexibility during qualifying circumstances.",
    howItWorks:
      "Certain policies include riders or features that may allow access to benefits if specific conditions and requirements are met.",
    whoMayBenefit: [
      "Families concerned about health-related income disruption",
      "Self-employed professionals",
      "People with limited emergency savings",
      "Clients seeking protection beyond a death benefit",
    ],
    considerations: [
      "Eligibility depends on policy terms and qualifying events.",
      "Accessing benefits can reduce future policy values or benefits.",
      "Policy language should be reviewed carefully.",
    ],
    faqs: [
      {
        question: "Are living benefits automatic?",
        answer:
          "They depend on the policy and its riders. A careful review helps clarify what is included and how it works.",
      },
      {
        question: "Do living benefits replace health insurance?",
        answer:
          "No. They are separate from health insurance and should be considered as part of a broader protection plan.",
      },
    ],
  },
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    shortTitle: "Retirement",
    icon: Landmark,
    summary:
      "Create a clearer view of retirement income, timing, risk, and long-term priorities.",
    concern:
      "Retirement decisions can feel complex because income, taxes, market risk, longevity, and family goals intersect.",
    whyItMatters:
      "A thoughtful retirement conversation can help organize priorities and identify gaps before they become urgent.",
    howItWorks:
      "The process reviews income sources, expenses, timeline, protection needs, legacy goals, and comfort with risk.",
    whoMayBenefit: [
      "Pre-retirees organizing income plans",
      "Families balancing retirement and education goals",
      "Professionals changing careers",
      "People seeking clearer long-term direction",
    ],
    considerations: [
      "Retirement planning should be revisited as life changes.",
      "No strategy removes all risk.",
      "Tax and legal questions should be reviewed with qualified professionals.",
    ],
    faqs: [
      {
        question: "When should retirement planning begin?",
        answer:
          "The earlier the better, but meaningful planning can begin at any stage when goals and available resources are reviewed honestly.",
      },
      {
        question: "Is retirement planning only about investments?",
        answer:
          "No. It also includes income needs, protection, family priorities, healthcare concerns, and legacy intentions.",
      },
    ],
  },
  {
    slug: "annuities",
    title: "Annuities",
    shortTitle: "Annuities",
    icon: Library,
    summary:
      "Understand annuity concepts, income options, tradeoffs, and suitability considerations.",
    concern:
      "Many people want dependable retirement income but are unsure how to balance growth potential, access, and stability.",
    whyItMatters:
      "Annuities may help address certain income or accumulation goals, but they require careful education before any decision.",
    howItWorks:
      "An annuity is a contract with an insurance company. Features vary, including income options, surrender periods, fees, caps, and guarantees.",
    whoMayBenefit: [
      "People seeking retirement income conversations",
      "Clients concerned about outliving assets",
      "Conservative savers evaluating alternatives",
      "Households reviewing income stability",
    ],
    considerations: [
      "Annuities are not appropriate for everyone.",
      "Liquidity limits, fees, and surrender charges may apply.",
      "Guarantees are backed by the issuing insurance company.",
    ],
    faqs: [
      {
        question: "Are all annuities the same?",
        answer:
          "No. Fixed, indexed, and variable structures can differ significantly in risk, fees, access, and income features.",
      },
      {
        question: "Can annuities lose value?",
        answer:
          "It depends on the type and contract terms. Understanding the specific structure is essential before considering one.",
      },
    ],
  },
  {
    slug: "college-planning",
    title: "College Planning",
    shortTitle: "College Planning",
    icon: GraduationCap,
    summary:
      "Think through education funding goals with clarity, balance, and family priorities in mind.",
    concern:
      "Families often want to support education without losing sight of retirement, protection, and daily financial stability.",
    whyItMatters:
      "College planning helps families discuss timing, savings habits, available resources, and the tradeoffs between competing goals.",
    howItWorks:
      "A planning conversation can compare education costs, savings options, time horizon, financial aid considerations, and family commitments.",
    whoMayBenefit: [
      "Parents and grandparents",
      "Families with young children",
      "Students preparing for college decisions",
      "Households balancing education and retirement",
    ],
    considerations: [
      "Education costs can change quickly.",
      "Financial aid rules and account treatment vary.",
      "College planning should not ignore protection or retirement needs.",
    ],
    faqs: [
      {
        question: "Is it too early to plan for college?",
        answer:
          "Starting early can create more options, but families can still benefit from organizing choices later in the process.",
      },
      {
        question: "Should college planning come before retirement planning?",
        answer:
          "Both should be reviewed together so one goal does not unintentionally weaken another.",
      },
    ],
  },
  {
    slug: "legacy-planning",
    title: "Legacy Planning",
    shortTitle: "Legacy Planning",
    icon: BriefcaseBusiness,
    summary:
      "Clarify how values, assets, family responsibilities, and future intentions may align.",
    concern:
      "Many people want to care for loved ones and causes, but delay organizing the financial pieces that support those intentions.",
    whyItMatters:
      "Legacy planning encourages intentional conversations about beneficiaries, protection, ownership, and long-term family needs.",
    howItWorks:
      "The process reviews goals, current arrangements, protection strategies, beneficiary designations, and coordination with legal professionals.",
    whoMayBenefit: [
      "Families with dependents",
      "Business owners",
      "People with charitable intentions",
      "Households coordinating multigenerational decisions",
    ],
    considerations: [
      "Legal documents should be prepared by qualified legal professionals.",
      "Beneficiary designations should be reviewed regularly.",
      "Financial and legal planning should be coordinated.",
    ],
    faqs: [
      {
        question: "Is legacy planning only for wealthy families?",
        answer:
          "No. Legacy planning is about intention, clarity, and care for the people and responsibilities that matter.",
      },
      {
        question: "Does FKSola Financial provide legal advice?",
        answer:
          "No. Legal questions should be handled by qualified legal professionals, with financial planning coordinated around those decisions.",
      },
    ],
  },
  {
    slug: "financial-education",
    title: "Financial Education",
    shortTitle: "Education",
    icon: BookOpen,
    summary:
      "Build confidence by learning financial concepts in clear, practical language.",
    concern:
      "Financial topics can feel intimidating when explanations are full of jargon or pressure.",
    whyItMatters:
      "Education helps people ask better questions, understand tradeoffs, and make decisions with more confidence.",
    howItWorks:
      "FKSola Financial focuses on clear conversations, useful resources, and step-by-step explanations before strategy discussions.",
    whoMayBenefit: [
      "First-time planners",
      "Families comparing protection options",
      "Professionals preparing for retirement",
      "Anyone who wants clearer financial language",
    ],
    considerations: [
      "Education is not a substitute for individualized advice.",
      "Personal circumstances should guide next steps.",
      "Learning is most useful when paired with thoughtful questions.",
    ],
    faqs: [
      {
        question: "Can someone start with education only?",
        answer:
          "Yes. A conversation can begin with learning and clarification before discussing any possible strategy.",
      },
      {
        question: "Are resources personalized advice?",
        answer:
          "No. Educational resources are general and should be followed by a personal review when decisions are involved.",
      },
    ],
  },
];

export const resources = [
  {
    category: "Financial Education",
    title: "Questions to Ask Before Choosing a Financial Strategy",
    description:
      "A practical guide to slowing down, clarifying goals, and understanding tradeoffs.",
  },
  {
    category: "Life Insurance",
    title: "Understanding Protection Without Pressure",
    description:
      "A plain-language overview of how families can think about coverage needs.",
  },
  {
    category: "Retirement",
    title: "Preparing for Retirement Conversations",
    description:
      "Key topics to organize before discussing income, timing, and risk.",
  },
  {
    category: "Family Protection",
    title: "What Would Need to Continue?",
    description:
      "A thoughtful worksheet-style prompt for identifying household responsibilities.",
  },
  {
    category: "Mortgage Protection",
    title: "Protecting the Home as Part of the Plan",
    description:
      "How housing obligations fit into broader financial protection planning.",
  },
  {
    category: "College Planning",
    title: "Balancing Education Costs and Long-Term Goals",
    description:
      "A family-centered look at education funding priorities and tradeoffs.",
  },
];

export const testimonials = [
  {
    quote:
      "The conversation helped us understand our options without feeling rushed.",
    name: "Client family",
    detail: "Protection planning",
  },
  {
    quote:
      "Clear explanations made the process feel more organized and less overwhelming.",
    name: "Retirement client",
    detail: "Education session",
  },
  {
    quote:
      "We appreciated the calm, thoughtful approach to planning for our family.",
    name: "Household client",
    detail: "Family financial review",
  },
];

export const partners = [
  "Carrier Partner",
  "Education Network",
  "Planning Alliance",
  "Community Partner",
];

export const careerValues = [
  {
    title: "Purpose",
    description:
      "Help families understand meaningful financial decisions with patience and clarity.",
  },
  {
    title: "Education",
    description:
      "Develop the ability to explain concepts simply and serve as a trusted guide.",
  },
  {
    title: "Growth",
    description:
      "Build professional habits, personal discipline, and long-term opportunity.",
  },
  {
    title: "Entrepreneurship",
    description:
      "Pursue a career path that rewards initiative, care, and consistent development.",
  },
];

export const audienceIcons = {
  families: Users,
  education: GraduationCap,
};
