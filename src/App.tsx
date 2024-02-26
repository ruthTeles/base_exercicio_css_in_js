import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { EstiloGlobal, Container } from './style'

import './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <div>
          <ListaVagas />
        </div>
      </Container>
    </>
  )
}

export default App
