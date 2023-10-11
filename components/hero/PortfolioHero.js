import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/services-hero.jpeg';
import { StyledHero } from './HomeHero';
export default function PortfolioHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Portfolio</h1>
              <p className="text">
                Welcome to our portfolio page, where we proudly showcase our
                expertise and craftsmanship in building remarkable structures.
                With years of industry experience and a commitment to
                excellence, we have successfully completed a diverse range of
                construction projects.
              </p>
            </div>
            <button>Contact us today</button>
          </div>
          <div className="right-side">
            <Image
              src={HeroImg}
              layout="fill"
              objectFit="cover"
              alt="diggers"
              priority
            />
          </div>
        </div>
      </Container>
    </StyledHero>
  );
}
