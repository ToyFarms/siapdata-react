import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq-01",
    question: "What is Siapdata and who is it for?",
    answer:
      "Siapdata is an all-in-one HRMS/HRIS that centralizes employee records, automates payroll, tracks attendance, manages leave and performance, and provides reporting — built for startups, SMBs, and enterprises that want to simplify HR operations.",
  },
  {
    id: "faq-02",
    question: "How does Siapdata protect our data?",
    answer:
      "We use enterprise-grade safeguards including encryption in transit and at rest, role-based access control, audit logs, and regular backups. Admins can set granular permissions so each user only sees what they should.",
  },
  {
    id: "faq-03",
    question: "Can Siapdata handle payroll and tax calculations?",
    answer:
      "Yes — Siapdata automates salary calculations, allowances, deductions and generates payslips. Tax rules and payroll settings are configurable to match your local regulations; we recommend validating complex tax scenarios with your accountant.",
  },
  {
    id: "faq-04",
    question: "How does attendance tracking work?",
    answer:
      "Employees can clock in/out via web or mobile. Siapdata supports manual corrections, shift scheduling, overtime calculation and keeps an audit trail for each attendance change to ensure transparency.",
  },
  {
    id: "faq-05",
    question: "Can I import existing employee data into Siapdata?",
    answer:
      "Yes — you can import employees, historical attendance and payroll data using CSV templates. We also offer migration assistance for larger or more complex datasets.",
  },
  {
    id: "faq-06",
    question: "Does Siapdata integrate with other systems?",
    answer:
      "Siapdata provides APIs and supports CSV export/import for interoperability. Common integrations (payroll providers, accounting systems, SSO, and HR tools) can be connected — contact us for custom integration options.",
  },
  {
    id: "faq-07",
    question: "How flexible are leave and approval workflows?",
    answer:
      "Very flexible — Siapdata supports configurable leave types, accrual rules, multi-level approval workflows, and automatic balance tracking so policies map to how your company actually operates.",
  },
  {
    id: "faq-08",
    question: "Can employees access their own information?",
    answer:
      "Yes. The self-service portal lets employees view and download payslips, request leave, update personal details, and track training or certification status — reducing HR workload and increasing transparency.",
  },
  {
    id: "faq-09",
    question: "What backup and data retention options are available?",
    answer:
      "We perform regular automated backups and provide export tools so you can archive or download your data. Retention settings are configurable to help meet your internal policy or regulatory needs.",
  },
  {
    id: "faq-10",
    question: "How do I get started or request a demo?",
    answer:
      "Contact our sales or support team to schedule a demo or trial. We offer onboarding assistance, documentation, and optional migration support to help you go live quickly and smoothly.",
  },
];

export default function Faq({ heading }: { heading: string }) {
  return (
    <section className="w-full flex justify-center px-10">
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="multiple">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="min-w-[90%]"
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
