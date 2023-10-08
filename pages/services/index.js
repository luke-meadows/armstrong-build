import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import ServicesGrid from '../../components/ServicesGrid';
import Spacer from '../../components/Spacer';
import ServicesHero from '../../components/heros/ServicesHero';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <ServicesHero />
      <Spacer />
      <ServicesGrid />
      <StartBuildingBanner />
      <Footer />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
