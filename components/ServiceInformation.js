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
        <ServiceIntroImageDisplay />
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
          <p>
            With our team of highly skilled architects, engineers, and builders,
            we transform your vision into a stunning reality.
          </p>
          <p>
            From initial concept to final completion, we handle every aspect of
            the construction process with meticulous care. Our dedication to
            excellence is reflected in the superior materials we use and the
            advanced techniques we employ.
          </p>
          <p>
            You can expect a seamless and efficient experience. We prioritise
            open communication, ensuring that your ideas and preferences are
            incorporated at every stage. Our commitment to timeliness and
            budgetary considerations guarantees that your project is delivered
            on schedule and within your desired investment range.
          </p>
          <p>
            Let us build the home of your dreams, tailored to your unique style
            and needs. Contact us today to embark on an exciting journey towards
            your ideal living space.
          </p>
        </div>
        <div>
          <ServicePromises />
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
      margin-top: 1rem;
    }
    .right-top-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
  }
`;
