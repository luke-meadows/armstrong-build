import { styled } from 'styled-components';
import Background from '../../components/Background';
import ServicesGrid from '../../components/ServicesGrid';
import Spacer from '../../components/Spacer';
import ServicesHero from '../../components/hero/ServicesHero';
import Footer from '../../components/Footer';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <StyledHome>
      <NextSeo
        title="Services - Armstrong Build"
        description="We offer 6 construction services, Healthcare, Commercial, New Build, Extensions, Sustainable Buildings and Renovation"
      />
      <Background />
      <ServicesHero />
      <ServicesGrid />
      <Footer />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
