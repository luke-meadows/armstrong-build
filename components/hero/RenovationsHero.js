import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/project-images/023/7.jpg';
import { StyledHero } from './HomeHero';
import Button from '../Button';
export default function RenovationsHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Renovations</h1>
              <p className="text">
                At Armstrong Build, we understand that a well-executed
                renovation can redefine your daily living experience. Whether
                you envision a sleek and efficient kitchen, a spa-like bathroom
                retreat, or a complete home makeover, our team of skilled
                professionals is dedicated to bringing your vision to fruition.
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
