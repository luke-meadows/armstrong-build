import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/healthcare-hero.jpeg';
import Chevron from '../../public/images/icons/chevron-down-black.png';

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
                Elevate healthcare infrastructure with Armstrong Build. Our
                expert team specialises in constructing state of the art
                healthcare facilities, ensuring precision, compliance, and a
                healing environment. Trust Armstrong Build for cutting-edge
                solutions in healthcare construction.
              </p>
            </div>
            <button>
              Get a quote
              <span>
                <div className="chevron-container">
                  <Image src={Chevron} />
                </div>
              </span>
            </button>
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
