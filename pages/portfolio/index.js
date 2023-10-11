import styled from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import RecentProjects from '../../components/RecentProjects';
import PortfolioHero from '../../components/hero/PortfolioHero';
import Footer from '../../components/Footer';
import FilterButton from '../../components/FilterButton';
import SectionHeading from '../../components/SectionHeading';
export default function PortfolioPage() {
  return (
    <StyledPortfolioPage>
      <Background />
      <TopHeader />
      <Header />
      <PortfolioHero />
      <SectionHeading heading="Projects" noButton filterButton />

      <RecentProjects />
      <StartBuildingBanner />
      <Footer />
    </StyledPortfolioPage>
  );
}
const StyledPortfolioPage = styled.main``;
