import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
import Logo from './Logo';
export default function Header() {
  return (
    <StyledOuterHeader>
      <Container>
        <StyledHeader>
          <Link href="/">
            <div className="logo-home-link">
              <Logo />
            </div>
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/">News</Link>
            <Link href="/contact">
              <a className="contact-button">Contact us</a>
            </Link>
          </nav>
        </StyledHeader>
      </Container>
    </StyledOuterHeader>
  );
}
const StyledOuterHeader = styled.div`
  background: #fff;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 4rem;
  nav {
    display: flex;
    gap: 2rem;
    a {
      font-size: 0.8rem;
      padding: 0.75rem 0;
      font-weight: 500;
    }

    .contact-button {
      background: #ffdc00;
      padding: 0.75rem 1.2rem;
      border-radius: 0.3rem;
    }
  }
  .logo-home-link {
    cursor: pointer;
  }
`;
