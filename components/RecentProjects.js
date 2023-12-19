import styled from 'styled-components';
import Container from './Container';
import RecentProjectItem from './RecentProjectItem';
import { portfolioData } from '../lib/portfolio-data';
import { useEffect, useState } from 'react';

export default function RecentProjects({ filter = 'all', limit = false }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (filter === 'All') {
      if (limit) {
        setProjects(portfolioData.slice(0, 9));
      } else {
        setProjects(portfolioData);
      }
      return;
    } else {
      const newProjectList = portfolioData.filter(
        (project) => project.service === filter
      );
      setProjects(newProjectList);
    }
  }, [filter]);
  return (
    <Container>
      <StyledRecentProjects>
        <div className="recent-projects-grid">
          {projects.map((item, i) => (
            <RecentProjectItem
              key={i}
              img={item.images[0]}
              title={item.title}
              service={item.service}
              id={item.id}
            />
          ))}
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
  @media only screen and (max-width: 1235px) {
    margin-bottom: 2rem;
    .recent-projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 900px) {
    .recent-projects-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
