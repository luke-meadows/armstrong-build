import styled from 'styled-components';
import Container from '../Container';
import HealthcareServicesGrid from '../HealthcareServicesGrid';
export default function NewBuildIntroSection() {
  return (
    <Container>
      <StyledNewBuildIntroSection>
        <p>
          As specialists in Healthcare Construction, we bring a wealth of
          experience to the table when it comes to delivering both
          semi-permanent and permanent solutions for a wide range of building
          needs. Our collaborative approach involves working closely with
          national clients and dedicated project teams to ensure that we
          precisely meet the project's objectives.
        </p>
        <p>
          At Armstrong Build, we fully grasp and empathize with the complex
          challenges that healthcare providers encounter. These challenges
          encompass evolving patient demographics, higher expectations for
          hospital accommodations, budget constraints, and the ever-growing
          demands for carbon and waste reduction. Whether your project involves
          constructing a brand-new facility or renovating an existing one, our
          unwavering commitment is to provide you with an innovative and
          seamlessly executed project.
        </p>
        <p>
          <strong>
            Our custom-built construction expertise can be effectively applied
            to a diverse array of applications, which include but are not
            limited to the following:
          </strong>
        </p>
        <HealthcareServicesGrid />
      </StyledNewBuildIntroSection>
    </Container>
  );
}
const StyledNewBuildIntroSection = styled.section`
  width: 100%;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-bottom: 2rem;
  background: #fff;
  color: #606060;
  padding: 1rem 2rem 2rem 2rem;
  position: relative;
`;
