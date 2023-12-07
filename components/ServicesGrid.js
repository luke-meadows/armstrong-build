import styled from 'styled-components';
import Container from './Container';
import ServiceGridItem from './ServiceGridItem';
// Images
import HealthcareImg from '../public/images/service-grid-images/healthcare.jpeg';
import CommercialBuildingsImg from '../public/images/service-grid-images/commercial-buildings.jpg';
import NewBuildsImg from '../public/images/service-grid-images/new-builds.jpeg';
import ExtensionsImg from '../public/images/service-grid-images/extensions.jpeg';
import SustainableBuildingsImg from '../public/images/service-grid-images/sustainable-buildings.jpeg';
import RenovationsImg from '../public/images/service-grid-images/rennovations.jpg';
const serviceGridData = {
  healthcare: {
    title: 'Healthcare',
    blurb: '',
    img: HealthcareImg,
    url: '/services/healthcare',
  },
  commercial: {
    title: 'Commercial',
    blurb: '',
    img: CommercialBuildingsImg,
    url: '/services/commercial',
  },
  newBuilds: {
    title: 'New Builds',
    blurb: '',
    img: NewBuildsImg,
    url: '/services/new-build',
  },
  extensions: { title: 'Extensions', blurb: '', img: ExtensionsImg },
  sustainable: {
    title: 'Sustainable',
    blurb: '',
    img: SustainableBuildingsImg,
    url: '/services/sustainable',
  },
  renovations: {
    title: 'Renovations',
    blurb: '',
    img: RenovationsImg,
    url: '/services/renovations',
  },
};
export default function ServicesGrid() {
  return (
    <Container>
      <StyledServicesGrid>
        <ServiceGridItem service={serviceGridData.healthcare} />
        <ServiceGridItem service={serviceGridData.commercial} />
        <ServiceGridItem service={serviceGridData.newBuilds} />
        <ServiceGridItem service={serviceGridData.extensions} />
        <ServiceGridItem service={serviceGridData.sustainable} />
        <ServiceGridItem service={serviceGridData.renovations} />
      </StyledServicesGrid>
    </Container>
  );
}
const StyledServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 2rem;
  position: relative;
  margin-bottom: 4rem;
  @media only screen and (max-width: 900px) {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
