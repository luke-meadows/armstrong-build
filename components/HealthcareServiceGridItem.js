import Image from 'next/image';
import styled from 'styled-components';
import ServiceGridItemMaximised from './ServiceGridItemMaximised';
import { useEffect, useRef, useState } from 'react';
export default function ServiceGridItem({ service }) {
  const gridItemRef = useRef();
  const [cardCoords, setCardCoords] = useState();
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    setCardCoords({
      left: gridItemRef.current.offsetLeft,
      top: gridItemRef.current.offsetTop,
    });
  });
  useEffect(() => {
    console.log('change');
  }, [cardCoords]);
  function handleItemHover(e) {
    setCardCoords({
      left: e.currentTarget.offsetLeft,
      top: e.currentTarget.offsetTop,
    });
    setHovered(true);
  }
  return (
    <div className="outer-grid-item" onMouseLeave={() => setHovered(false)}>
      {hovered && (
        <ServiceGridItemMaximised service={service} cardCoords={cardCoords} />
      )}
      <StyledServiceGridItem onMouseEnter={handleItemHover} ref={gridItemRef}>
        <div className="image-container">
          <Image
            src={service.img}
            layout="fill"
            objectFit="cover"
            alt="service card image"
          />
        </div>
        <div className="service-grid-item-text">
          <div>
            <h3>{service.title}</h3>
          </div>
        </div>
      </StyledServiceGridItem>
    </div>
  );
}
export const StyledServiceGridItem = styled.div`
  border-radius: 0.3rem;
  background: #f6f6f6;
  color: #606060;
  position: relative;
  .service-grid-item-text {
    padding: 0 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 0;
    background: #ffdc00;
    padding: 0.5rem 1.2rem;
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
    border-radius: 0.2rem;
    width: fit-content;
    color: #000;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }
  button {
    border: 1px solid #000;
    background: #000;
    color: #ffdc00;
    width: 100%;
    padding: 1rem 0;
    transition: all 0.2s ease;
    &:hover {
      background: #ffdc00;
      border: 1px solid #ffdc00;
      color: #000;
      font-weight: 500;
    }
  }
  .image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-radius: 0.3rem;
  }
`;
