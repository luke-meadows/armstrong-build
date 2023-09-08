import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
export default function SectionHeading({ heading, noButton = false }) {
  return (
    <Container>
      <StyledSectionHeading>
        <h2>{heading}</h2>
        {!noButton && (
          <Link href="/contact">
            <button>Get a Quote</button>
          </Link>
        )}
      </StyledSectionHeading>
    </Container>
  );
}
const StyledSectionHeading = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0;
    padding: 0;
    color: black;
    background: #ffdc00;
    padding: 0.75rem 3rem;
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
    border-radius: 0.3rem;
  }
  button {
    padding: 0.75rem 2rem;
    font-weight: 500;
    background: #000;
    color: #ffdc00;
    &:hover {
      color: #000;
      background: #ffdc00;
    }
  }
`;
