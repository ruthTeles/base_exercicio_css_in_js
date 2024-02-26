import { FormEvent, useState } from 'react'

import Container from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Container>
      <form className="form" onSubmit={aoEnviarForm}>
        <input
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  )
}
export default FormVagas
