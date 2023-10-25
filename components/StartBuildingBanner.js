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
          <button>Contact us</button>
        </Link>
      </StyledStartBuildingBanner>
    </Container>
  );
}
const StyledStartBuildingBanner = styled.section`
  background: #000;
  color: #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
  border-radius: 0.3rem;
  padding: 1rem 0 1.5rem 0;
  .upper {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    p {
      font-size: 24px;
      margin: 0;
      color: #fff;
    }
  }
  button {
    border: 1px solid #ffdc00;
    padding: 1rem 4rem;
    background: #ffdc00;
    color: #000;
    &:hover {
      background: #000;
      color: #ffdc00;
    }
  }
`;
