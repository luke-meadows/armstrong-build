import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
import Logo from './Logo';
export default function Header() {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Projects</Link>
          <Link href="/">FAQ</Link>
          <a className="contact-button">
            <Link href="/">Contact Us</Link>
          </a>
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
      padding: 0.5rem 0;
    }
    .contact-button {
      background: #ffdc00;
      padding: 0.5rem 0.75rem;
      border-radius: 0.3rem;
    }
  }
`;
