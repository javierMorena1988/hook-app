import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, AboutPage, LoginPage } from "./index";
import Navbar from "./Navbar";

export const MainApp = () => {
  return (
    <>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
        {/*Para rutas que no existan. Con Navigate to o un componente creado por ti*/}
      </Routes>
    </>
  );
};

export default MainApp;
