import styled from 'styled-components';
import Container from './Container';
import Logo from './Logo';
export default function StartBuildingBanner() {
  return (
    <Container>
      <StyledStartBuildingBanner>
        <div className="upper">
          <p>Start your next building project with</p>
          <Logo />
        </div>
        <button>Get a quote today</button>
      </StyledStartBuildingBanner>
    </Container>
  );
}
const StyledStartBuildingBanner = styled.section`
  background: #241e21;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  border-radius: 0.3rem;
  padding: 1rem 0 1.5rem 0;
  .upper {
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-size: 24px;
      font-weight: 200;
      margin: 0;
    }
  }
  button {
    border: 1px solid white;
    background: #241e21;
    color: #ffdc00;
    padding: 1rem 4rem;
    transition: all 0.2s ease;
    &:hover {
      border: 1px solid #ffdc00;
    }
  }
`;
