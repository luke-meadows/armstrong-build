import styled from 'styled-components';
import Container from './Container.js';
import Image from 'next/image.js';
import SMASImage from '../public/images/accreditation-images/smas-logo.png';
import CHASImage from '../public/images/accreditation-images/chas-logo.png';
import Logo from './Logo.js';
import SocialLinks from './SocialLinks.js';
import Link from 'next/link.js';
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div className="inner-footer">
          <div className="address">
            <p>Head Office</p>
            <p>Unit 3, Partons Road, Kings Heath </p>
            <p>Birmingham </p>
            <p>B14 6TA</p>
            <p>T: 0121 441 5222</p>
          </div>

          <div className="accreditations">
            <div className="accreditation-container">
              <Image src={SMASImage} layout="fill" objectFit="contain" />
            </div>
            <div className="accreditation-container">
              <Image src={CHASImage} layout="fill" objectFit="contain" />
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
          <Link href="/portfolio">Projects</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  margin-top: 4rem;
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
  }
  .accreditations {
    display: flex;

    justify-content: center;
    gap: 1rem;
    flex: 1;
  }
  .accreditation-container {
    position: relative;
    width: 8rem;
    height: 8rem;
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
