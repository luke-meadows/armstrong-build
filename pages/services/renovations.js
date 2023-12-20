import { styled } from 'styled-components';
import Background from '../../components/Background';

import RenovationsHero from '../../components/hero/RenovationsHero';
import RecentProjects from '../../components/RecentProjects.js';
import SectionHeading from '../../components/SectionHeading';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import Footer from '../../components/Footer';
import ServiceInformation from '../../components/ServiceInformation';
import Container from '../../components/Container';
import { renovationData } from '../../lib/service-info-sections/renovation-data';
import { NextSeo } from 'next-seo';
export default function Home() {
  return (
    <StyledHome>
      <NextSeo
        title="Renovation Construction - Armstrong Build"
        description="With a focus on quality craftsmanship, we seamlessly blend contemporary design with the unique character of your home."
      />
      <Background />

      <RenovationsHero />
      <Container>
        <ServiceInformation service={renovationData} />
      </Container>
      <div className="two-rem-spacer" />
      <SectionHeading heading="Renovation Projects" />
      <RecentProjects limit={true} filter="Renovation" />
      <StartBuildingBanner />
      <Footer />
    </StyledHome>
  );
}
const StyledHome = styled.main`
  position: relative;
`;
