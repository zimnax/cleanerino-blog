import { useEffect, useState } from "react";
import css from "../dashboard.module.css";
import LeftPannel from "./leftPannel";
import Dash from "./standartComponent/dash";
import ProfileSettings from "../profileSettings/profileSettings";
import withMySQLData from "../../../HOK/withMySQLData";
import axios from "axios";
const DashBoard = ({ activeUser, data }) => {
  const [dashBordS, setDashBoardS] = useState(true);
  const [order, setOrder] = useState(false);
  const [users, setUsers] = useState(null);
  const [product, setProduct] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [chat, setChat] = useState(false);
  const [settings, setSettings] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/vendor/product/add")
      .then((response) => {
        console.log("products", response.data);
      })
      .catch((error) => {
        console.error("Помилка при отриманні користувачів:", error);
      });
  }, []);
  useEffect(() => {
    if (activeUser && data) {
      const found = data.find((item) => item.firebase_id === activeUser.uid);

      setUsers(found);
    }
  }, [data, activeUser]);
  return (
    <div className={css.wrapDashboardAll}>
      <LeftPannel
        setSettings={setSettings}
        settings={settings}
        dashBordS={dashBordS}
        setDashBoardS={setDashBoardS}
        order={order}
        setOrder={setOrder}
        product={product}
        setProduct={setProduct}
        discount={discount}
        setDiscount={setDiscount}
        customer={customer}
        setCustomer={setCustomer}
        chat={chat}
        setChat={setChat}
        users={users}
      />
      <div className={css.rightPannelWrap}>
        {dashBordS && <Dash />}
        {settings && (
          <ProfileSettings
            activeUser={activeUser}
            setUsers={setUsers}
            users={users}
          />
        )}
      </div>
    </div>
  );
};
export default withMySQLData("http://localhost:4000/api/v1/vendor/profile")(
  DashBoard
);
