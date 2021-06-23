import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './componentes/NavBar'
import Pagina404 from './paginas/Pagina404'
import Home from './paginas/Home'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'
import Produtos from './paginas/Produtos'
import NovoProduto from './paginas/Produto/NovoProduto'
import EditaProduto from './paginas/Produto/EditaProduto'
import Servicos from './paginas/Servicos'
import NovoServico from './paginas/Servico/NovoServico'
import EditaServico from './paginas/Servico/EditaServico'
import { useState } from 'react'

function App() {

  const [token, setToken] = useState('')
  const onLogin = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken('')
  }

  return (
    <BrowserRouter>
      <Navbar token={token} aoLogout={logout}/>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/login">
            <Login onLogin={onLogin}/>
          </Route>
          <Route exact path="/produtos">
            <Produtos />
          </Route>
          <Route exact path="/produtos/novo">
            <NovoProduto />
          </Route>
          <Route exact path="/produtos/:id">
            <EditaProduto />
          </Route>
          <Route exact path="/servicos">
            <Servicos />
          </Route>
          <Route exact path="/servicos/novo">
            <NovoServico />
          </Route>
          <Route exact path="/servicos/:id">
            <EditaServico />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
