import { useParams, Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { restaurantes } from '../../data/restaurantes'
import PratoCard from '../../components/PratoCard'

const Banner = styled.section<{ $imagem: string }>`
  position: relative;
  height: 280px;
  background-image:
    linear-gradient(to bottom, rgba(27, 26, 23, 0.35), rgba(27, 26, 23, 0.92)),
    url(${({ $imagem }) => $imagem});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 32px;
`

const VoltarLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 32px;
  font-family: var(--mono);
  font-size: 0.74rem;
  color: var(--parchment);
  background-color: rgba(27, 26, 23, 0.6);
  border: 1px solid var(--parchment);
  padding: 6px 14px;
  border-radius: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--ink);
  }
`

const BannerConteudo = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`

const Tipo = styled.span`
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--saffron);
`

const Nome = styled.h1`
  font-family: var(--display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  color: var(--parchment);
  margin: 6px 0 10px;
`

const Meta = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`

const MetaItem = styled.span`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--stone-light);
`

const CardapioSecao = styled.section`
  max-width: 760px;
  margin: 0 auto;
  padding: 48px 32px 80px;
`

const CardapioHeader = styled.div`
  text-align: center;
  margin-bottom: 36px;
`

const CardapioEyebrow = styled.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sage);
  margin-bottom: 8px;
`

const CardapioTitulo = styled.h2`
  font-family: var(--display);
  font-style: italic;
  font-size: 1.7rem;
  color: var(--ink);
`

const Restaurante = () => {
  const { id } = useParams()
  const restaurante = restaurantes.find((r) => r.id === Number(id))

  if (!restaurante) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Banner $imagem={restaurante.capa}>
        <VoltarLink to="/">← voltar</VoltarLink>
        <BannerConteudo>
          <Tipo>{restaurante.tipo}</Tipo>
          <Nome>{restaurante.nome}</Nome>
          <Meta>
            <MetaItem>★ {restaurante.avaliacao} de avaliação</MetaItem>
            <MetaItem>⏱ {restaurante.tempoEntrega}</MetaItem>
          </Meta>
        </BannerConteudo>
      </Banner>

      <CardapioSecao>
        <CardapioHeader>
          <CardapioEyebrow>o cardápio</CardapioEyebrow>
          <CardapioTitulo>Pratos selecionados pela casa</CardapioTitulo>
        </CardapioHeader>

        {restaurante.cardapio.map((prato) => (
          <PratoCard key={prato.id} prato={prato} />
        ))}
      </CardapioSecao>
    </>
  )
}

export default Restaurante
