import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/new-builds-hero.jpg';
import Chevron from '../../public/images/icons/chevron-down-black.png';

import { StyledHero } from './HomeHero';
export default function NewBuildHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>New Build</h1>
              <p className="text">
                If you&apos;re looking for a complete new property, sourcing the
                right new build builder is one of the first steps to success.
                Here at Armstrong build we have completed numerous new builds
                for clients across the uk.
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
