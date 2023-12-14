import styled from 'styled-components';
import Container from '../Container';
import { healthcareData } from '../../lib/service-info-sections/healthcare-data';
import ServiceInformation from '../ServiceInformation';
export default function NewBuildIntroSection() {
  return (
    <Container>
      <StyledNewBuildIntroSection>
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
  position: relative;
`;
