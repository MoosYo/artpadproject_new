import classes from "./index.module.scss";

const { button, button_outline, button_grey } = classes;

export default function Button({ children, variant, href, onClick, type, className }) {
   let newClassName = button;

   newClassName += variant ? " " + classes["button_" + variant] : "";

   newClassName += className ? " " + className : "";

   if (href) {
      if (variant === "grey") {
         return (
            <>
               <a href={href ? href : "#"} className={newClassName}>
                  {children ? children : "Кнопка"}
               </a>
            </>
         );
      }
      return (
         <>
            <a href={href ? href : "#"} className={newClassName}>
               {children ? children : "Кнопка"}
            </a>
         </>
      );
   } else {
      return (
         <>
            <button type={type ? type : "button"} onClick={onClick} className={newClassName}>
               {children ? children : "Кнопка"}
            </button>
         </>
      );
   }
}
