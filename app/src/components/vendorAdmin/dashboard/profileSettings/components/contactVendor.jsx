import { useEffect, useRef, useState } from "react";
import css from "../profile.module.css";

const ContactVendor = ({ setEmail, email, setPhone, phone }) => {
  return (
    <div className={css.shipingWrap}>
      <div className={css.addressBShip}>
        <div className={css.wrapText}>
          <p className={css.mainTextPSecond}>Contacts</p>
        </div>
        <div className={css.wrapAdressDash}>
          <div className={css.wrapAddressShip}>
            <p className={css.mainTextPSecond}>Email</p>

            <input
              className={css.adressIno}
              placeholder="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={css.wrapAddressShipTwo}>
            <p className={css.mainTextPSecond}>Phone</p>

            <input
              className={css.adressIno}
              placeholder="Phone"
              name="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactVendor;
