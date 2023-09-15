import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
import Logo from './Logo';
export default function Header() {
  return (
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
          <Link href="/">Projects</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">
            <a className="contact-button">Contact Us</a>
          </Link>
        </nav>
      </StyledHeader>
    </Container>
  );
}
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
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
