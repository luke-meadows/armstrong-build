import Container from '../Container';
import Image from 'next/image';
import Chevron from '../../public/images/icons/chevron-down-black.png';
import { StyledHero } from './HomeHero';
import HeroImage from '../../public/images/hero-images/services-hero.jpeg';
export default function ProjectHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Sustainable Buildings</h1>
              <p className="text">
                Elevate your space into the 21st century with Armstrong Build's
                sustainable appliance installation service. Harness the power of
                the sun with solar energy, conserve water with rainwater
                harvesting, and embrace eco-friendly solutions like solar
                heating systems and sustainable plant rooms.
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
