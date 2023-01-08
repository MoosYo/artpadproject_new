import classes from "./index.module.scss";
const {
   table,
   table__header,
   table__title,
   table__body,
   table__row,
   table__cel,
   description,
   description__title,
   description__text,
} = classes;

function Table({ columnNames, rowsData, linkName = "Click", type = "base" }) {
   const getCels = (row) => {
      let celsCount = Object.keys(row).length;
      let celsName = Object.keys(row).splice(3, celsCount - 1);
      return { celsCount, celsName };
   };

   const getElement = (type, cel, key) => {
      switch (type) {
         case "link":
            return (
               <span key={key}>
                  <a href={cel} target="_blank" rel="noopener noreferrer">
                     {linkName}
                  </a>
               </span>
            );

         default:
            return <span key={key}>{cel}</span>;
      }
   };

   return (
      <div className={table}>
         <div className={table__header}>
            {columnNames?.map(({ celName, celDescription }, key) => (
               <div key={key}>
                  <span className={table__title}>{celName}</span>
                  {celDescription !== "" ? (
                     <div className={description}>
                        <h3 className={description__title}>{celDescription?.title}</h3>
                        <p className={description__text}>{celDescription?.text}</p>
                     </div>
                  ) : null}
               </div>
            ))}
         </div>
         <div className={table__body}>
            {rowsData?.map((row) => (
               <div className={table__row} key={row?.id}>
                  {type === "whisIcon" ? (
                     <>
                        <div className={table__cel}>
                           {row.icon ? <img src={row.icon} alt="" /> : null}
                           {row.name ? <span>{row.name}</span> : null}
                        </div>

                        {getCels(row).celsName.map((cel, key) => getElement(cel, row[cel], key))}
                     </>
                  ) : (
                     getCels(row).celsName.map((cel, key) => getElement(cel, row[cel], key))
                  )}
               </div>
            ))}
         </div>
      </div>
   );
}

export default Table;
