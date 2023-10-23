import styled from 'styled-components';
import Container from './Container';
import ProjectTestimonialItem from './ProjectTestimonialItem';
import ProductInfoImages from './ProductInfoImages';

import { useEffect, useRef, useState } from 'react';
export default function ProjectInfoSection() {
  const [scrolling, setScrolling] = useState('yes');
  const [width, setWidth] = useState(640);
  const [stickBottom, setStickBottom] = useState('no');
  const [scrollTop, setScrollTop] = useState(0);
  const rightRef = useRef();
  const infoImagesRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    function onScroll() {
      // makes sure the text element is the correct width when position fixed on smaller screen sizes
      setWidth(infoImagesRef.current.offsetWidth - 1);
      let currentPosition = document.documentElement.scrollTop;
      let elementPosition = containerRef.current.offsetTop;
      let elementEndPosition =
        containerRef.current.offsetTop +
        containerRef.current.offsetHeight -
        rightRef.current.offsetHeight -
        94;

      if (currentPosition >= elementEndPosition) {
        setStickBottom('yes');
      } else {
        setStickBottom('no');
        if (elementPosition <= currentPosition - 32) {
          setScrolling('no');
          rightRef.current.classList.add('stick');
        } else {
          setScrolling('yes');
          rightRef.current.classList.remove('stick');
        }
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <div ref={containerRef} style={{ background: 'black' }}>
      <Container scrolling={scrolling}>
        <StyledProjectInfoSection stickBottom={stickBottom} width={width}>
          <div ref={infoImagesRef}>
            <ProductInfoImages />
          </div>
          <div className="right" ref={rightRef}>
            <h2>House Mansion - West Midlands</h2>
            <div className="project-info-row">
              <h4>Client:</h4>
              <p>Mr and Mrs Meadows</p>
            </div>
            <div className="project-info-row">
              <h4>Value:</h4>
              <p>£2,000,030.93</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, quia sequi? Incidunt tempore architecto doloribus. Non
              deleniti, quos temporibus aliquam ea cumque ipsa tempora odio.
              Adipisci aut quos ratione est.lorem
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, quia sequi? Incidunt tempore architecto doloribus. Non
              deleniti, quos temporibus aliquam ea cumque ipsa tempora odio.
              Adipisci aut quos ratione est.lorem
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, quia sequi? Incidunt tempore architecto doloribus. Non
              deleniti, quos temporibus aliquam ea cumque ipsa tempora odio.
              Adipisci aut quos ratione est.lorem
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, quia sequi? Incidunt tempore architecto doloribus. Non
              deleniti, quos temporibus aliquam ea cumque ipsa tempora odio.
              Adipisci aut quos ratione est.lorem
            </p>
            <div className="spacer" />
            <ProjectTestimonialItem />
            <button>Check out other new build projects</button>
          </div>
        </StyledProjectInfoSection>
      </Container>
    </div>
  );
}
const StyledProjectInfoSection = styled.section`
  padding: 4rem 0 4rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  color: #ededed;
  align-items: ${(props) => (props.stickBottom === 'yes' ? 'end' : 'start')};
  position: relative;
  .right {
    position: relative;
    width: 100%;
    border-radius: 0.3rem;
    height: fit-content;
    max-height: calc(100vh - 2rem);
    overflow: scroll !important;
    h2 {
      margin: 0 0 1rem 0;
      padding: 0.5rem 0;
      width: fit-content;
      background: #ffdc00;
      clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
      padding: 0.5rem 1.8rem;
      color: #000;
    }
    button {
      padding: 1rem 2rem;
      border: 1px solid white;
      background: #ffdc00;
      color: #000;
      font-weight: 500;
      width: 100%;
      margin-top: 1rem;
      transition: all 0.2s ease;
      border: 1px solid #ffdc00;
      &:hover {
        background: #000;
        color: #ffdc00;
      }
    }
  }
  .stick {
    position: ${(props) =>
      props.stickBottom === 'yes' ? 'absolute' : 'fixed'};
    left: calc(50% + 1rem);
    top: ${(props) => (props.stickBottom === 'yes' ? '' : '2rem')};
    bottom: ${(props) => (props.stickBottom === 'yes' ? '4rem' : '')};
    width: ${(props) => props.width}px;
  }
  .project-info-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    h4,
    p {
      margin: 0;
      font-size: 16px;
      color: white;
    }
  }
  .spacer {
    height: 0.5rem;
  }
`;
