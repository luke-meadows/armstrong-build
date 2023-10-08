import styled from 'styled-components';
import Container from '../Container';
import Image from 'next/image';
import IntroImageConsultation from '../../public/images/service-intro-images/healthcare-consultation.jpeg';
import IntroImageStoreroom from '../../public/images/service-intro-images/healthcare-storeroom.jpeg';
import IntroImageHVAC from '../../public/images/service-intro-images/healthcare - HVAC.jpeg';
export default function NewBuildIntroSection() {
  return (
    <Container>
      <StyledNewBuildIntroSection>
        <div className="left">
          <Image
            src={IntroImageConsultation}
            layout="fill"
            objectFit="cover"
            alt="service-image"
          />
        </div>
        <div className="right">
          <h2>Consultation rooms</h2>
          <p>
            With our team of highly skilled architects, engineers, and builders,
            we transform your vision into a stunning reality. From initial
            concept to final completion, we handle every aspect of the
            construction process with meticulous care. Our dedication to
            excellence is reflected in the superior materials we use and the
            advanced techniques we employ.
          </p>
        </div>
        <div className="left">
          <Image
            src={IntroImageStoreroom}
            layout="fill"
            objectFit="cover"
            alt="service-image"
          />
        </div>
        <div className="right">
          <h2>Storerooms</h2>
          <p>
            With our team of highly skilled architects, engineers, and builders,
            we transform your vision into a stunning reality.From initial
            concept to final completion, we handle every aspect of the
            construction process with meticulous care. Our dedication to
            excellence is reflected in the superior materials we use and the
            advanced techniques we employ.
          </p>
        </div>
        <div className="left">
          <Image
            src={IntroImageHVAC}
            layout="fill"
            objectFit="cover"
            alt="service-image"
          />
        </div>
        <div className="right">
          <h2>HVAC system installation</h2>
          <p>
            With our team of highly skilled architects, engineers, and builders,
            we transform your vision into a stunning reality. From initial
            concept to final completion, we handle every aspect of the
            construction process with meticulous care. Our dedication to
            excellence is reflected in the superior materials we use and the
            advanced techniques we employ.
          </p>
        </div>
      </StyledNewBuildIntroSection>
    </Container>
  );
}
const StyledNewBuildIntroSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 0;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-top: 4rem;

  .left {
    position: relative;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    overflow: hidden;
  }
  .right {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem 1.4rem;
    color: #606060;
    h2,
    p {
      margin: 0 0 0.6rem 0;
    }
  }
  @media only screen and (max-width: 1235px) {
  }
`;
