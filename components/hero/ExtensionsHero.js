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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                veritatis a voluptatem vero doloremque maxime aliquid nesciunt
                at fugit impedit!
              </p>
            </div>
            <button>
              See more Extensions
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
