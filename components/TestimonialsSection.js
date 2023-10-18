import styled from 'styled-components';
import Container from './Container';
import { Slide } from 'react-slideshow-image';
import TestimonialItem from './TestimonialItem';

export default function TestimonialsSection() {
  return (
    <TestimonialsContainer>
      <div className="inner-container">
        <StyledTestimonialsSection>
          <div className="slide-container">
            <Slide>
              <div className="box">
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
              </div>
              <div className="box">
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
              </div>
            </Slide>
          </div>
        </StyledTestimonialsSection>
      </div>
    </TestimonialsContainer>
  );
}
const StyledTestimonialsSection = styled.section`
  margin-bottom: 4rem;
  .box {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    background-size: cover;
    height: 26rem;
    margin: 0 3rem;
  }
  .default-nav {
    outline: none;
    background: none;
    height: 2.2rem;
    width: 2.2rem;
    background: #ffdc00;
    svg {
      fill: #000;
      height: 50%;
    }
  }
  .default-nav:focus {
    background: none;

    background: #ffdc00;
  }
  .default-nav:hover {
    background: #ffdc00;
  }
`;

const TestimonialsContainer = styled.div`
  .inner-container {
    max-width: 1400px;
    padding: 0 1rem;
    margin: 0 auto;
    @media only screen and (max-width: 700px) {
      margin: 0 -2.8rem;
    }
  }
`;
