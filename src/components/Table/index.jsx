import React from "react";
import classes from "./index.module.scss";
const { table, table__row, table__row_names, table__cel, table__cel_padl } = classes;

function Table({ columns, rows, keys }) {
   console.log(columns, rows, keys);
   return (
      <section className={table}>
         <div className={table__row + " " + table__row_names}>
            {columns.map((item, key) => (
               <div key={key}>
                  <span className={table__cel}>{item?.celName}</span>
               </div>
            ))}
         </div>
         {rows.map((row, key) => (
            <div className={table__row} key={row?.id}>
               {row?.icon ? (
                  <>
                     <div key={toString(key)}>
                        <span className={table__cel}>
                           <img src={row?.icon} alt={row?.nsme} width="32px" height="32px" />
                           {row?.name}
                        </span>
                     </div>
                     {keys.map((item, key) =>
                        item === "link" ? (
                           <div key={key}>
                              <a
                                 className={table__cel}
                                 href={row[item]}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 title={item}
                              >
                                 Click
                              </a>
                           </div>
                        ) : (
                           <div key={key} className={table__cel_padl}>
                              <span className={table__cel}>{row[item]}</span>
                           </div>
                        )
                     )}
                  </>
               ) : (
                  keys.map((item, key) => (
                     <div key={key}>
                        <span className={table__cel}>{item}</span>
                     </div>
                  ))
               )}
            </div>
         ))}
      </section>
   );
}

export default React.memo(Table);
