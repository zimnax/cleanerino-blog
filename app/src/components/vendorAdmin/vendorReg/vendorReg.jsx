import { useEffect, useState } from "react";
import css from "./vendorReg.module.css";
import VendorRegPage from "./vendorRegPage";
import AddBrandDetails from "./addBrandDetails";
import AddProduct from "./addProduct";
import Test from "./tesx";
import axios from "axios";

const VendorReg = ({ activeUser }) => {
  const [reg, setReg] = useState(true);
  const [brandPage, setBrandPage] = useState(false);
  const [addProdPage, setAddProdPage] = useState(false);
  /////////////////////////
  // const [users, setUsers] = useState([]);

  /////////////////////////
  return (
    <>
      {reg && <VendorRegPage setReg={setReg} setBrandPage={setBrandPage} />}
      {brandPage && (
        <AddBrandDetails
          setBrandPage={setBrandPage}
          setAddProdPage={setAddProdPage}
          activeUser={activeUser}
        />
      )}
      {addProdPage && <AddProduct setAddProdPage={setAddProdPage} />}
    </>
  );
};
export default VendorReg;
