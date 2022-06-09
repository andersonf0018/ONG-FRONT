import React, { useEffect, useState } from "react";
import logo from "../assets/logo-horizontal-branca.png";
import { Link, Redirect } from "react-router-dom";
import favicon from "../assets/logo-favicon-branco.png";
import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "Início",
    exact: true,
    to: "/home",
    iconClassName: "bi bi-house-door",
  },
  {
    name: "Cadastros",
    exact: true,
    to: `/cadastros`,
    iconClassName: "bi bi-person-plus",
  },
  {
    name: "Acolhidos",
    exact: true,
    to: `/acolhidos`,
    iconClassName: "bi bi-people",
  },
  {
    name: "Colaboradores",
    exact: true,
    to: `/colaboradores`,
    iconClassName: "bi bi-journal-text",
  },
  // {
  //   name: "Transferir",
  //   exact: true,
  //   to: `/transferir`,
  //   iconClassName: "bi bi-arrow-left-right",
  // },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <>
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="logo">
            {inactive ? (
              <img src={favicon} alt="logo" className="logo-favicon" />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </div>
          <div
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
          >
            {inactive ? (
              <i class="bi bi-arrow-right-circle-fill"></i>
            ) : (
              <i class="bi bi-arrow-left-circle-fill"></i>
            )}
          </div>
        </div>
        <div className="main-menu">
          <ul>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
                onClick={(e) => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </div>
        <div className="side-menu-footer">
          <div className="user-info">
            <Link exact to="/login">
              <i class="bi bi-box-arrow-right"></i>
              Sair
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-infos">
        <p className="welcome-msg">Olá, Usuário</p>
      </div>
    </>
  );
};

export default SideMenu;
