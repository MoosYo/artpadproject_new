import classes from "./styles.module.scss";
import localize from "./local.json";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";
import PageHeader from "../../components/PageHeader";
import React from "react";
import Pagination from "../../components/Pagination";
import { type } from "@testing-library/user-event/dist/type";
import Table from "../../components/Table";

// Helpers
import getLocale from "../../helpers/getLoacale";

const { my_project__layout, table, table__header, table__title, table__body, table__row, table__cel } = classes;

let { data, pagination } = window.initState?.projects
   ? window.initState?.projects
   : {
        data: [
           {
              id: 1,
              name: "ARTERY",
              icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/11104.png",
              round: "IDO",
              pool: "200$",
              price: "$0.01",
              token: "ARTR 20000",
              status: "Finished",
              link: "#",
           },
           {
              id: 2,
              name: "EYWA",
              icon: "https://forklog.com/wp-content/uploads/EYWA-min.png",
              round: "SEED",
              pool: "2000$",
              price: "$0.06",
              token: "EWA 33333",
              status: "FSFC",
              link: "#",
           },
           {
              id: 3,
              name: "ART Wallet",
              icon: "https://cdn-images-1.medium.com/max/1200/1*KO-VZFZL_EhIaQMvW2aI5w.png",
              round: "PRIVATE",
              pool: "0$",
              price: "$0.001",
              token: "ART",
              status: "Registration",
              //   link: "#",
              children: [
                 {
                    id: 4,
                    name: "ARTERY",
                    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/11104.png",
                    round: "IDO",
                    pool: "200$",
                    price: "$0.01",
                    token: "ARTR 20000",
                    status: "Finished",
                    link: "#",
                 },
                 {
                    id: 4,
                    name: "ARTERY",
                    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/11104.png",
                    round: "IDO",
                    pool: "200$",
                    price: "$0.01",
                    token: "ARTR 20000",
                    status: "Finished",
                    link: "#",
                 },
              ],
           },
           {
              id: 4,
              name: "ARTERY",
              icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/11104.png",
              round: "IDO",
              pool: "200$",
              price: "$0.01",
              token: "ARTR 20000",
              status: "Finished",
              //   link: "#",
              children: [
                 {
                    id: 4,
                    name: "ARTERY",
                    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/11104.png",
                    round: "IDO",
                    pool: "200$",
                    price: "$0.01",
                    token: "ARTR 20000",
                    status: "Finished",
                    link: "#",
                 },
                 {
                    id: 4,
                    name: "ARTERY",
                    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/11104.png",
                    round: "IDO",
                    pool: "200$",
                    price: "$0.01",
                    token: "ARTR 20000",
                    status: "Finished",
                    link: "#",
                 },
              ],
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
      {
         celName: localize.thead[local][0],
         celDescription: {},
      },
      {
         celName: localize.thead[local][1],
         celDescription: {},
      },
      {
         celName: localize.thead[local][2],
         celDescription: {},
      },
      {
         celName: localize.thead[local][3],
         celDescription: {},
      },
      {
         celName: localize.thead[local][4],
         celDescription: {},
      },
      {
         celName: localize.thead[local][5],
         celDescription: {},
      },
      {
         celName: localize.thead[local][6],
         celDescription: {},
      },
   ];

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>{localize.header_title[local]}</PageHeader>
         <div className={my_project__layout}>
            <Table columnNames={thead} rowsData={data} type={"withIcon"} />
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
