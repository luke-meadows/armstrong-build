import styled from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import ServicesGrid from '../../components/ServicesGrid';
import PortfolioHero from '../../components/hero/PortfolioHero';
import Footer from '../../components/Footer';
export default function PortfolioPage() {
  return (
    <StyledPortfolioPage>
      <Background />
      <TopHeader />
      <Header />
      <PortfolioHero />
      <ServicesGrid />
      <StartBuildingBanner />
      <Footer />
    </StyledPortfolioPage>
  );
}
const StyledPortfolioPage = styled.main``;
