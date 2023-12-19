import Container from '../Container';
import Image from 'next/image';
import Chevron from '../../public/images/icons/chevron-down-black.png';
import { StyledHero } from './HomeHero';
import HeroImage from '../../public/images/hero-images/extensions-hero.jpg';
import Button from '../Button';
export default function ProjectHero() {
  return (
    <StyledHero>
      <Container noGapMobile>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Extensions</h1>
              <p className="text">
                If you&apos;re planning to expand your living space we provide a
                range of building services to help create the extension you
                desire. Our team of skilled architects, engineers, and craftsmen
                collaborate closely with you, ensuring that your vision is not
                only met but exceeded.
              </p>
            </div>
            {/* <button>
              Get a quote
              <span>
                <div className="chevron-container">
                  <Image src={Chevron} />
                </div>
              </span>
            </button> */}
            <Button />
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
