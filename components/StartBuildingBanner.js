import styled from 'styled-components';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';
export default function StartBuildingBanner() {
  return (
    <Container>
      <StyledStartBuildingBanner>
        <div className="upper">
          <p>Start your next building project with</p>
          <Logo width="220px  " />
        </div>
        <Link href="/contact">
          <button>Get a quote today</button>
        </Link>
      </StyledStartBuildingBanner>
    </Container>
  );
}
const StyledStartBuildingBanner = styled.section`
  background: #241e21;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 01rem;
  margin-top: 4rem;
  border-radius: 0.3rem;
  padding: 1rem 0 1.5rem 0;
  .upper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    p {
      font-size: 24px;
      margin: 0;
      color: #fff;
    }
  }
  button {
    background: #241e21;
    border: 1px solid #ffdc00;
    color: #ffdc00;
    padding: 1rem 4rem;
    &:hover {
      background: #ffdc00;
      color: #000;
    }
  }
`;
