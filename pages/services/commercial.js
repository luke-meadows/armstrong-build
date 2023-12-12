import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import CommercialHero from '../../components/hero/CommercialHero';
import TopHeader from '../../components/TopHeader';
import ServiceInformation from '../../components/ServiceInformation';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import SectionHeading from '../../components/SectionHeading';
import Footer from '../../components/Footer';
import { commercialBuildingData } from '../../lib/service-info-sections/commercial-buildings-data';
import Container from '../../components/Container';
import RecentProjects from '../../components/RecentProjects';

export default function CommercialBuildingsPage() {
  return (
    <StyledCommercialBuildingsPage>
      <Background />
      <TopHeader />
      <Header />
      <CommercialHero />
      <Container>
        <ServiceInformation service={commercialBuildingData} />
      </Container>
      <div className="two-rem-spacer" />
      <SectionHeading heading="Commercial Projects" />
      <RecentProjects limit={true} filter="Commercial" />
      <StartBuildingBanner />
      <Footer />
    </StyledCommercialBuildingsPage>
  );
}
const StyledCommercialBuildingsPage = styled.main``;
