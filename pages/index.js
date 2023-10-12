import { styled } from 'styled-components';
import Background from '../components/Background';
import Header from '../components/Header';
import SectionHeading from '../components/SectionHeading';
import ServicesGrid from '../components/ServicesGrid';
import StartBuildingBanner from '../components/StartBuildingBanner';
import TopHeader from '../components/TopHeader';
import RecentProjects from '../components/RecentProjects';
import HomeHero from '../components/hero/HomeHero';
import TestimonialsSection from '../components/TestimonialsSection';
import Showreel from '../components/Showreel';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <HomeHero />
      <Showreel />
      <SectionHeading heading="Building Services" noButton />
      <ServicesGrid />
      <StartBuildingBanner />
      <SectionHeading heading="Recent Projects" noButton />
      <RecentProjects />
      <SectionHeading heading="Testimonials" noButton />
      <TestimonialsSection />
      {/* <Footer /> */}
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
