import logo from "./logo.svg";
import "./App.css";
import { auth } from "./function/firebase";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import VendorReg from "./components/vendorAdmin/vendorReg/vendorReg";
import { onAuthStateChanged } from "firebase/auth";
import DashBoard from "./components/vendorAdmin/dashboard/mainDashboard/dashBoard";

function App() {
  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const email = authUser.email;

        setActiveUser(authUser);
      } else {
        // Користувач вийшов, робіть необхідні дії

        setActiveUser("");
      }
    });

    return () => unsubscribe();
  }, [auth]);
  return (
    <>
      <Routes>
        <Route
          path="/vendorRegistration"
          element={<VendorReg activeUser={activeUser} />}
        />
        <Route
          path="/vendor/dashboard"
          element={<DashBoard activeUser={activeUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
