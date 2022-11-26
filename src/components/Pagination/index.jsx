import Arrow from "../Icons/arrow";
import classes from "./index.module.scss";

const { pagination, pagination__item, pagination__arrow, pagination__arrow_left, pagination__arrow_right } = classes;

function Pagination({ curentPage, totalPages, href, className }) {
   return (
      <ul className={pagination + " " + className}>
         <li className={pagination__item}>
            <a
               href={href + "?page=" + (curentPage > 1 ? curentPage - 1 : 1)}
               className={pagination__arrow + " " + pagination__arrow_left}
            >
               <Arrow className={pagination__arrow} />
            </a>
         </li>
         {curentPage > 2 ? (
            <li className={pagination__item}>
               <a href={href + "?page=1"} className="pagination__link">
                  1
               </a>
            </li>
         ) : null}

         {curentPage > 3 ? (
            <li className={pagination__item}>
               <span>...</span>
            </li>
         ) : null}

         {curentPage > 1 ? (
            <li className={pagination__item}>
               <a href={href + "?page=" + (curentPage - 1)} className="pagination__link">
                  {curentPage - 1}
               </a>
            </li>
         ) : null}

         {(curentPage > 1 && curentPage <= totalPages - 1) || curentPage === 1 || curentPage === totalPages ? (
            <li className={pagination__item}>
               <a href={href + "?page=" + curentPage} className="pagination__link">
                  {curentPage}
               </a>
            </li>
         ) : null}

         {curentPage <= totalPages - 1 ? (
            <li className={pagination__item}>
               <a href={href + "?page=" + (curentPage + 1)} className="pagination__link">
                  {curentPage + 1}
               </a>
            </li>
         ) : null}

         {curentPage <= totalPages - 3 ? (
            <li className={pagination__item}>
               <span>...</span>
            </li>
         ) : null}

         {curentPage <= totalPages - 2 ? (
            <li className={pagination__item}>
               <a href={href + "?page=" + totalPages} className="pagination__link">
                  {totalPages}
               </a>
            </li>
         ) : null}
         <li className={pagination__item}>
            <a
               href={href + "?page=" + (curentPage < totalPages ? curentPage + 1 : curentPage)}
               className={pagination__arrow + " " + pagination__arrow_right}
            >
               <Arrow className={pagination__arrow} />
            </a>
         </li>
      </ul>
   );
}

export default Pagination;
