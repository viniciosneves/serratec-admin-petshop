import axios from "axios"
import { useState } from "react"

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const efetuarCadastro = (evento) => {
    evento.preventDefault()
    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
    axios.post('http://localhost:8000/auth/register', usuario)
      .then(response => console.log(response.data))
      .catch(erro => {
        console.log('Algo deu errado')
        console.log(erro)
      })
  }

  const manipuladorNome = (evento) => {
    setNome(evento.target.value)
  }

  const manipuladorEmail = (evento) => {
    setEmail(evento.target.value)
  }

  const manipuladorSenha = (evento) => {
    setSenha(evento.target.value)
  }

  return (
    <div className="row  justify-content-center">
      <div className="col-md-6">
        <h1>Cadastre-se</h1>
        <form onSubmit={efetuarCadastro}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" value={nome} onChange={manipuladorNome} required />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input className="form-control" value={email} onChange={manipuladorEmail} required type="email" />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input className="form-control" value={senha} onChange={manipuladorSenha} required type="password" />
          </div>
          <button className="btn btn-outline-dark btn-block">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )

}

export default Cadastro