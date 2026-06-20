import styled from 'styled-components'
import { restaurantes } from '../../data/restaurantes'
import RestauranteCard from '../../components/RestauranteCard'

const Hero = styled.section`
  background-color: var(--ink);
  padding: 64px 32px 56px;
  text-align: center;
  border-bottom: 3px solid var(--saffron);
`

const Eyebrow = styled.p`
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--saffron);
  margin-bottom: 14px;
`

const Titulo = styled.h1`
  font-family: var(--display);
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  font-weight: 600;
  color: var(--parchment);
  line-height: 1.12;
  max-width: 640px;
  margin: 0 auto 18px;

  em {
    color: var(--saffron);
    font-style: italic;
  }
`

const Subtitulo = styled.p`
  color: var(--stone-light);
  font-size: 1rem;
  max-width: 460px;
  margin: 0 auto;
  line-height: 1.7;
`

const Secao = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 32px 40px;
`

const SecaoHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 8px;
`

const SecaoTitulo = styled.h2`
  font-family: var(--display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--ink);
`

const Contagem = styled.span`
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--stone);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Home = () => {
  return (
    <>
      <Hero>
        <Eyebrow>seleção do dia · {restaurantes.length} cozinhas</Eyebrow>
        <Titulo>
          Cada prato carrega <em>uma história</em>. A sua começa aqui.
        </Titulo>
        <Subtitulo>
          Reunimos cozinhas com identidade — dos fornos a lenha às panelas de
          família — para chegar até a sua mesa.
        </Subtitulo>
      </Hero>

      <Secao>
        <SecaoHeader>
          <SecaoTitulo>Restaurantes em destaque</SecaoTitulo>
          <Contagem>{restaurantes.length} cardápios disponíveis</Contagem>
        </SecaoHeader>

        <Grid>
          {restaurantes.map((restaurante) => (
            <RestauranteCard key={restaurante.id} restaurante={restaurante} />
          ))}
        </Grid>
      </Secao>
    </>
  )
}

export default Home
