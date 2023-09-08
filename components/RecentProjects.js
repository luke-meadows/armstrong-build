import styled from 'styled-components';
import Container from './Container';
import RecentProjectItem from './RecentProjectItem';
import ProjectImg1 from '../public/images/recent-project-placeholders/house.jpeg';
export default function RecentProjects() {
  return (
    <Container>
      <StyledRecentProjects>
        <div className="recent-projects-grid">
          <RecentProjectItem position="topLeft" img={ProjectImg1} />
          <RecentProjectItem position="bottomRight" img={ProjectImg1} />
          <RecentProjectItem img={ProjectImg1} />
          <RecentProjectItem img={ProjectImg1} />
          <RecentProjectItem img={ProjectImg1} />
          <RecentProjectItem img={ProjectImg1} />
          <RecentProjectItem img={ProjectImg1} />
        </div>
      </StyledRecentProjects>
    </Container>
  );
}
const StyledRecentProjects = styled.section`
  .recent-projects-grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;
