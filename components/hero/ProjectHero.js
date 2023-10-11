import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/services-hero.jpeg';
import { StyledHero } from './HomeHero';
export default function ProjectHero({ title, desc, image }) {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>{title}</h1>
              <p className="text">{desc}</p>
            </div>
            <button>See more Renovations</button>
          </div>
          <div className="right-side">
            <Image
              src={image}
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
