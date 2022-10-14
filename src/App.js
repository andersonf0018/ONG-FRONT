import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
/* Usuario */
import Home from "./paginas/usuario/Home.js";
import Cadastros from "./paginas/usuario/Cadastros.js";
import Acolhidos from "./paginas/usuario/Acolhidos.js";
import Colaboradores from "./paginas/usuario/Colaboradores.js";
import Transferir from "./paginas/usuario/Transferir.js";
import Desligamento from "./paginas/usuario/Desligamento.js";
import Pesquisa from "./paginas/usuario/Pesquisa";

import Anamnese from "./paginas/medicos/Anamnese";
import PIA from "./paginas/medicos/PIA";
import PlanejamentoSaida from "./paginas/medicos/PlanejamentoSaida";


/* Auth */
import { AuthLogin } from "./paginas/auth/AuthLogin";
import Login from "./paginas/auth/Login.js";
import EsqueceuSenha from "./paginas/auth/EsqueceuSenha.js";
import MudancaSenha from "./paginas/auth/MudancaSenha.js";
import ProtectedRoute from "./paginas/auth/ProtectedRoute";
import ProtectedLogin from "./paginas/auth/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const ROLES = {
  "voluntario": 1,
  "medico": 2,
  "admin": 3
}

function App() {
  const [auth, setAuth] = useState(false);
  const [inactive, setInactive] = useState(false);
  return (
    <AuthLogin.Provider value={{ auth, setAuth }}>
      <div className="App">
        <Router>
          <SideMenu
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
          />

          <div className={`conteudo ${inactive ? "inactive" : ""}`}>
            {menuItems.map((menu, index) => (
              <>
                <Route key={menu.name} exact={menu.exact} path={menu.to}>
                  <h1>{menu.name}</h1>
                </Route>
                {menu.subMenus && menu.subMenus.length > 0
                  ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                  : null}
              </>
            ))}
            <Switch>
              <ProtectedLogin exact path={"/"} auth={auth} component={() => <Login />} />

              <ProtectedRoute exact path={"/home"} auth={auth} component={() => <Home />} />
              <ProtectedRoute exact path={"/cadastros"} auth={auth} component={() => <Cadastros />} />
              <ProtectedRoute exact path={"/acolhidos"} auth={auth} component={() => <Acolhidos />} />
              <ProtectedRoute exact path={"/transferir"} auth={auth} component={() => <Transferir />} />
              <ProtectedRoute exact path={"/colaboradores"} auth={auth} component={() => <Colaboradores />} />
              <ProtectedRoute exact path={"/home"} auth={auth} component={() => <Home />} />


              <Route exact path={"/desligamento"}>
                <Desligamento />
              </Route>
              <Route exact path={"/login"}>
                <Login />
              </Route>
              <Route exact path={"/esqueceu-senha"}>
                <EsqueceuSenha />
              </Route>
              <Route exact path={"/mudanca-senha"}>
                <MudancaSenha />
              </Route>
              <Route exact path="/pesquisa">
                <Pesquisa />
              </Route>
              <Route exact path="/anamnese">
                <Anamnese />
              </Route>
              <Route exact path="/pia">
                <PIA />
              </Route>
              <Route exact path="/planejamentosaida">
                <PlanejamentoSaida />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </AuthLogin.Provider >

  );


}

export default App;
