import styled from 'styled-components';
import Container from './Container';
import { useEffect } from 'react';
export default function Showreel() {
  useEffect(() => {
    console.log('rendered');
  });
  return (
    <Container>
      <StyledShowreel>
        <iframe
          onLoad={(e) => console.log(e)}
          src={`https://player.vimeo.com/video/871787555?background=1&autoplay=1&loop=1&byline=0&title=0muted=1`}
          frameBorder="0"
        ></iframe>
      </StyledShowreel>
    </Container>
  );
}
const StyledShowreel = styled.div`
  position: relative;
  border-radius: 0.3rem;
  height: 40rem;
  overflow: hidden;
  margin-top: 4rem;
  iframe {
    width: 100%;
    height: 56.25vw;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    scale: 1;
  }
`;
