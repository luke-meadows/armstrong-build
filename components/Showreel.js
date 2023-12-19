import styled from 'styled-components';
import Container from './Container';
import Loader from './Loader';
import Logo from './Logo';
import { useEffect, useRef } from 'react';
import ImageSlideShow from './ImageSlideShow';

export default function Showreel({ id = '871787555', coupled = false }) {
  return (
    <Container noGapMobile>
      <StyledShowreel coupled={coupled}>
        <iframe
          src={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&byline=0&title=0muted=1&allow=autoplay`}
          frameBorder="0"
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
