import FeatureCarousel from "@/components/FeatureCarousel";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";

export default function About() {
  const h2Style =
    "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0";
  return (
    <div className="min-h-[100vh] text-black flex flex-col w-full px-[20%] gap-[5rem] mb-[10rem]">
      <h1 className="font-hero text-[8rem] mt-20 text-center">SiapData</h1>
      <ScreenshotCarousel />

      <section>
        <h2 className={h2Style}>About SiapData</h2>
        <p>
          At Siapdata, we believe managing your workforce should be simple,
          transparent, and effective. That’s why we’ve built a modern HRMS/HRIS
          solution designed to streamline your HR processes and empower both
          employees and organizations. Whether you’re a growing startup or an
          established enterprise, Siapdata gives you the tools you need to
          manage your people with confidence.
        </p>
      </section>
      <section>
        <h2 className={h2Style}>What is Siapdata?</h2>
        <p>
          Siapdata is an all-in-one Human Resource Management System that
          centralizes employee data, automates repetitive tasks, and provides
          insights that help businesses thrive. From tracking attendance to
          managing payroll, our platform ensures that your HR operations run
          seamlessly—so you can focus on what matters most: your people.
        </p>
      </section>
      <section>
        <h2 className={`text-center mt-[10rem] mb-10 ${h2Style}`}>
          Key Features
        </h2>
        <FeatureCarousel />
      </section>
      <section>
        <h2 className={h2Style}>Why Choose Siapdata?</h2>
        Efficiency – Reduce manual HR tasks and streamline your processes.
        Transparency – Empower employees with access to their own data.
        Scalability – Flexible enough to support businesses of all sizes.
        Security – Your workforce data is protected with top-level security
        standards.
      </section>
      <section>
        <h2 className={h2Style}>Our Mission</h2>
        To make HR management smarter, simpler, and more human—helping
        businesses unlock the full potential of their workforce.
      </section>
    </div>
  );
}
