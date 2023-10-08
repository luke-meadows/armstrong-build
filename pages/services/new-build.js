import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import NewBuildHero from '../../components/hero/NewBuildHero';
import RecentProjects from '../../components/RecentProjects.js';
import TopHeader from '../../components/TopHeader';
import NewBuildIntroSection from '../../components/service-page-into-sections/NewBuildIntroSection';
import SectionHeading from '../../components/SectionHeading';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <NewBuildHero />
      <NewBuildIntroSection />
      <SectionHeading heading="New Build Portfolio" />
      <RecentProjects />
      <StartBuildingBanner />
      <Footer />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
