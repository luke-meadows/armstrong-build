import Image from 'next/image';
import styled from 'styled-components';
import ServiceIntroImageDisplay from './service-page-into-sections/ServiceIntroImageDisplay';
import ServicePromises from './service-page-into-sections/ServicePromises';
import ChevronYellow from '../public/images/icons/chevron-down.png';
import ChevronBlack from '../public/images/icons/chevron-down-black.png';
import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';
export default function ServiceInformation({
  service,
  itemClicked = false,
  setItemClicked = false,
  closeButton = false,
  padding = true,
  marginBottom = true,
  title = true,
  imageTitle = false,
}) {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <StyledServiceInformation
      itemClicked={itemClicked}
      padding={padding}
      marginBottom={marginBottom}
    >
      <div className="image-display-container">
        <ServiceIntroImageDisplay images={service.images} />
      </div>
      {imageTitle && (
        <div className="service-grid-item-heading">
          <div>
            <h3>{service.title}</h3>
          </div>
        </div>
      )}

      <div className="right">
        <div>
          <div className="right-top-container">
            {title && <h2>Built from the ground up!</h2>}

            {closeButton && (
              <div
                className="close-button"
                onClick={() => setItemClicked(false)}
              >
                <button
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <div className="arrow">
                    <div className="arrow-container">
                      <Image
                        src={buttonHovered ? ChevronYellow : ChevronBlack}
                        layout="responsive"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                  Back
                </button>
              </div>
            )}
            {closeButton && (
              <div
                className="close-button"
                onClick={() => setItemClicked(false)}
              >
                <button
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <div className="arrow">
                    <div className="arrow-container">
                      <Image
                        src={buttonHovered ? ChevronYellow : ChevronBlack}
                        layout="responsive"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                  Back
                </button>
              </div>
            )}
            {closeButton && (
              <div
                className="close-button"
                onClick={() => setItemClicked(false)}
              >
                <button
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <div className="arrow">
                    <div className="arrow-container">
                      <Image
                        src={buttonHovered ? ChevronYellow : ChevronBlack}
                        layout="responsive"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                  Back
                </button>
              </div>
            )}
            {closeButton && (
              <div
                className="close-button"
                onClick={() => setItemClicked(false)}
              >
                <button
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <div className="arrow">
                    <div className="arrow-container">
                      <Image
                        src={buttonHovered ? ChevronYellow : ChevronBlack}
                        layout="responsive"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                  Back
                </button>
              </div>
            )}
            {closeButton && (
              <div
                className="close-button"
                onClick={() => setItemClicked(false)}
              >
                <button
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                >
                  <div className="arrow">
                    <div className="arrow-container">
                      <Image
                        src={buttonHovered ? ChevronYellow : ChevronBlack}
                        layout="responsive"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                  Back
                </button>
              </div>
            )}
          </div>
          {service.description.map((p, i) => {
            return <p key={i}>{p}</p>;
          })}
        </div>
        <div>
          <ServicePromises promises={service.promises} />
        </div>
      </div>
    </StyledServiceInformation>
  );
}
const StyledServiceInformation = styled.div`
  padding: ${(props) => (props.padding ? '1rem' : '')};
  display: flex;
  gap: 2rem;
  border-radius: 0.3rem;
  color: #606060;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  margin-bottom: ${(props) => (props.marginBottom ? '4rem' : '')};

  .image-display-container {
    width: 50%;
  }
  .image-display-container {
    flex: 1;
  }
  .service-grid-item-heading {
    padding: 0 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    top: 1rem;
    left: 1rem;
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
  }
  .right {
    color: #606060;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 1rem;
    h2 {
      margin: 0;
      padding: 0;
      color: #000;
      margin-top: 0.5rem;
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
`;
