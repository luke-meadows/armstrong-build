import styled from 'styled-components';
import Container from './Container';
import Loader from './Loader';
import Logo from './Logo';

export default function Showreel({ id = '871787555' }) {
  return (
    <Container>
      <StyledShowreel>
        <iframe
          src={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&byline=0&title=0muted=1`}
          frameBorder="0"
        ></iframe>
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
  height: 40rem;
  overflow: hidden;
  margin-bottom: 4rem;
  background: #000;
  z-index: 1;
  iframe {
    width: 100%;
    min-height: 112%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    scale: 1;
    z-index: 3;
  }
  .logo-container {
    z-index: 4;
    position: absolute;
    bottom: 1.8rem;
    right: 1.8rem;
  }
`;
