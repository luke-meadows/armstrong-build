import { styled } from 'styled-components';
import Background from '../components/Background';
import Header from '../components/Header';
import SectionHeading from '../components/SectionHeading';
import ServicesGrid from '../components/ServicesGrid';
import StartBuildingBanner from '../components/StartBuildingBanner';
import TopHeader from '../components/TopHeader';
import RecentProjects from '../components/RecentProjects';
import HomeHero from '../components/Heros/HomeHero';
import TestimonialsSection from '../components/TestimonialsSection';
export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <HomeHero />
      <SectionHeading heading="Services" noButton />
      <ServicesGrid />
      <StartBuildingBanner />
      <SectionHeading heading="Some Recent Projects" noButton />
      <RecentProjects />
      <SectionHeading heading="Testimonials" noButton />
      <TestimonialsSection />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
