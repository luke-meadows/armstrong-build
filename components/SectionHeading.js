import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
export default function SectionHeading({ heading }) {
  return (
    <Container>
      <StyledSectionHeading>
        <h2>{heading}</h2>
        <Link href="/contact">
          <button>Get a Quote</button>
        </Link>
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
    color: #606060;
  }
  button {
    background: #ffdc00;
    padding: 0.5rem 0.75rem;
    font-weight: 500;
  }
`;
