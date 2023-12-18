import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/services-hero.jpeg';
import { StyledHero } from './HomeHero';
import Chevron from '../../public/images/icons/chevron-down-black.png';

import Link from 'next/link';
import Button from '../Button';
export default function ServicesHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div className="hero-text-top">
              <h1>Services</h1>
            </div>
            <p className="text">
              From initial concept to final completion, we handle every aspect
              of the construction process with meticulous care. Our dedication
              to excellence is reflected in the superior materials we use and
              the advanced techniques we employ.
            </p>
            <Link href="/contact">
              <Button />
            </Link>
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
