import styled from 'styled-components';
import Container from '../Container';
import { healthcareData } from '../../lib/service-info-sections/healthcare-data';
import ServiceInformation from '../ServiceInformation';
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
          precisely meet the project&apos;s objectives.
        </p>
        <br />
        <ServiceInformation
          padding={false}
          closeButton={true}
          marginBottom={false}
          imageTitle={true}
          title={false}
          service={healthcareData[0]}
        />
        <ServiceInformation
          padding={false}
          closeButton={true}
          marginBottom={false}
          imageTitle={true}
          title={false}
          service={healthcareData[1]}
        />
        <ServiceInformation
          padding={false}
          closeButton={true}
          marginBottom={false}
          imageTitle={true}
          title={false}
          service={healthcareData[2]}
        />
        <ServiceInformation
          padding={false}
          closeButton={true}
          marginBottom={false}
          imageTitle={true}
          title={false}
          service={healthcareData[3]}
        />
        <ServiceInformation
          padding={false}
          closeButton={true}
          marginBottom={false}
          imageTitle={true}
          title={false}
          service={healthcareData[4]}
        />
        <ServiceInformation
          padding={false}
          closeButton={true}
          marginBottom={false}
          imageTitle={true}
          title={false}
          service={healthcareData[5]}
        />
      </StyledNewBuildIntroSection>
    </Container>
  );
}
const StyledNewBuildIntroSection = styled.section`
  width: 100%;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-bottom: 4rem;
  background: #fff;
  color: #606060;
  padding: 1rem 2rem 0rem 2rem;
  position: relative;
`;
