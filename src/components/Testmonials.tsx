import { useMediaQuery } from "react-responsive";
import { Card, CardContent, CardFooter } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

interface Author {
  name: string;
  position: string;
  avatar: string;
}

interface Testmony {
  author: Author;
  review: string;
}

const testmonials: Testmony[] = [
  {
    author: {
      name: "Andi Saputra",
      position: "HR Manager at PT. Sumber Jaya",
      avatar: "profiles/author-1.jpg",
    },
    review:
      "SiapData has significantly improved how we manage employee attendance across multiple branches. Before, we used manual input that often caused delays and errors, but now everything is tracked in real-time. The dashboard is clean and easy to use, even for non-technical staff.",
  },
  {
    author: {
      name: "Maya Rachman",
      position: "Payroll Lead at PT. Tunas Teknologi",
      avatar: "profiles/author-2.jpg",
    },
    review:
      "Payroll processing used to take days each month; with SiapData it's automated and reliable. Payslip generation and tax calculations are accurate and exportable — a huge time saver for our finance team.",
  },
  {
    author: {
      name: "Budi Hartono",
      position: "Operations Manager at CV. Merah Putih",
      avatar: "profiles/author-3.jpg",
    },
    review:
      "Attendance corrections and shift scheduling are so much easier now. The audit trails give us confidence when resolving discrepancies, and employees appreciate the transparency.",
  },
  {
    author: {
      name: "Siti Nurhaliza",
      position: "Training & Development Coordinator at PT. Agro Lestari",
      avatar: "profiles/author-4.jpg",
    },
    review:
      "Managing training sessions and tracking certifications used to be chaotic. SiapData's training module keeps records neat and notifies managers when certifications are due for renewal.",
  },
  {
    author: {
      name: "Rian Setiawan",
      position: "CEO at StartUp Lab",
      avatar: "profiles/author-5.jpg",
    },
    review:
      "We moved to SiapData during a rapid growth phase — onboarding was smooth and the system scaled with us. The insights from reporting helped us make better staffing decisions.",
  },
  {
    author: {
      name: "Lia Putri",
      position: "Office Manager at PT. Klinik Sehat",
      avatar: "profiles/author-6.jpg",
    },
    review:
      "The self-service portal reduced the number of routine HR inquiries dramatically. Staff can now download payslips and request leave without involving HR for every small task.",
  },
  {
    author: {
      name: "Agus Pratama",
      position: "Finance Director at PT. FastLog",
      avatar: "profiles/author-7.jpg",
    },
    review:
      "Integration with our accounting exports made reconciliation painless. The customizable payroll rules let us model complex pay structures without hacks.",
  },
  {
    author: {
      name: "Nadia Kartika",
      position: "People Ops Lead at BlueWave Co.",
      avatar: "profiles/author-8.jpg",
    },
    review:
      "Leave policies and multi-level approvals are flexible enough to match our company rules. The leave balance tracking is accurate and has reduced payroll surprises.",
  },
  {
    author: {
      name: "Fajar Nugroho",
      position: "CTO at PixelWorks",
      avatar: "profiles/author-9.jpg",
    },
    review:
      "As the person responsible for tooling, I appreciate SiapData's clean API and export features. It was straightforward to integrate with our single sign-on and internal dashboards.",
  },
  {
    author: {
      name: "Dewi Ananda",
      position: "Founder at Kreatif Studio",
      avatar: "profiles/author-10.jpg",
    },
    review:
      "SiapData gave us confidence to scale our people operations without hiring a large HR team. The reporting dashboards are concise and helped me understand workforce trends at a glance.",
  },
];

export default function Testmonials() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <Carousel
      className="mx-24"
      plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
    >
      <CarouselContent className="flex">
        {testmonials.map((t) => (
          <CarouselItem
            key={t.review}
            className={isDesktopOrLaptop ? "basis-1/3" : "basis-1/1"}
          >
            <Card>
              <CardContent className="min-h-[12rem]">{t.review}</CardContent>
              <CardFooter className="flex gap-8">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={t.author.avatar} />
                </Avatar>
                <div>
                  <p className="font-bold text-lg">{t.author.name}</p>
                  <p className="text-sm">{t.author.position}</p>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
