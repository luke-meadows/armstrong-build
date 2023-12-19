import styled from 'styled-components';
import Image from 'next/image';
export default function ProjectInfoImages({ images = [] }) {
  return (
    <StyledProjectInfoImages>
      {images?.map((image, i) => (
        <div className="image-container" key={i}>
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
      ))}
    </StyledProjectInfoImages>
  );
}
const StyledProjectInfoImages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .image-container {
    width: 100%;
    height: 22rem;
    position: relative;
    border-radius: 0.3rem;
    overflow: hidden;
  }
`;
