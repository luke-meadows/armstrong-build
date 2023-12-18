import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/commercial-hero.png';
import { StyledHero } from './HomeHero';
import Button from '../Button';
export default function HealthcareHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Commercial Buildings</h1>
              <p className="text">
                Armstrong Build&apos;s experienced project management team bring
                their wealth of knowledge and focus on clients satisfaction to
                every service we provide. We work closely with all parties to
                provide a high end finish to all aspect of your project. We have
                a large portfolio of completed projects across all sectors.
              </p>
            </div>
            <Button />
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
