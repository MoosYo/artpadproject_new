import classes from './App.module.scss';

// Components
import Header from './components/Header';

// Pages
import ProfilePage from './pages/profile';
import TeamPage from './pages/team';

const {
  app
} = classes;

export default function App() {

  const path = window.location.pathname;

  return (
    <div className={app}>
      <Header />
      {
        path === "/profile" || path === "/profile/" ? (
          <ProfilePage />
        ) : ""
      }
      {
        path === "/team" || path === "/team/" ? (
          <TeamPage />
        ) : ""
      }
    </div>
  );
}