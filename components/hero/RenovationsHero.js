import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/project-images/023/7.jpg';
import { StyledHero } from './HomeHero';
export default function RenovationsHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Renovations</h1>
              <p className="text">
                From initial concept to final completion, we handle every aspect
                of the construction process with meticulous care. Our dedication
                to excellence is reflected in the superior materials we use and
                the advanced techniques we employ.
              </p>
            </div>
            <button>New Build Portfolio</button>
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
