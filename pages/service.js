import { styled } from 'styled-components';
import Background from '../components/Background';
import Header from '../components/Header';
import NewBuildHero from '../components/Heros/NewBuildHero';

import TopHeader from '../components/TopHeader';
import ServicePageIntroSection from '../components/ServicePageIntroSection';

export default function Home() {
  return (
    <StyledHome>
      <Background />
      <TopHeader />
      <Header />
      <NewBuildHero />
      <ServicePageIntroSection />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
