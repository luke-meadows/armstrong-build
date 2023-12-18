import Container from '../Container';
import Image from 'next/image';
import { StyledHero } from './HomeHero';
import Button from '../Button';
export default function ProjectHero({ title, desc, image, service }) {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>{title}</h1>
              <p className="text">{desc}</p>
            </div>
            <Button />
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
