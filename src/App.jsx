import { useEffect, useState } from "react";
import classes from "./App.module.scss";
import Footer from "./components/Footer";

// Components
import Header from "./components/Header";
import Modal from "./components/Modal";

// Pages
import ProjectPage from "./pages/project";
import ProfilePage from "./pages/profile";
import SteakingPage from "./pages/steaking";
import TeamPage from "./pages/team";
import MyProjectsPage from "./pages/my-projects";
import LoginSignupPage from "./pages/login-signup";
import Marketplace from "./pages/nft-marketplace";
import Accordion from "./components/Accordion";
import MainPage from "./pages/main";

const { app, pageWrapper } = classes;

export default function App() {
   const path = window.location.pathname;

   const [modalContent, setModalContent] = useState({
      shown: false,
      content: null,
   });

   const onModalClose = () => {
      setModalContent({
         shown: false,
         content: modalContent.content,
      });
   };

   const showModal = (content) => {
      setModalContent({
         shown: true,
         content,
      });
   };

   useEffect(() => {
      if (!modalContent.shown && modalContent.content) {
         const timer = setTimeout(() => {
            setModalContent({
               shown: false,
               content: null,
            });
            clearTimeout(timer);
         }, 500);
      }
   }, [modalContent]);

   const ModalContent = (props) => modalContent.content(props);
   return (
      <div className={app}>
         <Header setModal={showModal} />
         <main className={pageWrapper}>
            {path === "/" || path === "" ? <MainPage setModal={showModal} /> : ""}
            {path === "/nft-marketplace" || path === "/nft-marketplace/" ? <Marketplace /> : ""}
            {path === "/faq" || path === "/faq/" ? <Accordion /> : ""}
            {path === "/profile" || path === "/profile/" ? <ProfilePage /> : ""}
            {path === "/profile/staking" || path === "/profile/staking/" ? <SteakingPage /> : ""}
            {path === "/profile/team" || path === "/profile/team/" ? <TeamPage setModal={showModal} /> : ""}
            {path === "/profile/my-projects" || path === "/profile/my-projects/" ? <MyProjectsPage /> : ""}
            {path === "/sign-in" || path === "/sign-in/" || path === "/sign-up" || path === "/sign-up/" ? (
               <LoginSignupPage />
            ) : (
               ""
            )}
            {path.match(/^\/projects\/.*$/) ? <ProjectPage /> : ""}
         </main>
         <Footer />

         <Modal shown={modalContent.shown} onClose={onModalClose}>
            <ModalContent onClose={onModalClose} />
         </Modal>
      </div>
   );
}
