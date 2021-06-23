import http from '../../http'

import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Produtos = () => {

  const [produtos, setProdutos] = useState([])

  const formatter = new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const obterProdutos = () => {
    http.get('produtos')
      .then(response => setProdutos(response.data))
  }

  useEffect(() => {
    obterProdutos()
  }, [])

  const excluir = (produto) => {
    http.delete('produtos/' + produto.id)
      .then(() => obterProdutos())
  }

  return (
    <div>
      <h1>Produtos</h1>

      <Link className="btn btn-sm btn-outline-primary mb-3" to="/produtos/novo">+ produto</Link>
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
          {produtos.map(produto => <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{formatter.format(produto.preco)}</td>
            <td>
              <Link className="btn btn-sm btn-outline-info" to={`/produtos/${produto.id}`}>editar</Link>
              <button type="button" className="ml-2 btn btn-sm btn-outline-danger" onClick={() => { excluir(produto) }}>excluir</button>
            </td>
          </tr>)}
        </tbody>
      </table>
      <ul>

      </ul>
    </div>
  )
}

export default Produtos