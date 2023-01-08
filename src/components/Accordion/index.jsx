import AccordionItem from "../AccordionItem";
import scss from "./index.module.scss";

const { accordion, accordion__title } = scss;

function Accordion({ className }) {
   return (
      <section className={accordion + " " + className}>
         <h1 className={accordion__title}>FAQ</h1>
         <AccordionItem title={"How can I participate in IDO?"}>
            <p>
               Read the full guide in our official documentation 1. Register in your personal account 2. Top up the Main
               $ARTR wallet with the required number of coins through the Buy ARTR section 3. Go to the Levels page 4.
               Send the required amount of $ARTR to Staking to get one of the levels. You can see the required amount
               for staking in the list of levels, as well as the terms of placement and conditions for them. 5. Register
               for the IDO you want to participate in. The IDO registration period usually starts 72 hours before the
               start of IDO, you need to open the Projects page and click the “Register” button in the IDO pool card.
            </p>
         </AccordionItem>
         <AccordionItem title={"How can I participate in IDO?"}>
            <p>
               Read the full guide in our official documentation 1. Register in your personal account 2. Top up the Main
               $ARTR wallet with the required number of coins through the Buy ARTR section 3. Go to the Levels page 4.
               Send the required amount of $ARTR to Staking to get one of the levels. You can see the required amount
               for staking in the list of levels, as well as the terms of placement and conditions for them. 5. Register
               for the IDO you want to participate in. The IDO registration period usually starts 72 hours before the
               start of IDO, you need to open the Projects page and click the “Register” button in the IDO pool card.
            </p>
         </AccordionItem>
      </section>
   );
}

export default Accordion;
