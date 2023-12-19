import styled from 'styled-components';
import ServiceIntroImageDisplay from './service-page-into-sections/ServiceIntroImageDisplay';
import { useState } from 'react';
export default function ServiceInformation({ service }) {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <StyledServiceInformation>
      <div className="right">
        <div className="right-top-container">
          {service.title && <h2>{service.title}</h2>}
        </div>
        {service.description.map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
      </div>
      <div className="image-display-container">
        <ServiceIntroImageDisplay images={service.images} />
      </div>
    </StyledServiceInformation>
  );
}
const StyledServiceInformation = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  border-radius: 0.3rem;
  color: #ededed;
  background: #000;
  position: relative;
  margin-bottom: 2rem;
  .image-display-container {
    width: 50%;
  }
  .image-display-container {
    flex: 1;
  }
  .right {
    color: #ededed;
    display: flex;
    flex-direction: column;
    flex: 1;
    p {
      margin-top: 0;
    }
    h2 {
      font-size: 1.4rem;
      margin: 0 0 1rem 0;
      color: var(--yellow);
      font-weight: 500;
      margin: 0;
      padding: 0;
    }
    .right-top-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
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

  @media only screen and (max-width: 1235px) {
    flex-direction: column;
    gap: 1rem;
    .image-display-container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 2rem 1rem;
    border-radius: 0;
    .right {
      h2 {
        font-size: 2rem;
      }
    }
  }
`;
