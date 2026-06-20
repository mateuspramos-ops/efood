import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Restaurante } from '../../types'

const CardLink = styled(Link)`
  display: block;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-6px) rotate(-0.6deg);
  }
`

const Ticket = styled.article`
  background-color: var(--parchment);
  border: 1.5px solid var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  overflow: hidden;
`

const ImagemWrapper = styled.div`
  position: relative;
  height: 168px;
  overflow: hidden;
`

const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// ── Selo carimbo rotacionado, elemento de assinatura do card ──
const Selo = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--parchment);
  border: 1.5px dashed var(--clay);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotate(-9deg);
  font-family: var(--mono);
`

const SeloNota = styled.span`
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--clay);
  line-height: 1;
`

const SeloLabel = styled.span`
  font-size: 0.46rem;
  letter-spacing: 0.04em;
  color: var(--clay);
  text-transform: uppercase;
`

// ── Tira serrilhada simulando perfuração de comanda ──
const Perfuracao = styled.div`
  height: 12px;
  background-color: var(--ink);
  clip-path: polygon(
    0% 0%, 4% 100%, 8% 0%, 12% 100%, 16% 0%, 20% 100%,
    24% 0%, 28% 100%, 32% 0%, 36% 100%, 40% 0%, 44% 100%,
    48% 0%, 52% 100%, 56% 0%, 60% 100%, 64% 0%, 68% 100%,
    72% 0%, 76% 100%, 80% 0%, 84% 100%, 88% 0%, 92% 100%,
    96% 0%, 100% 100%, 100% 0%
  );
`

const Conteudo = styled.div`
  padding: 16px 18px 20px;
`

const Tipo = styled.span`
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sage);
`

const Nome = styled.h3`
  font-family: var(--display);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--ink);
  margin: 4px 0 6px;
  line-height: 1.15;
`

const Destaque = styled.p`
  font-size: 0.82rem;
  color: var(--stone);
  margin-bottom: 14px;
`

const Rodape = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px dashed var(--stone-light);
`

const Tempo = styled.span`
  font-family: var(--mono);
  font-size: 0.74rem;
  color: var(--stone);
`

const VerCardapio = styled.span`
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: 0.03em;

  &::after {
    content: ' →';
  }
`

type Props = {
  restaurante: Restaurante
}

const RestauranteCard = ({ restaurante }: Props) => {
  return (
    <CardLink to={`/restaurante/${restaurante.id}`}>
      <Ticket>
        <ImagemWrapper>
          <Imagem src={restaurante.capa} alt={restaurante.nome} />
          <Selo>
            <SeloNota>★ {restaurante.avaliacao}</SeloNota>
            <SeloLabel>nota</SeloLabel>
          </Selo>
        </ImagemWrapper>

        <Perfuracao />

        <Conteudo>
          <Tipo>{restaurante.tipo}</Tipo>
          <Nome>{restaurante.nome}</Nome>
          <Destaque>{restaurante.destaque}</Destaque>

          <Rodape>
            <Tempo>⏱ {restaurante.tempoEntrega}</Tempo>
            <VerCardapio>ver cardápio</VerCardapio>
          </Rodape>
        </Conteudo>
      </Ticket>
    </CardLink>
  )
}

export default RestauranteCard
