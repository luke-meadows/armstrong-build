import styled from 'styled-components';
import Container from '../Container';
import ServiceIntroImageDisplay from './ServiceIntroImageDisplay';
import ServicePromises from './ServicePromises';
export default function NewBuildIntroSection() {
  return (
    <Container>
      <StyledNewBuildIntroSection>
        <div className="left">
          <ServiceIntroImageDisplay />
        </div>
        <div className="right">
          <div>
            <h2>Built from the ground up!</h2>
            <p>
              With our team of highly skilled architects, engineers, and
              builders, we transform your vision into a stunning reality.
            </p>
            <p>
              From initial concept to final completion, we handle every aspect
              of the construction process with meticulous care. Our dedication
              to excellence is reflected in the superior materials we use and
              the advanced techniques we employ.
            </p>
            <p>
              You can expect a seamless and efficient experience. We prioritise
              open communication, ensuring that your ideas and preferences are
              incorporated at every stage. Our commitment to timeliness and
              budgetary considerations guarantees that your project is delivered
              on schedule and within your desired investment range.
            </p>
            <p>
              Let us build the home of your dreams, tailored to your unique
              style and needs. Contact us today to embark on an exciting journey
              towards your ideal living space.
            </p>
          </div>
          <div>{/* <ServicePromises /> */}</div>
        </div>
      </StyledNewBuildIntroSection>
    </Container>
  );
}
const StyledNewBuildIntroSection = styled.section`
  background: rgba(255, 255, 255, 0.95);
  width: 100%;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  padding: 1rem;
  gap: 1rem;
  h2 {
    margin: 0rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #000;
  }

  @media only screen and (max-width: 1235px) {
  }
`;
