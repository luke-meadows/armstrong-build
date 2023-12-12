import styled from 'styled-components';
import Container from './Container';
import Logo from './Logo';

export default function AboutUsSection() {
  return (
    <Container>
      <StyledAboutUsSection>
        {/* <Logo /> */}
        {/* <div classNaeme="spacer" /> */}
        <p>
          Specialising in all areas of construction, our resource of skills
          allows us to be the preferred choice for clients with period or
          prestige homes, requiring &apos;sympathetic&apos; extension or
          renovation, often expertly carried out using reclaimed materials.
        </p>
        <br />
        <p>
          With a reputation for producing distinctive work and unparalleled
          quality to meet our clients highest expectations. Armstrong Build has
          been serving homeowners and businesses in Birmingham and the West
          Midlands for over 29 years.
        </p>
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
  align-items: center;
  .spacer {
    margin-bottom: 1.8rem;
  }
  p {
    margin: 0;
    /* text-align: center; */
    font-size: 1rem;
  }
`;
