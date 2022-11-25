import classes from "./index.module.scss";

const { button_link } = classes;

export default function ButtonLink({ text, href, className }) {
   return (
      <>
         <a href={href ? href : "#"} className={button_link ? button_link + " " + className : button_link}>
            {text ? text : "Кнопка-ссылка"}
         </a>
      </>
   );
}
