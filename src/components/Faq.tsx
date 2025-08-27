import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { faqs } from "@/lib/dataFaq";

export default function Faq() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center px-10">
      <div className="container max-w-3xl">
        <Accordion type="multiple">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="min-w-[90%]"
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                {t(item.questionKey)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {t(item.answerKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
