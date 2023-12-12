import styled from 'styled-components';
import Background from '../../components/Background';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import ProjectHero from '../../components/hero/ProjectHero';
import Footer from '../../components/Footer';
import Showreel from '../../components/Showreel';
import HeroImg from '../../public/images/dummy-project-images/hero.jpg';
import ProjectInfoSection from '../../components/ProjectInfoSection';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { portfolioData } from '../../lib/portfolio-data';

export default function ProjectPage() {
  const route = useRouter();
  const [project, setProject] = useState({
    id: '',
    title: '',
    service: '',
    images: [],
    videoUrl: '',
  });
  useEffect(() => {
    const id = route.asPath.split('/')[2];
    const currentProject = portfolioData.filter(
      (project) => project.id === id
    )[0];
    setProject(currentProject);
  }, [route.asPath]);
  return (
    <StyledProjectPage>
      <Background />
      <TopHeader />
      <Header />
      <ProjectHero
        title={project?.title}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing elit. Fuga saepe autem sint itaque qui rerum deserunt non quasi est nihil. elit. Fuga saepe autem sint. Fuga saepe autem sint itaque qui rerum deserunt non quasi est nihil."
        image={project.images[0]}
      />
      {project?.videoUrl && <Showreel id="873417291" />}
      <ProjectInfoSection project={project} />
      <Footer />
    </StyledProjectPage>
  );
}
const StyledProjectPage = styled.main``;
