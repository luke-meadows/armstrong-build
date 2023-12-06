import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
export default function ServiceIntroImageDisplay({ images }) {
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
        {images.length > 1 && (
          <div className="image-grid">
            {images.map((image, i) => {
              return (
                <div
                  key={i}
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
        )}
      </div>
    </StyledServiceIntroImageDisplay>
  );
}
const StyledServiceIntroImageDisplay = styled.div`
  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
  }
  .image-preview {
    height: 24rem;
  }
  .image-grid {
    display: grid;
    gap: 0.5rem;
    padding-top: 0.5rem;
    grid-template-columns: repeat(5, 1fr);
    .image-container {
      aspect-ratio: 1;
      cursor: pointer;
    }
  }
  .active {
    border: 5px solid #ffdc00;
  }
`;
