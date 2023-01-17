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
              children: [],
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
              children: [],
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
              link: "#",
              children: [],
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
              children: [],
           },
        ],
        pagination: {
           current: 1,
           totalPagesCount: 5,
        },
     };

export default function MyProjectsPage({}) {
   const local = getLocale();

   const headers = [
      {
          name: "",
          toolTip: null,
          width: "40px"
      },
      {
          name: "Project",
          toolTip: null,
          width: "1fr"
      },
      {
          name: "Round",
          toolTip: null,
          width: "140px"
      },
      {
          name: "Pool",
          toolTip: null,
          width: "140px"
      },
      {
          name: "Price",
          toolTip: null,
          width: "140px"
      },
      {
          name: "Token",
          toolTip: null,
          width: "140px"
      },
      {
          name: "Status",
          toolTip: null,
          width: "140px"
      },
      {
          name: "Link",
          toolTip: null,
          width: "140px"
      }
  ];

  const dataToRows = (dataSet = []) => {

      const tmpRows = [];

      dataSet.forEach(dataItem => {
         tmpRows.push({
            cells: [
               {
                  value: dataItem.icon,
                  type: "img"
               },
               {
                   value: dataItem.name,
                   type: "text"
               },
               {
                   value: dataItem.round,
                   type: "text"
               },
              {
                  value: dataItem.pool,
                  type: "text"
              },
              {
                  value: dataItem.price,
                  type: "text"
              },
              {
                  value: dataItem.token,
                  type: "text"
              },
              {
                  value: dataItem.status,
                  type: "text"
              },
              {
                  value: dataItem.link,
                  type: "url"
              }
            ]
         })
      });

      return tmpRows;
  }

   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>{localize.header_title[local]}</PageHeader>
         <div className={my_project__layout}>
            <Table headers={headers} rows={dataToRows(data)} />
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
