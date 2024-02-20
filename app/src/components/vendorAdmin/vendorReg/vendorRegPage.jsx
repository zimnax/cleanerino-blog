import css from "./vendorReg.module.css";
import { ReactSVG } from "react-svg";
import logo from "../../../svg/logo-inline.svg";
import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

import axios from "axios";
import { auth, googleAuthProvider } from "../../../function/firebase";
const VendorRegPage = ({ setReg, setBrandPage }) => {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRep, setShowPasswordRep] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    const inputElement = document.getElementById("pasId");
    const repId = document.getElementById("repId");
    if (password !== "" && passwordRep !== "" && password !== passwordRep) {
      setPasswordError("Passwords do not match");

      if (inputElement && repId) {
        inputElement.style.border = "1px solid red"; // Зміна бордера на червоний
        repId.style.color = "red";
      }
    } else {
      setPasswordError("");
      inputElement.style.border = "1px solid #cccccc"; // Зміна бордера на червоний
      repId.style.color = "#333333";
    }
  }, [password, passwordRep]);
  const togglePasswordRepVisibility = () => {
    setShowPasswordRep(!showPasswordRep);
  };
  const singInWithGoogle = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        handleSubmit(result.user.email, result.user.uid);
      })
      .catch((err) => {
        console.log("Error");
      });
  };
  const signUp = async (e) => {
    e.preventDefault();
    if (passwordError) {
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      handleSubmit(res.user.email, res.user.uid);
    } catch (error) {
      alert("The user with this login is not registered", error);
    }
  };
  const handleSubmit = (mail, uid) => {
    let id;

    if (uid === undefined) {
      id = "";
    } else {
      id = uid;
    }

    axios
      .post("http://localhost:4000/api/v1/vendor/profile", {
        firstName: name,
        lastName: last,
        email: mail,
        brandName: brand,
        roleName: "vendor",
        firebaseId: id,
        photo: null,
      })
      .then((response) => {
        alert("Користувач успішно створений:", response.data);
        setReg(false);
        setBrandPage(true);
        // Додаткові дії після успішного створення користувача
      })
      .catch((error) => {
        console.error("Помилка при створенні користувача:", error);
      });
  };
  const skip = () => {
    setReg(false);
    setBrandPage(true);
  };

  return (
    <>
      <div className={css.regWrap}>
        <div className={css.headerWrap}>
          <ReactSVG src={logo} />
          <button onClick={skip} className={css.buttonSkip}>
            Skip
          </button>
        </div>
        <div className={css.titleWrap}>
          <p className={css.titleReg}>Lets set up your workspace</p>
          <p className={css.titleDesc}>
            Laoreet viverra et sit sit facilisi tristique. Sed ut sagittis sed
            velit commodo. Ullamcorper netus ac.
          </p>
          <div className={css.lineWrap}>
            <div className={css.lineGreen}></div>
            <div className={css.lineGrey}></div>
            <div className={css.lineGrey}></div>
          </div>
        </div>
        <div className={css.formWrap}>
          <div className={css.twoInputWr}>
            <div className={css.inputWrap}>
              <label className={css.labelInp}>First name</label>
              <input
                className={css.regInput}
                placeholder="Placeholder"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={css.inputWrap}>
              <label className={css.labelInp}>Last name</label>
              <input
                className={css.regInput}
                placeholder="Placeholder"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
          </div>
          <div className={css.twoInputWr}>
            <div className={css.inputWrap}>
              <label className={css.labelInp}>Email</label>
              <input
                className={css.regInput}
                placeholder="Placeholder"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={css.inputWrap}>
              <label className={css.labelInp}>Brand name</label>
              <input
                className={css.regInput}
                placeholder="Placeholder"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>
          <div className={css.twoInputWr}>
            <div className={css.inputWrap}>
              <label className={css.labelInp}>Password</label>
              <div className={css.passwordWrap}>
                {showPassword ? (
                  <FaRegEye
                    className={css.eye}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaRegEyeSlash
                    className={css.eye}
                    onClick={togglePasswordVisibility}
                  />
                )}
                <input
                  className={css.regInputP}
                  placeholder="Placeholder"
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className={css.inputWrap}>
              <label id="repId" className={css.labelInp}>
                Repeat password
              </label>
              <div className={css.passwordWrap}>
                {showPasswordRep ? (
                  <FaRegEye
                    className={css.eye}
                    onClick={togglePasswordRepVisibility}
                  />
                ) : (
                  <FaRegEyeSlash
                    className={css.eye}
                    onClick={togglePasswordRepVisibility}
                  />
                )}
                <input
                  id="pasId"
                  className={css.regInputP}
                  placeholder="Placeholder"
                  value={passwordRep}
                  type={showPasswordRep ? "text" : "password"}
                  onChange={(e) => setPasswordRep(e.target.value)}
                />
              </div>
            </div>
          </div>
          {passwordError && <p className={css.pasError}>{passwordError}</p>}
        </div>
        <button onClick={signUp} className={css.buttonForm}>
          Continue
        </button>
        <button onClick={singInWithGoogle} className={css.buttonFormGoogle}>
          Register with Google
        </button>
      </div>
    </>
  );
};
export default VendorRegPage;
