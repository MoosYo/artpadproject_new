import classes from "./styles.module.scss";
import localize from "./local.json";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";
import PageHeader from "../../components/PageHeader";
import React from "react";
import Pagination from "../../components/Pagination";

// Helpers
import getLocale from "../../helpers/getLoacale";

const { my_project__layout, table, table__header, table__title, table__body, table__row, table__cel } = classes;

let { data, pagination } = window.initState?.projects
   ? window.initState?.projects
   : {
        data: [
           {
              project: {
                 name: "ARTERY",
                 icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/11104.png",
              },
              round: "IDO",
              pool: "200$",
              price: "$0.01",
              token: "ARTR 20000",
              status: "Finished",
              link: "#",
           },
           {
              project: {
                 name: "EYWA",
                 icon: "https://forklog.com/wp-content/uploads/EYWA-min.png",
              },
              round: "SEED",
              pool: "2000$",
              price: "$0.06",
              token: "EWA 33333",
              status: "FSFC",
              link: "#",
           },
           {
              project: {
                 name: "ART Wallet",
                 icon: "https://cdn-images-1.medium.com/max/1200/1*KO-VZFZL_EhIaQMvW2aI5w.png",
              },
              round: "PRIVATE",
              pool: "0$",
              price: "$0.001",
              token: "ART",
              status: "Registration",
              link: "#",
           },
           {
              project: {
                 name: "ARTERY",
                 icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/11104.png",
              },
              round: "IDO",
              pool: "200$",
              price: "$0.01",
              token: "ARTR 20000",
              status: "Finished",
              link: "#",
           },
        ],
        pagination: {
           current: 1,
           totalPagesCount: 5,
        },
     };

export default function MyProjectsPage({}) {

   const local = getLocale();

   const thead = [
      { cname: localize.thead[local][0] },
      { cname: localize.thead[local][1] },
      { cname: localize.thead[local][2] },
      { cname: localize.thead[local][3] },
      { cname: localize.thead[local][4] },
      { cname: localize.thead[local][5] },
      { cname: localize.thead[local][6] },
   ];
   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>{localize.header_title[local]}</PageHeader>
         <div className={my_project__layout}>
            <div className={table}>
               <div className={table__header}>
                  {thead.map(({ cname }, key) => (
                     <span className={table__title} key={key}>
                        {cname}
                     </span>
                  ))}
               </div>
               <div className={table__body}>
                  {data.map(({ project, round, pool, price, token, status, link }, key) => (
                     <div className={table__row} key={key}>
                        <div className={table__cel}>
                           <img src={project.icon} alt="" />
                           <span>{project.name}</span>
                        </div>
                        <span>{round}</span>
                        <span>{pool}</span>
                        <span>{price}</span>
                        <span>{token}</span>
                        <span>{status}</span>
                        <span>
                           <a href={link}>{localize.click[local]}</a>
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {pagination.totalPagesCount > 1 ? (
            <Pagination
               curentPage={pagination.current}
               totalPages={pagination.totalPagesCount}
               href="/profile/my-projects"
            />
         ) : (
            ""
         )}
      </>
   );
}
