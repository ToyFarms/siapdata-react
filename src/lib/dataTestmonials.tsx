export interface Author {
  name: string;
  position: string;
  positionKey: string;
  avatar: string;
}

export interface Testmony {
  author: Author;
  review: string;
  reviewKey: string;
}
export const testmonials: Testmony[] = [
  {
    author: {
      name: "Andi Saputra",
      position: "HR Manager at PT. Sumber Jaya",
      positionKey: "tm.andi-saputra.author.position",
      avatar: "profiles/author-1.jpg",
    },
    review:
      "SiapData has significantly improved how we manage employee attendance across multiple branches. Before, we used manual input that often caused delays and errors, but now everything is tracked in real-time. The dashboard is clean and easy to use, even for non-technical staff.",
    reviewKey: "tm.andi-saputra.review",
  },
  {
    author: {
      name: "Maya Rachman",
      position: "Payroll Lead at PT. Tunas Teknologi",
      positionKey: "tm.maya-rachman.author.position",
      avatar: "profiles/author-2.jpg",
    },
    review:
      "Payroll processing used to take days each month; with SiapData it's automated and reliable. Payslip generation and tax calculations are accurate and exportable — a huge time saver for our finance team.",
    reviewKey: "tm.maya-rachman.review",
  },
  {
    author: {
      name: "Budi Hartono",
      position: "Operations Manager at CV. Merah Putih",
      positionKey: "tm.budi-hartono.author.position",
      avatar: "profiles/author-3.jpg",
    },
    review:
      "Attendance corrections and shift scheduling are so much easier now. The audit trails give us confidence when resolving discrepancies, and employees appreciate the transparency.",
    reviewKey: "tm.budi-hartono.review",
  },
  {
    author: {
      name: "Siti Nurhaliza",
      position: "Training & Development Coordinator at PT. Agro Lestari",
      positionKey: "tm.siti-nurhaliza.author.position",
      avatar: "profiles/author-4.jpg",
    },
    review:
      "Managing training sessions and tracking certifications used to be chaotic. SiapData's training module keeps records neat and notifies managers when certifications are due for renewal.",
    reviewKey: "tm.siti-nurhaliza.review",
  },
  {
    author: {
      name: "Rian Setiawan",
      position: "CEO at StartUp Lab",
      positionKey: "tm.rian-setiawan.author.position",
      avatar: "profiles/author-5.jpg",
    },
    review:
      "We moved to SiapData during a rapid growth phase — onboarding was smooth and the system scaled with us. The insights from reporting helped us make better staffing decisions.",
    reviewKey: "tm.rian-setiawan.review",
  },
  {
    author: {
      name: "Lia Putri",
      position: "Office Manager at PT. Klinik Sehat",
      positionKey: "tm.lia-putri.author.position",
      avatar: "profiles/author-6.jpg",
    },
    review:
      "The self-service portal reduced the number of routine HR inquiries dramatically. Staff can now download payslips and request leave without involving HR for every small task.",
    reviewKey: "tm.lia-putri.review",
  },
  {
    author: {
      name: "Agus Pratama",
      position: "Finance Director at PT. FastLog",
      positionKey: "tm.agus-pratama.author.position",
      avatar: "profiles/author-7.jpg",
    },
    review:
      "Integration with our accounting exports made reconciliation painless. The customizable payroll rules let us model complex pay structures without hacks.",
    reviewKey: "tm.agus-pratama.review",
  },
  {
    author: {
      name: "Nadia Kartika",
      position: "People Ops Lead at BlueWave Co.",
      positionKey: "tm.nadia-kartika.author.position",
      avatar: "profiles/author-8.jpg",
    },
    review:
      "Leave policies and multi-level approvals are flexible enough to match our company rules. The leave balance tracking is accurate and has reduced payroll surprises.",
    reviewKey: "tm.nadia-kartika.review",
  },
  {
    author: {
      name: "Fajar Nugroho",
      position: "CTO at PixelWorks",
      positionKey: "tm.fajar-nugroho.author.position",
      avatar: "profiles/author-9.jpg",
    },
    review:
      "As the person responsible for tooling, I appreciate SiapData's clean API and export features. It was straightforward to integrate with our single sign-on and internal dashboards.",
    reviewKey: "tm.fajar-nugroho.review",
  },
  {
    author: {
      name: "Dewi Ananda",
      position: "Founder at Kreatif Studio",
      positionKey: "tm.dewi-ananda.author.position",
      avatar: "profiles/author-10.jpg",
    },
    review:
      "SiapData gave us confidence to scale our people operations without hiring a large HR team. The reporting dashboards are concise and helped me understand workforce trends at a glance.",
    reviewKey: "tm.dewi-ananda.review",
  },
];
