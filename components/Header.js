import styled from 'styled-components';
import Container from './Container';
import Link from 'next/link';
import Logo from './Logo';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
const headerVariant = {
  static: {
    opacity: 0,
    zIndex: 0,
  },
  initial: {
    opacity: '0',
    zIndex: 0,
  },
  enter: {
    opacity: 1,
    zIndex: 4,

    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    zIndex: '-1',
    transition: { duration: 0.3 },
  },
};
export default function Header() {
  const [showSubHeader, setShowSubHeader] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <StyledOuterHeader>
        <Container>
          <StyledHeader>
            <Link href="/">
              <div className="logo-home-link">
                <Logo />
              </div>
            </Link>
            <nav>
              <Link href="/">
                <a href="" onMouseEnter={() => setShowSubHeader(false)}>
                  Home
                </a>
              </Link>
              <Link href="/services">
                <a href="" onMouseEnter={() => setShowSubHeader(true)}>
                  Services <i className="icon-angle-down" />
                </a>
              </Link>
              <Link href="/portfolio">
                <a href="" onMouseEnter={() => setShowSubHeader(false)}>
                  Portfolio
                </a>
              </Link>
              <Link href="/faq">
                <a href="" onMouseEnter={() => setShowSubHeader(false)}>
                  FAQ
                </a>
              </Link>
              <Link
                href="/contact"
                onMouseEnter={() => setShowSubHeader(false)}
              >
                <a className="contact-button">Contact us</a>
              </Link>
            </nav>
          </StyledHeader>
        </Container>
        {showSubHeader && (
          <StyledSubHeader
            variants={headerVariant}
            initial="initial"
            animate="enter"
            exit="exit"
            onMouseLeave={() => setShowSubHeader(false)}
          >
            <div className="inner-container">
              <h3>Services</h3>
              <nav>
                <Link href="/services/healthcare">Healthcare</Link>
                <Link href="/services/commercial">Commercial</Link>
                <Link href="/services/new-build">New Build</Link>
                <Link href="/services/extensions">Extensions</Link>
                <Link href="/services/sustainable">Sustainable</Link>
                <Link href="/services/renovations">Renovations</Link>
              </nav>
            </div>
          </StyledSubHeader>
        )}
      </StyledOuterHeader>
    </AnimatePresence>
  );
}
const StyledOuterHeader = styled.div`
  background: #fff;
  margin-bottom: 4rem;
  height: fit-content;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5 !important;
  nav {
    display: flex;
    a {
      font-size: 0.9rem;
      padding: 0.75rem 0;
      font-weight: 500;
      height: 100%;
      position: relative;
      display: block;
      padding: 3rem 1.5rem;
    }
    i {
      color: #000;
    }
    .contact-button {
      background: #ffdc00;
      padding: 0.75rem 1.2rem;
      border-radius: 0.3rem;
      margin: auto;
      margin-left: 1rem;
    }
  }
  .logo-home-link {
    cursor: pointer;
  }
`;

const StyledSubHeader = styled(motion.div)`
  position: relative;
  z-index: 4;
  background: #000;
  width: 100%;
  padding: 1rem 0;
  .inner-container {
    max-width: 1400px;
    padding: 0 4rem;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    @media only screen and (max-width: 700px) {
      padding: 0 1rem;
    }
  }
  h3 {
    margin: 0;
    padding: 0;
    color: #eaeaea;
  }
  nav {
    padding: 1.5rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  a {
    font-size: 0.8rem;
    font-weight: 500;
    color: #000;
    background: #ffdc00;
    padding: 0.6rem 1rem;
    border-radius: 0.3rem;
  }
`;
