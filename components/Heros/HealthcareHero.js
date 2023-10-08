import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/healthcare-hero.jpeg';
import { StyledHero } from './HomeHero';
export default function HealthcareHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Healthcare</h1>
              <p className="text">
                Welcome to our Health Buildings Service page, where we
                specialise in constructing state-of-the-art facilities that
                promote the well-being of individuals and communities.
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
            />
          </div>
        </div>
      </Container>
    </StyledHero>
  );
}
