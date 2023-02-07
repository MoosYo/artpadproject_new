import classes from "./index.module.scss";

const { button, button_outline, button_grey } = classes;

export default function Button({ style = {}, children, variant, href, onClick, type, className, disabled = false }) {
   let newClassName = button;

   newClassName += variant ? " " + classes["button_" + variant] : "";

   newClassName += className ? " " + className : "";

   if (href) {
      if (variant === "grey") {
         return (
            <>
               <a href={href ? href : "#"} className={newClassName} style={style}>
                  {children ? children : "Кнопка"}
               </a>
            </>
         );
      }
      return (
         <>
            <a href={href ? href : "#"} className={newClassName} style={style}>
               {children ? children : "Кнопка"}
            </a>
         </>
      );
   } else {
      return (
         <>
            <button
               disabled={disabled ? "disabled" : null}
               type={type ? type : "button"}
               onClick={onClick}
               className={newClassName}
               style={style}
            >
               {children ? children : "Кнопка"}
            </button>
         </>
      );
   }
}
