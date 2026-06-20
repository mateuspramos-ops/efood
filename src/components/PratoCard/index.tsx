import { useState } from 'react'
import styled from 'styled-components'
import { Prato } from '../../types'

const Container = styled.div`
  display: flex;
  gap: 18px;
  padding: 22px 0;
  border-bottom: 1px dashed var(--stone-light);

  &:first-child {
    padding-top: 0;
  }
`

const Imagem = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 4px;
  border: 1.5px solid var(--ink);
  flex-shrink: 0;
`

const Info = styled.div`
  flex: 1;
  min-width: 0;
`

const Linha = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`

const Nome = styled.h4`
  font-family: var(--display);
  font-size: 1.08rem;
  font-weight: 600;
  color: var(--ink);
  white-space: nowrap;
`

const DotLeader = styled.span`
  flex: 1;
  border-bottom: 1.5px dotted var(--stone-light);
  height: 1px;
  transform: translateY(-4px);
`

const Preco = styled.span`
  font-family: var(--mono);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--clay);
  white-space: nowrap;
`

const Descricao = styled.p`
  font-size: 0.84rem;
  color: var(--stone);
  margin: 6px 0 12px;
  line-height: 1.55;
`

const BotaoAdicionar = styled.button<{ $adicionado: boolean }>`
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 7px 16px;
  border: 1.5px solid var(--ink);
  background-color: ${({ $adicionado }) =>
    $adicionado ? 'var(--sage)' : 'transparent'};
  color: ${({ $adicionado }) => ($adicionado ? 'var(--parchment)' : 'var(--ink)')};
  border-color: ${({ $adicionado }) => ($adicionado ? 'var(--sage)' : 'var(--ink)')};
  transition: background-color 0.2s, transform 0.15s;

  &:hover {
    background-color: ${({ $adicionado }) => ($adicionado ? 'var(--sage)' : 'var(--ink)')};
    color: var(--parchment);
  }

  &:active {
    transform: scale(0.96);
  }
`

type Props = {
  prato: Prato
}

const formatarPreco = (valor: number) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const PratoCard = ({ prato }: Props) => {
  const [adicionado, setAdicionado] = useState(false)

  const handleClick = () => {
    setAdicionado(true)
    setTimeout(() => setAdicionado(false), 1600)
  }

  return (
    <Container>
      <Imagem src={prato.imagem} alt={prato.nome} />
      <Info>
        <Linha>
          <Nome>{prato.nome}</Nome>
          <DotLeader />
          <Preco>{formatarPreco(prato.preco)}</Preco>
        </Linha>
        <Descricao>{prato.descricao}</Descricao>
        <BotaoAdicionar $adicionado={adicionado} onClick={handleClick}>
          {adicionado ? '✓ adicionado' : '+ adicionar'}
        </BotaoAdicionar>
      </Info>
    </Container>
  )
}

export default PratoCard
