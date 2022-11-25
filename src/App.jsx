import classes from "./App.module.scss";
import Footer from "./components/Footer";

// Components
import Header from './components/Header';
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
  return (
    <div className={app}>
      <Header />
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
    </div>
  );
}
