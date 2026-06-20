import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  background-color: var(--ink);
  padding: 20px 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 3px solid var(--saffron);
`

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  font-family: var(--display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--parchment);
  letter-spacing: -0.01em;

  span {
    color: var(--saffron);
    font-style: italic;
  }
`

const Tagline = styled.span`
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--stone-light);
  letter-spacing: 0.04em;

  @media (max-width: 600px) {
    display: none;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo to="/">
          e<span>food</span>
        </Logo>
        <Tagline>cardápios com história — desde a cozinha até você</Tagline>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
