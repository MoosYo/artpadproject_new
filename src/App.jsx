import { useEffect, useState } from "react";
import classes from "./App.module.scss";
import Footer from "./components/Footer";

// Components
import Header from './components/Header';
import Modal from "./components/Modal";
import MyProjectsPage from './pages/my-projects';

// Pages
import ProfilePage from './pages/profile';
import SteakingPage from './pages/steaking';
import TeamPage from './pages/team';

const {
  app,
  pageWrapper
} = classes;

export default function App() {
  const path = window.location.pathname;

  const [modalContent, setModalContent] = useState({
    shown: false,
    content: null
  });

  const onModalClose = () => {
    setModalContent({
      shown: false,
      content: modalContent.content
    });
  }

  const showModal = (content) => {
    setModalContent({
      shown: true,
      content
    });
  }

  useEffect(()=>{
    if (!modalContent.shown && modalContent.content) {
      const timer = setTimeout(()=>{
        setModalContent({
          shown: false,
          content: null
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
        {
          path === "/profile" || path === "/profile/" ? (
            <ProfilePage />
          ) : ""
        }
        {
          path === "/profile/steaking" || path === "/profile/steaking/" ? (
            <SteakingPage />
          ) : ""
        }
        {
          path === "/profile/team" || path === "/profile/team/" ? (
            <TeamPage />
          ) : ""
        }
        {
          path === "/profile/my-projects" || path === "/profile/my-projects/" ? (
            <MyProjectsPage />
          ) : ""
        }
        
      </main>
      <Footer />

      <Modal shown={modalContent.shown} onClose={onModalClose}>
        <ModalContent onClose={onModalClose} />
      </Modal>
    </div>
  );
}
