import getLocale from "../../helpers/getLoacale";
import AccordionItem from "../AccordionItem";
import scss from "./index.module.scss";
import localize from "./local.json";

const { accordion, accordion__title, accordion__text } = scss;

function Accordion({ className }) {
   const local = getLocale();
   return (
      <section className={accordion + " " + className}>
         <h1 className={accordion__title}>FAQ</h1>
         <AccordionItem title={"1. How can I participate in IDO?"}>
            <div className={accordion__text} dangerouslySetInnerHTML={{ __html: localize.question_1[local] }}></div>
         </AccordionItem>
         <AccordionItem title={"2. What are the steps in IDO?"}>
            <div className={accordion__text} dangerouslySetInnerHTML={{ __html: localize.question_2[local] }}></div>
         </AccordionItem>
         <AccordionItem title={"3. What is First Come First Serve (FCFS)? Who can participate in it?"}>
            <div className={accordion__text} dangerouslySetInnerHTML={{ __html: localize.question_3[local] }}></div>
         </AccordionItem>
         <AccordionItem title={"4. Do I need to spread (unstake) / steak for each IDO?"}>
            <div className={accordion__text} dangerouslySetInnerHTML={{ __html: localize.question_4[local] }}></div>
         </AccordionItem>
         <AccordionItem title={"5. Can I shake (unstake) after each IDO?"}>
            <div className={accordion__text} dangerouslySetInnerHTML={{ __html: localize.question_5[local] }}></div>
         </AccordionItem>
      </section>
   );
}

export default Accordion;
