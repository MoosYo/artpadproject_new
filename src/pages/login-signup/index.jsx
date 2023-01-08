import classes from "./styles.module.scss";
import localize from "./local.json";

// Components
import Container from "../../components/Container";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";

const {
   block,
   block__container,
   block__header,
   block__headerButton,
   block__headerIndicator,
   block__tabsWrapper,
   block__tab,

   content__infoText,
   content__infoLink,
   content__form,
   content__formInput,
   content__formButton,
   content__formCheckbox,
   content__formCheckboxInput,
   content__formCheckboxText,
} = classes;

const { data } = window.initState
   ? window.initState
   : {
        data: "text",
     };

export default function LoginSignupPage(props) {
   const local = "ru-RU";

   const path = window.location.pathname;

   const [currentTab, setCurrentTab] = useState(path === "/sign-up" || path === "/sign-up/" ? 1 : 0);

   return (
      <div className={block}>
         <Container className={block__container}>
            <div className={block__header}>
               <button type="button" className={block__headerButton} onClick={() => setCurrentTab(0)}>
                  {localize.sign_in[local]}
               </button>
               <button type="button" className={block__headerButton} onClick={() => setCurrentTab(1)}>
                  {localize.sign_up[local]}
               </button>
               <div
                  className={block__headerIndicator}
                  style={{
                     transform: "translateX(" + currentTab * 100 + "%)",
                  }}
               />
            </div>
            <div className={block__tabsWrapper}>
               <div
                  className={block__tab}
                  style={{
                     transform: "translateX(-" + currentTab * 100 + "%)",
                     maxHeight: currentTab !== 0 ? "0px" : null,
                  }}
               >
                  <p className={content__infoText} dangerouslySetInnerHTML={{ __html: localize.info_text[local] }}></p>
                  <p className={content__infoLink}>
                     <a href="/">art-pad.io</a>
                  </p>
                  <form className={content__form} method="POST" action="/auth/login.php">
                     <Input
                        type="text"
                        name="login"
                        placeholder={localize.login[local]}
                        required="required"
                        className={content__formInput}
                     />

                     <Input
                        type="password"
                        name="password"
                        placeholder={localize.password[local]}
                        required="required"
                        className={content__formInput}
                     />

                     <Button type="submit" variant="solid" className={content__formButton}>
                        {localize.sign_in[local]}
                     </Button>
                  </form>
               </div>
               <div
                  className={block__tab}
                  style={{
                     transform: "translateX(-" + currentTab * 100 + "%)",
                     maxHeight: currentTab !== 1 ? "0px" : null,
                  }}
               >
                  <form className={content__form} method="post" action="/auth/register.php">
                     <Input
                        type="text"
                        name="login"
                        placeholder={localize.login[local]}
                        required="required"
                        className={content__formInput}
                     />

                     <Input
                        type="email"
                        name="email"
                        placeholder={localize.email[local]}
                        required="required"
                        className={content__formInput}
                     />

                     <Input
                        type="password"
                        name="password"
                        placeholder={localize.password[local]}
                        required="required"
                        className={content__formInput}
                     />

                     <Input
                        type="password"
                        name="confirm_password"
                        placeholder={localize.consfirm_password[local]}
                        required="required"
                        className={content__formInput}
                     />

                     <Button type="submit" variant="solid" className={content__formButton}>
                        {localize.sign_up[local]}
                     </Button>

                     <label className={content__formCheckbox}>
                        <Checkbox name="user-rules" className={content__formCheckboxInput} />
                        <span
                           className={content__formCheckboxText}
                           dangerouslySetInnerHTML={{ __html: localize.form_checkbox_text[local] }}
                        ></span>
                     </label>
                  </form>
               </div>
            </div>
         </Container>
      </div>
   );
}
