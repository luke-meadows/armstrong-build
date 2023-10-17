import styled from 'styled-components';
import Img1 from '../public/images/dummy-project-images/dining.jpg';
import Img2 from '../public/images/dummy-project-images/hall.jpg';
import Img3 from '../public/images/dummy-project-images/livingr.jpg';
import Img4 from '../public/images/dummy-project-images/livingr2.jpg';
import Image from 'next/image';
export default function ProjectInfoImages() {
  return (
    <StyledProjectInfoImages>
      <div className="image-container">
        <Image src={Img1} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img2} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img3} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img4} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img1} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img2} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img3} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img4} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img1} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img2} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img3} layout="fill" objectFit="cover" />
      </div>
      <div className="image-container">
        <Image src={Img4} layout="fill" objectFit="cover" />
      </div>
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
