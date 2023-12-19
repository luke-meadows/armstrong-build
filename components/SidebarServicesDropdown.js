import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { sidebarDropdownVariant } from '../lib/variants';
export default function SideBarServicesDropdown({ setShowSidebar }) {
  return (
    <StyledDropdown
      variants={sidebarDropdownVariant}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={() => setShowSidebar(false)}
    >
      <Link href="/services/healthcare">
        <a className="dropdown-link" href="">
          Healthcare
        </a>
      </Link>
      <Link href="/services/commercial">
        <a className="dropdown-link" href="">
          Commercial
        </a>
      </Link>
      <Link href="/services/new-build">
        <a className="dropdown-link" href="">
          New Build
        </a>
      </Link>
      <Link href="/services/extensions">
        <a className="dropdown-link" href="">
          Extensions
        </a>
      </Link>
      <Link href="/services/sustainable">
        <a className="dropdown-link" href="">
          Sustainable
        </a>
      </Link>
      <Link href="/services/renovations">
        <a className="dropdown-link" href="">
          Renovations
        </a>
      </Link>
    </StyledDropdown>
  );
}

const StyledDropdown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 0.5rem; */
  .dropdown-link {
    font-size: 1rem !important;
    font-weight: 500;
    border-bottom: 1px solid var(--yellow2);
    width: fit-content;
    padding-right: 0.2rem;
    background: var(--yellow);
    color: #000;
    padding: 0.75rem;
    width: 100%;
    text-align: left;
    border-radius: 0.3rem;
    font-weight: 700;
  }
  @media only screen and (max-width: 900px) {
    .dropdown-link {
      font-size: 0.9rem !important;
    }
  }
`;
