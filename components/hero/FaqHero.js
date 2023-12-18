import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/faq-hero.jpg';
import { StyledHero } from './HomeHero';
import Button from '../Button';
export default function HealthcareHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>FAQ</h1>
              <p className="text">
                If you can&apos;t find your answer below, please contact us and
                one of the team will be happy to help.
              </p>
            </div>
            <Button text="Contact us" />
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
