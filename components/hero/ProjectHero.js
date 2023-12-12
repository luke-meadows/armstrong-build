import Container from '../Container';
import Image from 'next/image';
import Chevron from '../../public/images/icons/chevron-down-black.png';
import { StyledHero } from './HomeHero';
import Link from 'next/link';
export default function ProjectHero({ title, desc, image, service }) {
  const linkCodes = {
    Healthcare: 'healthcare',
    Commercial: 'commercial',
    'New Build': 'new-build',
    Extension: 'extensions',
    Sustainable: 'sustainable',
    Renovation: 'renovations',
  };
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>{title}</h1>
              <p className="text">{desc}</p>
            </div>
            <Link href={`/services/${linkCodes[service]}`}>
              <button>
                See more {service}
                <span>
                  <div className="chevron-container">
                    <Image src={Chevron} />
                  </div>
                </span>
              </button>
            </Link>
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
