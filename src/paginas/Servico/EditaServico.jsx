import http from "../../http"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const EditaServico = () => {
  
  const { id } = useParams()
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  useEffect(() => {
    http.get('servicos/' + id)
      .then(response => {
        setNome(response.data.nome)
        setPreco(response.data.preco)
      })
  }, [id])
  const salvar = (evento) => {
    evento.preventDefault()
    const servico = {
      nome: nome,
      preco: preco,
      id: id
    }
    http.put('servicos/' + id, servico)
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
        <h1>Editar servico</h1>
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

export default EditaServico