import React from "react";
import logoOwasp from "../assets/img/logo.png";
import user from "../assets/img/user.png";

const Menu = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="." className="brand-link">
          <img
            src={logoOwasp}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8", backgroundColor: "white" }}
          />
          <span className="brand-text font-weight-light">Riesgos</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={user}
                alt={"User Imagen"}
                className="img-circle elevation-2"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="info">
              <a href="." className="d-block">
                User user
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-header">Servicios Generales</li>
              <li className="nav-item">
                <a href="." className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Calculadora Riesgos</p>
                </a>
              </li>
              <li className="nav-header">Servicios Usuario</li>
              <li className="nav-item">
                <a href="." className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>Perfil</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="." className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Proyectos</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Menu;
