import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import SustainableHero from '../../components/hero/SustainableHero';
import RecentProjects from '../../components/RecentProjects.js';
import TopHeader from '../../components/TopHeader';
import SectionHeading from '../../components/SectionHeading';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import Footer from '../../components/Footer';
import ServiceInformation from '../../components/ServiceInformation';
import Container from '../../components/Container';
import { sustainableData } from '../../lib/service-info-sections/sustainable-data';
export default function sustainable() {
  return (
    <StyledSustainablePage>
      <Background />
      <TopHeader />
      <Header />
      <SustainableHero />
      <Container>
        <ServiceInformation service={sustainableData.solar} />
        <ServiceInformation service={sustainableData.water} />
        <ServiceInformation service={sustainableData.solarHeating} />
        <ServiceInformation service={sustainableData.plantRoom} />
      </Container>
      <div className="two-rem-spacer" />
      <SectionHeading heading="Sustainable Projects" />
      <RecentProjects limit={true} filter="Sustainable" />
      <StartBuildingBanner />
      <Footer />
    </StyledSustainablePage>
  );
}
const StyledSustainablePage = styled.main`
  position: relative;
`;
