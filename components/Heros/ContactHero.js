import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/contact-hero.jpg';
import { StyledHero } from './HomeHero';
export default function NewBuildHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Contact us</h1>
              <p className="text">
                Our team of experienced professionals is eager to provide
                exceptional customer service and guidance to ensure your
                project&apos;s success.
              </p>
              <div className="contact-buttons">
                <div>
                  <h5>Phone</h5>
                  <p>0121 441 5222</p>
                </div>
                <div>
                  <h5>Email</h5>
                  <p>info@armstrongbuild.com</p>
                </div>
                <div>
                  <h5>Opening Hours</h5>
                  <p>Monday &mdash; Friday: 9am &mdash; 5:30pm</p>
                </div>
                <div>
                  <h5>Address</h5>
                  <p>Unit 3, Partons Road, Kings Heath Birmingham B14 6TA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <Image
              src={HeroImg}
              layout="fill"
              objectFit="cover"
              alt="diggers"
            />
          </div>
        </div>
      </Container>
    </StyledHero>
  );
}
