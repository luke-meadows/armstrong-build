import styled from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import StartBuildingBanner from '../../components/StartBuildingBanner';
import RecentProjects from '../../components/RecentProjects';
import PortfolioHero from '../../components/hero/PortfolioHero';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import { useEffect, useState } from 'react';
export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <StyledPortfolioPage>
      <Background />
      <TopHeader />
      <Header />
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
