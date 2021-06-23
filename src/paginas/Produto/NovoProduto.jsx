import http from "../../http"
import { useState } from "react"

const NovoProduto = () => {

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  const salvar = (evento) => {
    evento.preventDefault()
    const produto = {
      nome: nome,
      preco: preco
    }
    http.post('produtos', produto)
      .then(response => {
        console.log(response.data)
      })
      .catch(erro => {
        console.log('Algo deu errado')
        console.log(erro)
      })
  }

  const manipuladorNome = (evento) => {
    setNome(evento.target.value)
  }

  const manipuladorPreco = (evento) => {
    setPreco(evento.target.value)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Adicionar produto</h1>
        <form onSubmit={salvar}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" value={nome} onChange={manipuladorNome} required />
          </div>
          <div className="form-group">
            <label>Preço</label>
            <input className="form-control" type="number" step="0.01" value={preco} onChange={manipuladorPreco} required />
          </div>
          <button className="btn btn-outline-dark btn-block">
            Salvar
          </button>
        </form>
      </div>
    </div>
  )

}

export default NovoProduto