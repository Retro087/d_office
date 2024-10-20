import { Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./components/sidebar";
import UsersContainer from "./containers/users-container";
import UsersPage from "./pages/users";
import WorkPlacesPage from "./pages/workplaces";
import BookingPage from "./pages/booking";
import { useSelector } from "react-redux";
import LoginContainer from "./containers/login-container";
import HeaderContainer from "./containers/header-container";
import RecordPage from "./pages/record";

function App() {
  const selector = useSelector((state) => ({
    admin: state.auth.admin,
    isAuth: state.auth.isAuth,
  }));

  if (!selector.isAuth) {
    return <LoginContainer />;
  }

  if (selector.admin) {
    return (
      <>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/wp" element={<WorkPlacesPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<RecordPage />} />
      </Routes>
    </>
  );
}

export default App;
