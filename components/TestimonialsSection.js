import styled from 'styled-components';
import Container from './Container';
import { Slide } from 'react-slideshow-image';
import TestimonialItem from '../components/TestimonialItem';
import { testimonialData } from '../lib/testimonial-data';

export default function TestimonialsSection() {
  return (
    <TestimonialsContainer>
      <div className="inner-container">
        <StyledTestimonialsSection>
          <div className="slide-container">
            <div className="large-screen-testimonials">
              <Slide>
                <div className="box">
                  <TestimonialItem testimonial={testimonialData[0]} />
                  <TestimonialItem testimonial={testimonialData[1]} />
                </div>
                <div className="box">
                  <TestimonialItem testimonial={testimonialData[2]} />
                  <TestimonialItem testimonial={testimonialData[3]} />
                </div>
              </Slide>
            </div>
            <div className="small-screen-testimonials">
              <Slide>
                <div className="box">
                  <TestimonialItem testimonial={testimonialData[0]} />
                </div>
                <div className="box">
                  <TestimonialItem testimonial={testimonialData[1]} />
                </div>
                <div className="box">
                  <TestimonialItem testimonial={testimonialData[2]} />
                </div>
                <div className="box">
                  <TestimonialItem testimonial={testimonialData[3]} />
                </div>
              </Slide>
            </div>
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
    grid-template-columns: repeat(2, 1fr);
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
  .small-screen-testimonials {
    display: none;
  }
  .large-screen-testimonials {
    display: initial;
  }
  @media only screen and (max-width: 1000px) {
    .box {
      grid-template-columns: repeat(1, 1fr);
    }

    .small-screen-testimonials {
      display: initial;
    }
    .large-screen-testimonials,
    .default-nav {
      display: none;
    }
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
