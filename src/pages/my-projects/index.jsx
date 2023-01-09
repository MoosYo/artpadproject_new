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

const { my_project__layout } = classes;

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
         celName: "Project",
         celDescription: {},
      },
      {
         celName: "Round",
         celDescription: {},
      },
      {
         celName: "Pool",
         celDescription: {},
      },
      {
         celName: "Price",
         celDescription: {},
      },
      {
         celName: "Token",
         celDescription: {},
      },
      {
         celName: "Status",
         celDescription: {},
      },
      {
         celName: "Link",
         celDescription: {},
      },
   ];

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>{localize.header_title[local]}</PageHeader>
         <div className={my_project__layout}>
            <Table columns={thead} rows={data} keys={Object.keys(data[0]).splice(3, 7)} />
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
