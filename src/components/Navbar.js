import React from "react";
import unl from "../assets/img/logoUNL.png";
import cis from "../assets/img/logoCIS.jpg";

const Navbar = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Rigth navbar  */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="."
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Left navbar links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item d-none d-sm-inline-block">
            <a
              href="https://www.unl.edu.ec"
              className="nav-link"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img
                src={unl}
                alt={"UNL Imagen"}
                className="img-circle elevation-2"
                style={{ backgroundColor: "white", width: "30px" }}
              />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a
              href="https://www.facebook.com/cisunl/"
              className="nav-link"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img
                src={cis}
                alt={"UNL Imagen"}
                className="img-circle elevation-2"
                style={{ backgroundColor: "white", width: "30px" }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
