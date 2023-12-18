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
import AboutUsSection from '../components/AboutUsSection';
import { NextSeo } from 'next-seo';
export default function Home() {
  return (
    <StyledHome>
      <NextSeo
        title="Armstrong Build - Construction"
        description="With a focus on quality craftsmanship, we seamlessly blend contemporary design with the unique character of your home."
      />
      <Background />
      <TopHeader />
      <Header />
      <HomeHero />
      <Showreel coupled={true} />
      <AboutUsSection />
      <SectionHeading heading="Construction Services" noButton />
      <ServicesGrid />
      <StartBuildingBanner />
      <SectionHeading heading="Recent Projects" noButton />
      <RecentProjects limit={true} filter="All" />
      <SectionHeading heading="Testimonials" noButton />
      <TestimonialsSection />
      <Footer />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
