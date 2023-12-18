import { styled } from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import RenovationsHero from '../../components/hero/RenovationsHero';
import RecentProjects from '../../components/RecentProjects.js';
import TopHeader from '../../components/TopHeader';
import SectionHeading from '../../components/SectionHeading';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import Footer from '../../components/Footer';
import ServiceInformation from '../../components/ServiceInformation';
import Container from '../../components/Container';
import { newBuildData } from '../../lib/service-info-sections/newbuild-data';
import { NextSeo } from 'next-seo';
export default function Home() {
  return (
    <StyledHome>
      <NextSeo
        title="Renovations - Armstrong Build"
        description="With a focus on quality craftsmanship, we seamlessly blend contemporary design with the unique character of your home."
      />
      <Background />
      <TopHeader />
      <Header />
      <RenovationsHero />
      <Container>
        <ServiceInformation service={newBuildData} />
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
