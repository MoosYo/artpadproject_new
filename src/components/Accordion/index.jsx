import AccordionItem from "../AccordionItem";
import scss from "./index.module.scss";

const { accordion, accordion__title, accordion__text } = scss;

const faq = window.initState?.faq ? window.initState.faq : [
   {
      title: "How can I participate in IDO?",
      content: "<p><a href=\"#\">Read the full guide in our official documentation</a><br /><br />"+
               "1. Register in your personal account<br />" +
               "2. Top up the Main $ARTR wallet with the required number of coins through the Buy <a href=\"#\">ARTR</a> section<br />" +
               "3. Go to the Levels page<br />" +
               "4. Send the required amount of $ARTR to Staking to get one of the <a href=\"/levels/\">levels</a>. You can see the required amount for staking in the list of levels, as well as the terms of placement and conditions for them.<br />" +
               "5. Register for the IDO you want to participate in. The IDO registration period usually starts 72 hours before the start of IDO, you need to open the <a href=\"/projects/\">Projects</a> page and click the “Register” button in the IDO pool card.</p>"
   },
   {
      title: "How can I participate in IDO?",
      content: "<p><a href=\"#\">Read the full guide in our official documentation</a><br /><br />"+
               "1. Register in your personal account<br />" +
               "2. Top up the Main $ARTR wallet with the required number of coins through the Buy <a href=\"#\">ARTR</a> section<br />" +
               "3. Go to the Levels page<br />" +
               "4. Send the required amount of $ARTR to Staking to get one of the <a href=\"/levels/\">levels</a>. You can see the required amount for staking in the list of levels, as well as the terms of placement and conditions for them.<br />" +
               "5. Register for the IDO you want to participate in. The IDO registration period usually starts 72 hours before the start of IDO, you need to open the <a href=\"/projects/\">Projects</a> page and click the “Register” button in the IDO pool card.</p>"
   },
   {
      title: "How can I participate in IDO?",
      content: "<p><a href=\"#\">Read the full guide in our official documentation</a><br /><br />"+
               "1. Register in your personal account<br />" +
               "2. Top up the Main $ARTR wallet with the required number of coins through the Buy <a href=\"#\">ARTR</a> section<br />" +
               "3. Go to the Levels page<br />" +
               "4. Send the required amount of $ARTR to Staking to get one of the <a href=\"/levels/\">levels</a>. You can see the required amount for staking in the list of levels, as well as the terms of placement and conditions for them.<br />" +
               "5. Register for the IDO you want to participate in. The IDO registration period usually starts 72 hours before the start of IDO, you need to open the <a href=\"/projects/\">Projects</a> page and click the “Register” button in the IDO pool card.</p>"
   }
   ]
;

function Accordion({ className }) {
   return (
      <section className={accordion + " " + className}>
         <h1 className={accordion__title}>FAQ</h1>
         {
            faq.map((item, i) => (
               <AccordionItem title={(i + 1) + ".   " + item.title} key={i}>
                  <div className={accordion__text} dangerouslySetInnerHTML={{ __html: item.content }}></div>
               </AccordionItem>
            ))
         }
      </section>
   );
}

export default Accordion;
