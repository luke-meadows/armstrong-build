import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
import FilterButton from './FilterButton';
import ChevronYellow from '../public/images/icons/chevron-down.png';
import ChevronBlack from '../public/images/icons/chevron-down-black.png';
import Image from 'next/image';
import { useState } from 'react';
export default function SectionHeading({
  heading,
  noButton = false,
  filterButton = false,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Container>
      <StyledSectionHeading>
        <h2>{heading}</h2>
        {filterButton && <FilterButton />}
        {!noButton && (
          <Link href="/services">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="arrow">
                <div className="arrow-container">
                  <Image
                    src={hovered ? ChevronYellow : ChevronBlack}
                    layout="responsive"
                    objectFit="fill"
                  />
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
    background: black;
    color: #ffdc00;
    padding: 0.75rem 2rem;
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
    border-radius: 0.3rem;
    border-top: 2px solid #ffdc00;
  }
  button {
    padding: 0.75rem 1rem 0.75rem 2.7rem;
    font-weight: 500;
    position: relative;
    background: #000;
    color: #ffdc00;
    border-radius: 0.3rem;
    &:hover {
      background: #ffdc00;
      color: #000;
      .arrow {
        background: #000;
      }
    }
  }
  .arrow-container {
    position: relative;
    width: 0.8rem;
    svg {
    }
  }
  .arrow {
    position: absolute;
    left: 0.85rem;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    padding: 0.2rem;
    background: #ffdc00;
    border-radius: 0.2rem;
    transition: all 0.3s ease;
  }
`;
