import styled from 'styled-components';
import IntroImage from '../../public/images/service-intro-images/new-builds.jpg';
import IntroImage2 from '../../public/images/service-intro-images/new-builds2.jpg';
import IntroImage3 from '../../public/images/service-intro-images/new-builds3.jpg';
import IntroImage4 from '../../public/images/service-intro-images/new-builds4.jpg';
import IntroImage5 from '../../public/images/service-intro-images/new-builds5.jpg';
import Image from 'next/image';
import { useState } from 'react';
export default function ServiceIntroImageDisplay() {
  const images = [
    IntroImage,
    IntroImage2,
    IntroImage3,
    IntroImage4,
    IntroImage5,
  ];
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <StyledServiceIntroImageDisplay>
      <div className="left">
        <div className="image-preview">
          <div className="image-container">
            <Image
              src={activeImage}
              layout="fill"
              objectFit="cover"
              alt="service-image"
            />
          </div>
        </div>
        <div className="image-grid">
          {images.map((image, i) => {
            return (
              <div
                className={`image-container ${
                  activeImage === image ? 'active' : ''
                }`}
                onClick={() => setActiveImage(images[i])}
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  alt="service-image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </StyledServiceIntroImageDisplay>
  );
}
const StyledServiceIntroImageDisplay = styled.div`
  width: 50%;
  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
  }
  .image-preview {
    height: 24rem;
    padding: 1rem 0 0 1rem;
  }
  .image-grid {
    display: grid;
    gap: 0.5rem;
    padding: 0.5rem 0 1rem 1rem;
    grid-template-columns: repeat(5, 1fr);
    .image-container {
      aspect-ratio: 1;
      cursor: pointer;
    }
  }
  .active {
    border: 5px solid #000;
  }
`;