import { styled } from 'styled-components';
import Background from '../components/Background';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServicesGrid from '../components/ServicesGrid';
import StartBuildingBanner from '../components/StartBuildingBanner';
import TopHeader from '../components/TopHeader';
import RecentProjects from '../components/RecentProjects';
export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <Hero />
      <SectionHeading heading="Services" noButton />
      <ServicesGrid />
      <StartBuildingBanner />
      <SectionHeading heading="Some Recent Projects" noButton />
      <RecentProjects />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
