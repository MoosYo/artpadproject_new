import React from "react";
import classes from "./index.module.scss";
const { table, table__row, table__row_names, table__cel, table__cel_padl, table__children, table__cel_children } =
   classes;

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
         {rows.map((row, key) =>
            row?.children && row?.children.length > 0 ? (
               <details key={row?.id}>
                  <summary className={table__row}>
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
                              ) : item !== "children" ? (
                                 <div key={key} className={table__cel_padl}>
                                    <span className={table__cel}>{row[item]}</span>
                                 </div>
                              ) : item === "children" && row[item].length > 0 ? (
                                 <div key={key} className={table__cel_padl}>
                                    <span className={table__cel}>{row[item].length}</span>
                                 </div>
                              ) : null
                           )}
                        </>
                     ) : (
                        keys.map((item, key) => (
                           <div key={key}>
                              <span className={table__cel}>{item}</span>
                           </div>
                        ))
                     )}
                  </summary>
                  {row?.children ? (
                     <div className={table__children} key={row?.id}>
                        {row?.children.map((row_cl, key) => (
                           <div className={table__row} key={key}>
                              {row_cl?.icon ? (
                                 <div key={toString(key)}>
                                    <span className={table__cel}>
                                       <img src={row_cl?.icon} alt={row_cl?.name} width="32px" height="32px" />
                                       {row_cl?.name}
                                    </span>
                                 </div>
                              ) : (
                                 <div key={toString(key)}>
                                    <span className={table__cel}>{row_cl?.name}</span>
                                 </div>
                              )}
                              {keys.map((item, key) =>
                                 item !== "children" ? (
                                    <>
                                       <div key={key} className={table__cel_padl}>
                                          <span className={table__cel + " " + table__cel_children}>{row_cl[item]}</span>
                                       </div>
                                    </>
                                 ) : (
                                    <div key={key} className={table__cel_padl}>
                                       <span className={table__cel + " " + table__cel_children}>{row_cl[item]}</span>
                                    </div>
                                 )
                              )}
                           </div>
                        ))}
                     </div>
                  ) : null}
               </details>
            ) : (
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
                           ) : item !== "children" ? (
                              <div key={key} className={table__cel_padl}>
                                 <span className={table__cel}>{row[item]}</span>
                              </div>
                           ) : item !== "children" ? (
                              <div key={key} className={table__cel_padl}>
                                 <span className={table__cel}>{row[item]}</span>
                              </div>
                           ) : item === "children" && row[item].length > 0 ? (
                              <div key={key} className={table__cel_padl}>
                                 <span className={table__cel}>Open</span>
                              </div>
                           ) : null
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
            )
         )}
      </section>
   );
}

export default React.memo(Table);
