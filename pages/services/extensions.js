import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import ExtensionsHero from '../../components/hero/ExtensionsHero';
import RecentProjects from '../../components/RecentProjects.js';
import TopHeader from '../../components/TopHeader';
import SectionHeading from '../../components/SectionHeading';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import Footer from '../../components/Footer';
import ServiceInformation from '../../components/ServiceInformation';
import Container from '../../components/Container';
import { extensionData } from '../../lib/service-info-sections/extension-data';
import { NextSeo } from 'next-seo';
export default function extensions() {
  return (
    <StyledExtensionsPage>
      <NextSeo
        title="Extension Construction - Armstrong Build"
        description="We provide a
        range of building services to help create the extension you
        desire."
      />
      <Background />
      <TopHeader />
      <Header />
      <ExtensionsHero />
      <Container>
        <ServiceInformation service={extensionData} />
      </Container>
      <div className="two-rem-spacer" />
      <SectionHeading heading="Extension Projects" />
      <RecentProjects limit={true} filter="Extension" />
      <StartBuildingBanner />
      <Footer />
    </StyledExtensionsPage>
  );
}
const StyledExtensionsPage = styled.main`
  position: relative;
`;
