import Link from 'next/link';
import styled from 'styled-components';
import ChevronYellow from '../public/images/icons/chevron-down.png';
import ChevronBlack from '../public/images/icons/chevron-down-black.png';
import { useState } from 'react';
import Image from 'next/image';
export default function Button({
  color = 'yellow',
  arrowDirection = 'right',
  text = 'Get a quote',
  url = '/contact',
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: 'fit-content' }}
    >
      <Link href={url}>
        <StyledButton color={color} arrowDirection={arrowDirection}>
          <div className="arrow">
            <div className="arrow-container">
              <Image
                src={hovered ? ChevronYellow : ChevronBlack}
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div>
          {text}
        </StyledButton>
      </Link>
    </div>
  );
}
const StyledButton = styled.button`
  padding: ${(props) =>
    props.arrowDirection === 'left'
      ? '0.75rem 1rem 0.75rem 2.7rem'
      : '0.75rem 2.7rem 0.75rem 1rem'};
  font-weight: 500;
  position: relative;
  background: ${(props) =>
    props.color === 'yellow' ? 'var(--yellow)' : 'var(--black)'};
  color: #000;
  border-radius: 0.3rem;
  &:hover {
    background: #ffdc00;
    color: #000;
    .arrow {
      background: #000;
    }
  }
  .arrow-container {
    position: relative;
    width: 0.8rem;
  }
  .arrow {
    position: absolute;
    left: ${(props) => (props.arrowDirection === 'left' ? '0.85rem' : '')};
    right: ${(props) => (props.arrowDirection === 'right' ? '0.85rem' : '')};
    top: 50%;
    transform: ${(props) =>
      props.arrowDirection === 'left'
        ? 'translateY(-50%) rotate(90deg)'
        : 'translateY(-50%) rotate(270deg)'};
    padding: 0.2rem;
    background: ${(props) =>
      props.color === 'yellow' ? 'var(--yellow)' : 'var(--black)'};
    border-radius: 0.2rem;
    transition: all 0.3s ease;
  }
`;
