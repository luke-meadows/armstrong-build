import styled from 'styled-components';
import Container from '../Container';
import Image from 'next/image';
import IntroImage from '../../public/images/service-intro-images/new-builds.jpg';
export default function NewBuildIntroSection() {
  return (
    <Container>
      <StyledNewBuildIntroSection>
        <div className="left">
          <Image
            src={IntroImage}
            layout="fill"
            objectFit="cover"
            alt="service-image"
          />
        </div>
        <div className="right">
          <h2>Built from the ground up</h2>
          <p>
            With our team of highly skilled architects, engineers, and builders,
            we transform your vision into a stunning reality.
          </p>
          <p>
            From initial concept to final completion, we handle every aspect of
            the construction process with meticulous care. Our dedication to
            excellence is reflected in the superior materials we use and the
            advanced techniques we employ.
          </p>
          <p>
            You can expect a seamless and efficient experience. We prioritise
            open communication, ensuring that your ideas and preferences are
            incorporated at every stage. Our commitment to timeliness and
            budgetary considerations guarantees that your project is delivered
            on schedule and within your desired investment range.
          </p>
          <p>
            Let us build the home of your dreams, tailored to your unique style
            and needs. Contact us today to embark on an exciting journey towards
            your ideal living space.
          </p>
        </div>
      </StyledNewBuildIntroSection>
    </Container>
  );
}
const StyledNewBuildIntroSection = styled.section`
  width: 100%;
  display: flex;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-bottom: 4rem;
  h2 {
    margin-top: 0rem;
  }
  .left,
  .right {
    width: 50%;
  }
  .left {
    position: relative;
  }
  .right {
    background: rgba(255, 255, 255, 0.9);
    padding: 1.4rem;
    color: #606060;
  }
  @media only screen and (max-width: 1235px) {
  }
`;
