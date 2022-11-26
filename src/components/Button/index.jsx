import classes from "./index.module.scss";

const {
   button,
   button_outline
} = classes;

export default function Button({ text, variant, href, onClick, type, className }) {

   let newClassName = button;

   newClassName += variant === "outline" ? " " + button_outline : "";

   newClassName += className ? " " + className : "";

   if (href) {
      return (
         <>
            <a href={href ? href : "#"} className={newClassName}>
               {text ? text : "Кнопка"}
            </a>
         </>
      );
   }
   else {
      return (
         <>
            <button type={type ? type : "button"} onClick={onClick} className={newClassName}>
               {text ? text : "Кнопка"}
            </button>
         </>
      );
   }
}
