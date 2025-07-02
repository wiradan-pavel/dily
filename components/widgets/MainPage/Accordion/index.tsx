import { AccordionText } from "@/components/shared";

import data from "@/public/data/pages/main.json";

import style from "./style.module.scss";

const Accordion = () => {
  const accordionData = data.accordion;

  return (
    <section className={style.accordion}>
      <div className="container">
        <AccordionText
          textShow={accordionData.textShow}
          textHidden={accordionData.textHidden}
        />
      </div>
    </section>
  );
};

export default Accordion;
