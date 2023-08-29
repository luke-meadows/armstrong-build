import styled from 'styled-components';
import Container from './Container';
import Image from 'next/image';
import HeroImg from '../public/images/hero-images/home-hero.jpg';
export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">d</div>
          <div className="right-side">
            <Image src={HeroImg} layout="fill" objectFit="cover" />
          </div>
        </div>
      </Container>
    </StyledHero>
  );
}
const StyledHero = styled.section`
  .hero-inner {
    display: flex;
    border-radius: 0.3rem;
    overflow: hidden;
  }
  .left-side,
  .right-side {
    width: 50%;
    height: 20rem;
  }
  .left-side {
    background: black;
  }
  .right-side {
    background: white;
    position: relative;
  }
`;
