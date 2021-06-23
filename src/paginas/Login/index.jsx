import MensagemErro from './MensagemErro'

import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

const Login = ({onLogin}) => {

  const [mensagem, setMensagem] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  const efetuarLogin = (evento) => {
    evento.preventDefault()
    const usuario = {
      email: email,
      senha: senha
    }
    axios.post('http://localhost:8000/auth/login', usuario)
      .then(response => {
        console.log(response.data)
        localStorage.setItem('token', response.data.access_token)
        onLogin(response.data.user, response.data.access_token)
        history.push('/produtos')
      })
      .catch(erro => {
        console.log('Algo deu errado')
        if (erro.response.data && erro.response.data.message) {
          setMensagem(erro.response.data.message)
        } else {
          setMensagem('OPS... um erro não esperado.')
        }
        setTimeout(() => {
          setMensagem('')
        }, 4500);
      })
  }

  const manipuladorEmail = (evento) => {
    setEmail(evento.target.value)
  }

  const manipuladorSenha = (evento) => {
    setSenha(evento.target.value)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Cadastre-se</h1>

        { mensagem && <MensagemErro msg={mensagem} /> }

        <form onSubmit={efetuarLogin}>
          <div className="form-group">
            <label>E-mail</label>
            <input className="form-control" value={email} onChange={manipuladorEmail} required type="email" />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input className="form-control" value={senha} onChange={manipuladorSenha} required type="password" />
          </div>
          <button className="btn btn-outline-dark btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  )

}

export default Login