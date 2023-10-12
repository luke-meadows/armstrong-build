import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
import FilterButton from './FilterButton';
import Chevron from '../public/images/icons/chevron-down.png';
import Image from 'next/image';
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
          <Link href="/services">
            <button>
              <div className="arrow">
                <div className="arrow-container">
                  <Image src={Chevron} layout="responsive" objectFit="fill" />
                </div>
              </div>
              Back to services
            </button>
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
    padding: 0.75rem 1rem 0.75rem 2.7rem;
    font-weight: 500;
    position: relative;
    background: #ffdc00;
    color: #000;
    &:hover {
      background: #000;
      color: #ffdc00;
    }
  }
  .arrow-container {
    position: relative;

    width: 0.8rem;
    /* height: 0.8rem; */
    svg {
      fill: blue;
    }
  }
  .arrow {
    position: absolute;
    left: 0.85rem;
    top: 51%;

    transform: translateY(-50%) rotate(90deg);
    padding: 0.2rem;
    background: #000;
    border-radius: 0.2rem;
  }
`;
