import {
  Database,
  DollarSign,
  Clock,
  Calendar,
  Award,
  BookOpen,
  Smartphone,
  BarChart2,
  ShieldCheck,
} from "lucide-react";

const size = 32;
export const features = [
  {
    icon: <Database size={size} />, title: "Employee Database", description:
      "A secure and centralized hub for storing employee details, contracts, and essential documents.",
    depth:
      "A single source of truth for every employee profile: personal details, employment history, contract files, emergency contacts, and role-specific metadata. Advanced search and filtering let HR find records quickly, while versioned document storage and audit trails ensure changes are transparent. Custom fields and tagging let you adapt the schema to your org without hardcoding changes.",
  },
  {
    icon: <DollarSign size={size} />,
    title: "Payroll Management",
    description:
      "Automate salary processing, handle tax deductions, and generate payslips in just a few clicks.",
    depth:
      "A configurable payroll engine that calculates gross-to-net pay, applies allowances, deductions and tax rules, and produces downloadable payslips. Supports recurring payroll runs, pro-rated payments, adjustments, and batch exports for accounting systems. Built-in audit logs and exportable reports make compliance and reconciliation straightforward for finance teams.",
  },
  {
    icon: <Clock size={size} />,
    title: "Attendance Tracking",
    description:
      "Monitor clock-ins/clock-outs, overtime, and leave requests with ease.",
    depth:
      "Flexible attendance collection via web and mobile clock-ins, with support for shift patterns, flexible hours and overtime rules. The system records corrections and exceptions with an audit trail, lets managers approve time adjustments, and computes worked hours automatically for payroll. Dashboard views surface tardiness, absenteeism and trend patterns so you can act before issues escalate.",
  },
  {
    icon: <Calendar size={size} />,
    title: "Leave Management",
    description:
      "Simplify how employees request leave and how managers approve and track balances.",
    depth:
      "Configurable leave types, accrual policies, carryovers and blackout periods let you model real company rules. Employees submit requests through the portal, managers approve via multi-level workflows, and balances update automatically. Calendars and notifications keep teams aligned and reduce manual tracking or spreadsheet dependency.",
  },
  {
    icon: <Award size={size} />,
    title: "Performance Management",
    description:
      "Set clear goals, conduct fair assessments, and track development progress.",
    depth:
      "Support for goal-setting frameworks (OKRs/KPIs), periodic performance reviews, 360° feedback and rating rubrics to ensure consistent assessments. Track progress against goals, document review notes and create personalized development plans. Reporting helps HR spot high performers, skills gaps and calibration discrepancies across teams.",
  },
  {
    icon: <BookOpen size={size} />,
    title: "Training & Development",
    description:
      "Manage training schedules, certifications, and employee upskilling programs.",
    depth:
      "Create and manage training courses, enroll employees, and track completion and certification statuses. Automated reminders alert managers and staff when certifications are due for renewal. Learning paths and completion reports help you measure skill growth and link training outcomes to performance objectives.",
  },
  {
    icon: <Smartphone size={size} />,
    title: "Self-Service Portal",
    description:
      "Give employees access to their own data, payslips, and leave requests—anytime, anywhere.",
    depth:
      "A responsive portal where employees can view and update personal information, download payslips, submit leave requests, and track approvals. Push notifications and email alerts keep users informed of status changes. Role-aware UI and permission controls ensure employees only access appropriate data, reducing routine HR enquiries.",
  },
  {
    icon: <BarChart2 size={size} />,
    title: "Reporting & Analytics",
    description:
      "Generate insightful, customizable reports to guide data-driven HR decisions.",
    depth:
      "Custom dashboards and pre-built reports surface key workforce metrics—headcount, turnover, attendance trends, leave utilization and payroll summaries. Filters, scheduled exports and CSV/PDF outputs let teams slice data for finance, leadership and compliance needs. Use trend analysis to forecast hiring needs and spot systemic HR issues early.",
  },
  {
    icon: <ShieldCheck size={size} />,
    title: "Secure & Scalable",
    description:
      "Built with enterprise-grade security and designed to grow with your organization.",
    depth:
      "Role-based access control, encrypted data storage and transport, audit logging and regular backups form the foundation of our security model. The platform supports single sign-on (SSO) and API access for integrations, and is architected to scale with your user base and data volume. Administrative controls let you configure retention and compliance settings to match company policies.",
  },
];
