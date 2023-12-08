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
import { AnimatePresence, motion } from 'framer-motion';
export default function Home() {
  return (
    <StyledHome>
      <motion.div className="test">
        <Background />
        <TopHeader />
        <Header />
        <HomeHero />
        <Showreel />
        <SectionHeading heading="Construction Services" noButton />
        <ServicesGrid />
        <StartBuildingBanner />
        <SectionHeading heading="Recent Projects" noButton />
        <RecentProjects />
        <SectionHeading heading="Testimonials" noButton />
        <TestimonialsSection />
        <Footer />
      </motion.div>
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
  .test {
    transition: all 0.3s ease;
  }
`;
