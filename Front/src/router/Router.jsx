import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Accueil from "../pages/Accueil/Accueil";
import User from "../pages/User/User";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error.jsx";

export default function Router() {
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={isConnected ? <User /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
