import { styled } from 'styled-components';
import Background from '../../components/Background';

import CommercialHero from '../../components/hero/CommercialHero';

import ServiceInformation from '../../components/ServiceInformation';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import SectionHeading from '../../components/SectionHeading';
import Footer from '../../components/Footer';
import { commercialBuildingData } from '../../lib/service-info-sections/commercial-buildings-data';
import Container from '../../components/Container';
import RecentProjects from '../../components/RecentProjects';
import { NextSeo } from 'next-seo';

export default function CommercialBuildingsPage() {
  return (
    <StyledCommercialBuildingsPage>
      <NextSeo
        title="Commercial Construction - Armstrong Build"
        description="At Armstrong Build, we pride ourselves on being a leading force in the industry, dedicated to delivering exceptional construction solutions that stand the test of time."
      />
      <Background />

      <CommercialHero />
      <Container>
        <ServiceInformation service={commercialBuildingData} />
      </Container>
      <div className="two-rem-spacer" />
      <SectionHeading heading="Commercial Projects" />
      <RecentProjects limit={true} filter="Commercial" />
      <StartBuildingBanner />
      <Footer />
    </StyledCommercialBuildingsPage>
  );
}
const StyledCommercialBuildingsPage = styled.main``;
