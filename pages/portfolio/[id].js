import styled from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import ProjectHero from '../../components/hero/ProjectHero';
import Footer from '../../components/Footer';
import Showreel from '../../components/Showreel';
import HeroImg from '../../public/images/dummy-project-images/hero.jpg';
import ProjectInfoSection from '../../components/ProjectInfoSection';
export default function ProjectPage() {
  return (
    <StyledProjectPage>
      <Background />
      <TopHeader />
      <Header />
      <ProjectHero
        title="Project title"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing elit. Fuga saepe autem sint itaque qui rerum deserunt non quasi est nihil. elit. Fuga saepe autem sint. Fuga saepe autem sint itaque qui rerum deserunt non quasi est nihil."
        image={HeroImg}
      />
      <Showreel id="873417291" />
      <ProjectInfoSection />
      <Footer />
    </StyledProjectPage>
  );
}
const StyledProjectPage = styled.main``;
