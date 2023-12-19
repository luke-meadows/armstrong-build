import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import Image1 from '../public/images/project-images/025/1.jpg';
import Image2 from '../public/images/project-images/021/1.jpg';
import Image3 from '../public/images/project-images/022/1.jpg';
import Image4 from '../public/images/project-images/023/1.jpg';
import Image5 from '../public/images/project-images/025/6.jpg';
import Image from 'next/image';

export default function ImageSlideShow() {
  return (
    <StyledImageSlideShow>
      <Slide>
        <div className="box">
          <Image src={Image1} layout="fill" objectFit="cover" />
        </div>
        <div className="box">
          <Image
            src={Image2}
            layout="fill"
            objectFit="
            cover
          "
          />
        </div>
        <div className="box">
          <Image src={Image3} layout="fill" objectFit="cover" />
        </div>
        <div className="box">
          <Image
            src={Image4}
            layout="fill"
            objectFit="
            cover
          "
          />
        </div>
        <div className="box">
          <Image
            src={Image5}
            layout="fill"
            objectFit="
            cover
          "
          />
        </div>
      </Slide>
    </StyledImageSlideShow>
  );
}
const StyledImageSlideShow = styled.section`
  display: none;
  .box {
    height: 26rem;
    position: relative;
    p {
      color: white;
    }
    img {
      z-index: 10;
      pointer-events: none;
    }
  }
  .default-nav {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    display: initial;
  }
`;
