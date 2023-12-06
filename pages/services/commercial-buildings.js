import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import CommercialHero from '../../components/hero/CommercialHero';
import TopHeader from '../../components/TopHeader';
import ServiceInformation from '../../components/ServiceInformation';
import StartBuildingBanner from '../../components/StartBuildingBanner';
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
      <RecentProjects />
      <StartBuildingBanner />
      <Footer />
    </StyledCommercialBuildingsPage>
  );
}
const StyledCommercialBuildingsPage = styled.main``;
