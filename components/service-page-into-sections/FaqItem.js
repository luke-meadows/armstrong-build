import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Chevron from '../../public/images/icons/chevron-down-black.png';

import { useState } from 'react';
import Image from 'next/image';
export default function FaqItem({ question, answer }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledFaqItem expanded={expanded} onClick={() => setExpanded(!expanded)}>
      <div className="question">
        <p> {question}</p>
        <div className="chevron-container">
          <Image src={Chevron} />
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {expanded && (
          <motion.div className="answer">
            <p> {answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledFaqItem>
  );
}
const StyledFaqItem = styled.div`
  background: #ededed;
  padding: 1rem;
  border-radius: 0.3rem;
  z-index: 0;
  cursor: pointer;
  p {
    margin: 0;
  }
  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .chevron-container {
      width: 1rem;
      transform: ${(props) => (props.expanded ? 'rotate(180deg)' : '')};
    }
    p {
      font-weight: 600;
    }
  }
  .answer {
    p {
      margin-top: 1rem;
    }
  }
`;
