import Image from 'next/image';
import styled from 'styled-components';
import BackgroundImg from '../public/images/background/background-image.jpeg';
export default function Background() {
  return (
    <StyledBackground>
      <div className="inner-background">
        <Image
          src={BackgroundImg}
          layout="fill"
          objectFit="cover"
          alt="background image"
          priority
          placeholder="blur"
        />
      </div>
    </StyledBackground>
  );
}
const StyledBackground = styled.div`
  position: fixed;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;

  .inner-background {
    position: relative;
    height: 100%;
    width: 100%;
  }
`;
