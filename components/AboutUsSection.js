import styled from 'styled-components';
import Container from './Container';
import Button from './Button';
export default function AboutUsSection() {
  return (
    <Container noGapMobile>
      <StyledAboutUsSection>
        <h1>
          Healthcare | Commercial Buildings | New Builds | Extensions |
          Sustainable Buildings | Renovations
        </h1>
        <p>
          Specialising in all areas of construction, our resource of skills
          allows us to be the preferred choice for clients with period or
          prestige homes, requiring &apos;sympathetic&apos; extension or
          renovation. We can also manage newer, more modern properties, or a mix
          of the two! Our diverse skill set allows us to tackle any project with
          confidence.
        </p>
        <br />
        <p>
          With a reputation for producing distinctive work and unparalleled
          quality to meet our clients highest expectations. Armstrong Build has
          been serving homeowners and businesses in Birmingham and the West
          Midlands for over 30 years.
        </p>
        <br />
        <p>
          Please get in touch for to discuss the best construction options for
          you – with no obligation:
        </p>
        <br />
        <Button text="Contact us" />
      </StyledAboutUsSection>
    </Container>
  );
}
const StyledAboutUsSection = styled.section`
  background: #000;
  color: #ededed;
  margin-bottom: 4rem;
  padding: 1.5rem 2rem;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  display: flex;
  flex-direction: column;

  .spacer {
    margin-bottom: 1.8rem;
  }
  p {
    margin: 0;
    font-size: 1rem;
  }
  h1 {
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    color: var(--yellow);
    font-weight: 500;
  }
  @media only screen and (max-width: 1235px) {
    padding: 1rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`;
