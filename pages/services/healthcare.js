import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import HealthcareHero from '../../components/hero/HealthcareHero';
import TopHeader from '../../components/TopHeader';
import HealthcareIntroSection from '../../components/service-page-into-sections/HealthcareIntroSection';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import SectionHeading from '../../components/SectionHeading';
import Footer from '../../components/Footer';
import RecentProjects from '../../components/RecentProjects';
import { NextSeo } from 'next-seo';

export default function HealthcarePage() {
  return (
    <StyledHealthcarePage>
      <NextSeo
        title="Healthcare Construction - Armstrong Build"
        description="Our expert team specialises in constructing state of the art
        healthcare facilities, ensuring precision, compliance, and a
        healing environment."
      />
      <Background />
      <TopHeader />
      <Header />
      <HealthcareHero />
      <SectionHeading heading="Healthcare Construction" noButton />
      <HealthcareIntroSection />
      <SectionHeading heading="Healthcare Projects" />
      <RecentProjects limit={true} filter="Healthcare" />
      <StartBuildingBanner />
      <Footer />
    </StyledHealthcarePage>
  );
}
const StyledHealthcarePage = styled.main`
  position: relative;
`;
