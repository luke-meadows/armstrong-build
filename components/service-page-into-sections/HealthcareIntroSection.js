import styled from 'styled-components';
import Container from '../Container';
import HealthcareServicesGrid from '../HealthcareServicesGrid';
export default function NewBuildIntroSection() {
  return (
    <Container>
      <StyledNewBuildIntroSection>
        <p>
          As a Healthcare Construction specialist we have a wealth of experience
          supplying semi permanent and permanent solutions to various building
          applications. We work with national clients and appointed project
          teams to ensure exact briefs are achieved.
        </p>
        <p>
          Armstrong Build understand and appreciate the difficult challenges
          healthcare providers face with changing patient demographics, greater
          expectations from hospital accommodation, tightened budgets and
          increasingly demanding reductions for carbon and waste management.
          Whether you require the construction of a new building or a
          refurbishment of an existing facility, we are committed to providing
          you with an innovative and seamless project.
        </p>
        <p>
          <strong>
            Our bespoke building expertise can be utilised in a variety of
            applications including the following:
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
