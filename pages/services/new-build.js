import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import NewBuildHero from '../../components/hero/NewBuildHero';
import RecentProjects from '../../components/RecentProjects.js';
import TopHeader from '../../components/TopHeader';
import SectionHeading from '../../components/SectionHeading';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import Footer from '../../components/Footer';
import ServiceInformation from '../../components/ServiceInformation';
import Container from '../../components/Container';
import { newBuildData } from '../../lib/service-info-sections/newbuild-data';
export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <NewBuildHero />
      <Container>
        <ServiceInformation service={newBuildData} />
      </Container>
      <div className="two-rem-spacer" />
      <SectionHeading heading="New Build Projects" />
      <RecentProjects />
      <StartBuildingBanner />
      <Footer />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
