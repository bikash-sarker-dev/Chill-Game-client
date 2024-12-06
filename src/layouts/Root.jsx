import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { AuthContext, ThemeContext } from "../contextAip/ContextCreate";
import SpinnerPage from "../pages/SpinnerPage";

const Root = () => {
  const { loading } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      {loading ? <SpinnerPage /> : <Outlet />}

      <Footer />
    </div>
  );
};

export default Root;
