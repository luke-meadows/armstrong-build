import styled from 'styled-components';
import { enableScroll, disableScroll } from '../lib/scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { sidebarInnerVariant, sidebarVariant } from '../lib/variants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SideBarServicesDropdown from './SidebarServicesDropdown';
import Button from '../components/Button';

export default function SideBar({ setShowSidebar }) {
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  });

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <StyledSideBar
      variants={sidebarVariant}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={sidebarInnerVariant}
        initial="initial"
        animate="enter"
        exit="exit"
        className="sidebar-inner"
      >
        <div className="top-section">
          <h2>Menu </h2>
          <Button text="CLOSE" />
        </div>
        <nav>
          <p
            onClick={() => setShowDropdown(!showDropdown)}
            className="what-we-do"
          >
            Services <i className="icon-angle-down" />
          </p>
          <AnimatePresence initial={false}>
            {showDropdown && (
              <SideBarServicesDropdown
                key="sidebarDropdown"
                setShowSidebar={setShowSidebar}
              />
            )}
          </AnimatePresence>
          <Link href="/portfolio">
            <a href="" onClick={() => setShowSidebar(false)}>
              Portfolio
            </a>
          </Link>
          <Link href="/faq">
            <a href="" onClick={() => setShowSidebar(false)}>
              FAQ
            </a>
          </Link>
          <Link href="/contact">
            <a href="" onClick={() => setShowSidebar(false)}>
              Contact us
            </a>
          </Link>
        </nav>
        <div className="socials">
          <a
            target="blank"
            href="https://www.linkedin.com/company/86046305"
            alt="LinkedIn"
          >
            <div className="i-container">
              <i className="icon-instagram" />
            </div>
          </a>
        </div>
      </motion.div>
    </StyledSideBar>
  );
}

const StyledSideBar = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0rem;
  height: 100vh;
  width: 100%;
  display: flex;
  background: #fff;
  z-index: 10;
  color: var(--dark-grey);
  overflow: hidden;
  .top-section {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  i {
    margin-left: -0.2rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      color: var(--teal);
    }
  }
  h2 {
    margin-left: 0;
    font-weight: 500;

    margin: 0;
    border-bottom: 3px solid var(--yellow2);
  }
  nav {
    display: flex;
    flex-direction: column;
    height: calc(100% - 10rem);
    gap: 1rem;
    a,
    .what-we-do {
      font-size: 2rem !important;
      margin: 0.25rem 0;
      text-align: right;
      cursor: pointer;
    }
  }

  .image-container {
    position: relative;
    height: calc(100vh - 5rem);
    width: 20%;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  .sidebar-inner {
    width: 100%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 5rem;
    position: relative;
    text-align: right;

    .socials {
      position: absolute;
      right: 5rem;
      bottom: 3rem;
      .i-container {
        background: var(--yellow2);
        border-radius: 50%;
        height: 2.4rem;
        width: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          font-size: 1.1rem;
          color: var(--dark-grey);
          margin: 0;
          margin-left: 0.15rem;
        }
      }
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100vw;
    padding: 0 1rem;
    .sidebar-inner {
      padding-right: 0;
      width: 100vw;
      .socials {
        right: 0;
      }
    }
    h2 {
      font-size: 3rem;
    }
    a,
    .what-we-do {
      font-size: 1.4rem !important;
    }
  }
  @media only screen and (min-width: 1800px) {
    width: 30rem;
    .sidebar-inner {
      padding-right: 0rem;
    }
    h2 {
      font-size: 2.6rem;
    }
    a,
    .what-we-do {
      font-size: 1.6rem !important;
    }
  }
`;
