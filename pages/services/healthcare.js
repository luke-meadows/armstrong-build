import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import HealthcareHero from '../../components/hero/HealthcareHero';
import TopHeader from '../../components/TopHeader';
import HealthcareIntroSection from '../../components/service-page-into-sections/HealthcareIntroSection';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <HealthcareHero />
      <HealthcareIntroSection />
      {/* <SectionHeading heading="Healthcare Portfolio" />
      <RecentProjects /> */}
      <StartBuildingBanner />
      <Footer />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
