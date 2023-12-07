import { styled } from 'styled-components';
import Background from '../components/Background';
import Header from '../components/Header';
import TopHeader from '../components/TopHeader';
import FaqHero from '../components/hero/FaqHero';
import Footer from '../components/Footer';
import FaqSection from '../components/FaqSection';
export default function FaqPage() {
  return (
    <StyledFaqPage>
      <Background />
      <TopHeader />
      <Header />
      <FaqHero />
      <FaqSection />
      <Footer />
    </StyledFaqPage>
  );
}
const StyledFaqPage = styled.main`
  position: relative;
`;
