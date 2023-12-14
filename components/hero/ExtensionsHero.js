import Container from '../Container';
import Image from 'next/image';
import Chevron from '../../public/images/icons/chevron-down-black.png';
import { StyledHero } from './HomeHero';
import HeroImage from '../../public/images/hero-images/extensions-hero.jpg';
export default function ProjectHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Extensions</h1>
              <p className="text">
                If you are planning to build your home extension please contact
                us. From conception through to completion we can help you with
                every stage.
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
              src={HeroImage}
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
