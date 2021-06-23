import Titulo from '../../componentes/Titulo'
import Card from '../../componentes/Card'

const Home = () => {
  return (<div>
    <Card>
      <Titulo>
        Bem vindo ao ADM do Petshop
      </Titulo>
      <p>Aqui, administramos produtos e serviços.</p>
      <img src="https://static.vecteezy.com/ti/vetor-gratis/t2/620310-logotipo-de-animal-de-estimacao-de-cao-de-impressao-de-pe-e-simbolos-gr%C3%A1tis-vetor.jpg" alt="" />
    </Card>
  </div>)
}

export default Home