import http from '../../http'

import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Servicos = () => {

  const [servicos, setServicos] = useState([])

  const formatter = new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const obterServicos = () => {
    http.get('servicos')
      .then(response => setServicos(response.data))
  }

  useEffect(() => {
    obterServicos()
  }, [])

  const excluir = (servico) => {
    http.delete('servicos/' + servico.id)
      .then(response => obterServicos())
  }

  return (
    <div>
      <h1>Servicos</h1>
      <Link className="btn btn-sm btn-outline-primary mb-3" to="/servicos/novo">+ servico</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {servicos.map(servico => <tr key={servico.id}>
            <td>{servico.id}</td>
            <td>{servico.nome}</td>
            <td>{formatter.format(servico.preco)}</td>
            <td>
              <Link className="btn btn-sm btn-outline-info" to={`/servicos/${servico.id}`}>editar</Link>
              <button type="button" className="ml-2 btn btn-sm btn-outline-danger" onClick={() => { excluir(servico) }}>excluir</button>
            </td>
          </tr>)}
        </tbody>
      </table>
      <ul>

      </ul>
    </div>
  )
}

export default Servicos