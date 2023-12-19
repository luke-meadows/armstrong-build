import { styled } from 'styled-components';
import Background from '../components/Background';

import FaqHero from '../components/hero/FaqHero';
import Footer from '../components/Footer';
import FaqSection from '../components/FaqSection';
export default function FaqPage() {
  return (
    <StyledFaqPage>
      <Background />
      <FaqHero />
      <FaqSection />
      <Footer />
    </StyledFaqPage>
  );
}
const StyledFaqPage = styled.main`
  position: relative;
`;
