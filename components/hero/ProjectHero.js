import Container from '../Container';
import Image from 'next/image';
import Chevron from '../../public/images/icons/chevron-down-black.png';
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
            <button>
              See more Renovations
              <span>
                <div className="chevron-container">
                  <Image src={Chevron} />
                </div>
              </span>
            </button>
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
