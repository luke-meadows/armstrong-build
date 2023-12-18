import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/healthcare-hero.jpeg';
import { StyledHero } from './HomeHero';
import Button from '../Button';
export default function HealthcareHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Healthcare</h1>
              <p className="text">
                Our expert team specialises in constructing state of the art
                healthcare facilities, ensuring precision, compliance, and a
                healing environment. Trust Armstrong Build for cutting-edge
                solutions in healthcare construction.
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
