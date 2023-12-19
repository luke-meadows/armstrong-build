import styled from 'styled-components';
import Background from '../../components/Background';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import RecentProjects from '../../components/RecentProjects';
import PortfolioHero from '../../components/hero/PortfolioHero';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <StyledPortfolioPage>
      <NextSeo
        title="Portfolio - Armstrong Build"
        description="Welcome to our portfolio page, where we proudly showcase our expertise and craftsmanship. With 30 years of industry experience and a commitment to excellence, we have successfully completed a diverse range of construction projects."
      />
      <Background />
      <PortfolioHero />
      <SectionHeading
        heading="Projects"
        noButton
        filterButton
        setFilter={setFilter}
        filter={filter}
      />
      <RecentProjects more={true} filter={filter} />
      <StartBuildingBanner />
      <Footer />
    </StyledPortfolioPage>
  );
}
const StyledPortfolioPage = styled.main``;
