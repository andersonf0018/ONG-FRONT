import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

/* Usuario */
import Home from "./paginas/usuario/Home.js";
import Cadastros from "./paginas/usuario/Cadastros.js";
import Consultar from "./paginas/usuario/Consultar.js";
import Relatorios from "./paginas/usuario/Relatorios.js";
import Transferir from "./paginas/usuario/Transferir.js";
import Desligamento from "./paginas/usuario/Desligamento.js";
import Pesquisa from "./paginas/usuario/Pesquisa";


/* Auth */
import Login from "./paginas/auth/Login.js";
import EsqueceuSenha from "./paginas/auth/EsqueceuSenha.js";
import MudancaSenha from "./paginas/auth/MudancaSenha.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
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
            <Route exact path={"/"}>
              <Login />
            </Route>
            <Route exact path={"/home"} component={() => <Home authorized={true} />} />
            <Route exact path={"/cadastros"}>
              <Cadastros />
            </Route>
            <Route exact path={"/consultar"}>
              <Consultar />
            </Route>
            <Route exact path={"/transferir"}>
              <Transferir />
            </Route>
            <Route exact path={"/relatorios"}>
              <Relatorios />
            </Route>
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
              <Pesquisa/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
