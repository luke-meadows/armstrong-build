import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/faq-hero.jpg';
import Chevron from '../../public/images/icons/chevron-down-black.png';

import { StyledHero } from './HomeHero';
export default function HealthcareHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>FAQ</h1>
              <p className="text">
                If you can't find your answer below, please contact us and one
                of the team will be happy to help.
              </p>
            </div>
            <button>
              Contact us{' '}
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
