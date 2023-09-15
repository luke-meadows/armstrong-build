import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import NewBuildHero from '../../components/Heros/NewBuildHero';
import RecentProjects from '../../components/RecentProjects.js';

import TopHeader from '../../components/TopHeader';
import ServicePageIntroSection from '../../components/ServicePageIntroSection';
import SectionHeading from '../../components/SectionHeading';
import StartBuildingBanner from '../../components/StartBuildingBanner';

export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <NewBuildHero />
      <ServicePageIntroSection />
      <SectionHeading heading="New Build Portfolio" />
      <RecentProjects />
      <StartBuildingBanner />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
