import { styled } from 'styled-components';
import Background from '../../components/Background';

import SustainableHero from '../../components/hero/SustainableHero';
import RecentProjects from '../../components/RecentProjects.js';

import SectionHeading from '../../components/SectionHeading';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import Footer from '../../components/Footer';
import ServiceInformation from '../../components/ServiceInformation';
import Container from '../../components/Container';
import { sustainableData } from '../../lib/service-info-sections/sustainable-data';
import { NextSeo } from 'next-seo';
export default function sustainable() {
  return (
    <StyledSustainablePage>
      <NextSeo
        title="Sustainable Construction - Armstrong Build"
        description="Harness
        the power of the sun with solar energy, conserve water with
        rainwater harvesting, and embrace eco-friendly solutions like
        solar heating systems and sustainable plant rooms."
      />
      <Background />

      <SustainableHero />
      <Container>
        <ServiceInformation service={sustainableData.solar} />
        <ServiceInformation service={sustainableData.water} />
        <ServiceInformation service={sustainableData.solarHeating} />
        <ServiceInformation service={sustainableData.plantRoom} />
      </Container>
      <div className="two-rem-spacer" />
      <SectionHeading heading="Sustainable Projects" />
      <RecentProjects limit={true} filter="Sustainable" />
      <StartBuildingBanner />
      <Footer />
    </StyledSustainablePage>
  );
}
const StyledSustainablePage = styled.main`
  position: relative;
`;
