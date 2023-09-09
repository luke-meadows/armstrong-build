import styled from 'styled-components';
import Container from './Container';
import RecentProjectItem from './RecentProjectItem';
import ProjectImg1 from '../public/images/recent-project-placeholders/Bickerton Road.jpeg';
import ProjectImg2 from '../public/images/recent-project-placeholders/19thCentury.jpg';
import ProjectImg3 from '../public/images/recent-project-placeholders/Cottage.jpeg';
import ProjectImg4 from '../public/images/recent-project-placeholders/Richmond Road.jpg';
import ProjectImg5 from '../public/images/recent-project-placeholders/Bryants House.png';
import ProjectImg6 from '../public/images/recent-project-placeholders/Devonshire.jpeg';
import ProjectImg7 from '../public/images/recent-project-placeholders/Door.jpeg';

export default function RecentProjects() {
  return (
    <Container>
      <StyledRecentProjects>
        <div className="recent-projects-grid">
          <RecentProjectItem
            position="topLeft"
            img={ProjectImg1}
            title="Bickerton Road, London"
          />
          <RecentProjectItem
            position="bottomRight"
            img={ProjectImg7}
            title="Door?"
          />
          <RecentProjectItem
            img={ProjectImg2}
            title="19th century Victorian property"
          />
          <RecentProjectItem img={ProjectImg3} title="Archers Road?" />

          <RecentProjectItem img={ProjectImg4} title="Richmond Road" />
          <RecentProjectItem img={ProjectImg5} title="Bryant’s house" />
          <RecentProjectItem img={ProjectImg6} title="Devonshire" />
        </div>
      </StyledRecentProjects>
    </Container>
  );
}
const StyledRecentProjects = styled.section`
  .recent-projects-grid {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;
