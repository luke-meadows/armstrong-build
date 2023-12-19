import styled from 'styled-components';
import Container from './Container';
import Loader from './Loader';
import Logo from './Logo';
import { useEffect, useRef } from 'react';
import ImageSlideShow from './ImageSlideShow';

export default function Showreel({ id = '871787555', coupled = false }) {
  return (
    <Container>
      <StyledShowreel coupled={coupled}>
        <iframe
          src={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&byline=0&title=0muted=1&allow=autoplay`}
          frameBorder="0"
          muted="1"
          autoplay="1"
          allow="autoplay"
        ></iframe>
        <ImageSlideShow />
        <Loader />
        <div className="logo-container">
          <Logo />
        </div>
      </StyledShowreel>
    </Container>
  );
}
const StyledShowreel = styled.div`
  position: relative;
  border-radius: 0.3rem;
  border-bottom-left-radius: ${(props) => (props.coupled ? '0rem' : '0.3rem')};
  border-bottom-right-radius: ${(props) => (props.coupled ? '0rem' : '0.3rem')};
  height: 15rem;
  height: 40rem;
  overflow: hidden;
  margin-bottom: ${(props) => (props.coupled ? '0rem' : '4rem')};
  background: #000;
  z-index: 1;
  iframe {
    width: 100%;
    min-height: 112%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  .logo-container {
    z-index: 4;
    position: absolute;
    bottom: 1.8rem;
    right: 1.8rem;
  }
  @media only screen and (max-width: 1235px) {
    height: 15rem;
    height: 25rem;
  }
  @media only screen and (max-width: 900px) {
    height: 26rem;
    iframe {
      display: none;
    }
    .logo-container {
      bottom: 1rem;
      right: 1rem;
    }
  }
`;
