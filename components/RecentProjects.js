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
import { portfolioData } from '../lib/portfolio-data';

export default function RecentProjects({ more = false }) {
  return (
    <Container>
      <StyledRecentProjects>
        <div className="recent-projects-grid">
          {portfolioData.map((item, i) => (
            <RecentProjectItem
              key={i}
              img={item.images[0]}
              title={item.title}
              service={item.service}
            />
          ))}
          {/* <RecentProjectItem
            position="topLeft"
            img={ProjectImg1}
            title="Bickerton Road, London"
            service="Feature"
          />
          <RecentProjectItem
            img={ProjectImg2}
            title="Victorian property"
            service="Renovation"
          />
          <RecentProjectItem
            img={ProjectImg3}
            title="?????"
            service="Renovation"
          />

          <RecentProjectItem
            img={ProjectImg4}
            title="Richmond Road"
            service="New Build"
          />
          <RecentProjectItem
            img={ProjectImg5}
            title="Bryant’s house"
            service="New Build"
          />
          <RecentProjectItem
            img={ProjectImg6}
            title="Devonshire"
            service="New Build"
          /> */}
          {/* {more && (
            <>
              <RecentProjectItem
                position="topLeft"
                img={ProjectImg1}
                title="Bickerton Road, London"
                service="Feature"
              />
              <RecentProjectItem
                img={ProjectImg2}
                title="Victorian property"
                service="Renovation"
              />
              <RecentProjectItem
                img={ProjectImg3}
                title="?????"
                service="Renovation"
              />

              <RecentProjectItem
                img={ProjectImg4}
                title="Richmond Road"
                service="New Build"
              />
              <RecentProjectItem
                img={ProjectImg5}
                title="Bryant’s house"
                service="New Build"
              />
              <RecentProjectItem
                img={ProjectImg6}
                title="Devonshire"
                service="New Build"
              />
            </>
          )} */}
        </div>
      </StyledRecentProjects>
    </Container>
  );
}
const StyledRecentProjects = styled.section`
  margin-bottom: 4rem;
  .recent-projects-grid {
    margin: 0rem 0 0rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;
