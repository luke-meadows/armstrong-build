import { useEffect, useState } from 'react';
import styled from 'styled-components';
export default function ServiceGridItemMaximised({ service, cardCoords }) {
  return (
    <StyledServiceGridItem cardCoords={cardCoords}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        deserunt asperiores officia est, molestiae dolores, sit unde minima
        obcaecati iusto facere totam natus, iure velit sunt pariatur deleniti
        temporibus ab reiciendis.
      </p>
      <div className="service-grid-item-text">
        <div>
          <h3>{service.title}</h3>
        </div>
      </div>
    </StyledServiceGridItem>
  );
}
const StyledServiceGridItem = styled.div`
  height: 200px;
  padding: 1rem;
  border-radius: 0.3rem;
  background: black;
  color: #fff;
  position: absolute;
  width: calc(33.33333% - 1.3rem);
  z-index: 1;
  top: ${(props) => props.cardCoords.top};
  left: ${(props) => props.cardCoords.left};
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
    margin: 0;
  }
`;
