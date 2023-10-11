import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
import FilterButton from './FilterButton';
export default function SectionHeading({
  heading,
  noButton = false,
  filterButton = false,
}) {
  return (
    <Container>
      <StyledSectionHeading>
        <h2>{heading}</h2>
        {filterButton && <FilterButton />}
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
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;

  h2 {
    margin: 0;
    padding: 0;
    color: black;
    background: #ffdc00;
    padding: 0.75rem 2rem;
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
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
