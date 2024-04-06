import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, AboutPage, LoginPage } from "./index";
import Navbar from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        {/*Para rutas que no existan. Con Navigate to o un componente creado por ti*/}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
