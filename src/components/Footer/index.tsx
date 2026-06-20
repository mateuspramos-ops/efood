import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: var(--ink);
  padding: 40px 32px;
  margin-top: 80px;
  text-align: center;
`

const Marca = styled.p`
  font-family: var(--display);
  font-style: italic;
  font-size: 1.1rem;
  color: var(--parchment);
  margin-bottom: 8px;

  span {
    color: var(--saffron);
  }
`

const Copy = styled.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--stone);
  letter-spacing: 0.03em;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Marca>
        e<span>food</span>
      </Marca>
      <Copy>© 2026 efood — projeto de estudo, baseado em layout Figma</Copy>
    </FooterContainer>
  )
}

export default Footer
