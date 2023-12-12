import styled from 'styled-components';
import Container from './Container.js';
import Image from 'next/image.js';
import SMASImage from '../public/images/accreditation-images/smas-logo.png';
import CHASImage from '../public/images/accreditation-images/chas-logo.png';
import Logo from './Logo.js';
import SocialLinks from './SocialLinks.js';
import LocationPinIcon from '../public/images/icons/location-pin.svg';
import Link from 'next/link.js';
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div className="inner-footer">
          <div className="address">
            <div className="address-first-line">
              <div className="location-pin">
                <div className="location-pin-container">
                  <Image
                    src={LocationPinIcon}
                    layout="responsive"
                    objectFit="fill"
                  />
                </div>
              </div>
              <p className="address-header">Head Office</p>
            </div>
            <p>Unit 3, Partons Road, Kings Heath </p>
            <p>Birmingham </p>
            <p>B14 6TA</p>
            <p>T: 0121 441 5222</p>
          </div>

          <div className="accreditations">
            <div className="accreditation-container">
              <Image src={SMASImage} layout="fill" objectFit="" />
            </div>
            <div className="accreditation-container">
              <Image src={CHASImage} layout="fill" objectFit="" />
            </div>
          </div>

          <div className="logo-and-socials">
            <Logo width="200px" />
            <SocialLinks />
          </div>
        </div>
      </Container>
      <div className="footer-nav">
        <nav>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/news">News</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  border-top: 1px solid #646464;

  background: #000;
  color: white;
  padding: 2rem 0 1rem 0;
  .inner-footer {
    display: flex;
    justify-content: space-between;
  }
  .address {
    flex: 1;
    p {
      margin: 0.5rem;
      color: #cdcdcd;
    }
    .address-header {
      color: #ffdc00;
      font-weight: 600;
      padding-left: 0.5rem;
    }
  }
  .address-first-line {
    display: flex;
    align-items: center;
  }

  .location-pin {
    transform: translate(50%, -70%);
    background: #000;
    border-radius: 0.2rem;
  }
  .location-pin-container {
    position: relative;
    width: 1rem;
    height: 0.75rem;

    svg {
      fill: blue;
    }
  }
  .accreditations {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }
  .accreditation-container {
    position: relative;
    min-width: 12rem;
    height: 7rem;
    border-radius: 0.3rem;
    overflow: hidden;
  }
  .logo-and-socials {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 1.4rem;
  }
  .footer-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #646464;
    nav {
      display: flex;
      justify-content: center;
      gap: 1.6rem;
    }
    a {
      font-size: 0.8rem;
      padding: 0.75rem 0;
      font-weight: 00;
      text-decoration: underline;
      color: #cdcdcd;
    }
  }
`;
