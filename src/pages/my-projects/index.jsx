import classes from "./styles.module.scss";

// Components
import Tabs from "../../components/Tabs";

// Data
import profileRoutes from "../../routes/profile";
import PageHeader from "../../components/PageHeader";

const { my_project__layout, table, table__header, table__title, table__body, table__row } = classes;

const { data } = window.initState
   ? window.initState
   : {
        data: [
           {
              project: {
                 name: "ARTERY",
                 icon: "",
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
                 icon: "",
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
                 icon: "",
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
                 icon: "",
              },
              round: "IDO",
              pool: "200$",
              price: "$0.01",
              token: "ARTR 20000",
              status: "Finished",
              link: "#",
           },
        ],
     };

export default function MyProjectsPage(props) {
   const thead = [
      { cname: "Project" },
      { cname: "Round" },
      { cname: "Pool" },
      { cname: "Price" },
      { cname: "Token" },
      { cname: "Status" },
      { cname: "Link" },
   ];
   return (
      <>
         <Tabs tabs={profileRoutes} />
         <PageHeader>My Project</PageHeader>
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
                        <span>{project.name}</span>
                        <span>{round}</span>
                        <span>{pool}</span>
                        <span>{price}</span>
                        <span>{token}</span>
                        <span>{status}</span>
                        <span>
                           <a href={link}>Click</a>
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}
