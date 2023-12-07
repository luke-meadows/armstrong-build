import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import HealthcareHero from '../../components/hero/HealthcareHero';
import TopHeader from '../../components/TopHeader';
import HealthcareIntroSection from '../../components/service-page-into-sections/HealthcareIntroSection';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import SectionHeading from '../../components/SectionHeading';
import Footer from '../../components/Footer';

export default function HealthcarePage() {
  return (
    <StyledHealthcarePage>
      <Background />
      <TopHeader />
      <Header />
      <HealthcareHero />
      <SectionHeading heading="Healthcare Construction Applications" noButton />
      <HealthcareIntroSection />
      <StartBuildingBanner />
      <Footer />
    </StyledHealthcarePage>
  );
}
const StyledHealthcarePage = styled.main`
  position: relative;
`;
