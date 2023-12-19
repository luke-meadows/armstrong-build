import styled from 'styled-components';
import ProjectInfoSectionDesktop from './ProjectInfoSectionDesktop';
import ProjectInfoSectionMobile from './ProjectInfoSectionMobile';
export default function ProjectInfoSection({ project }) {
  return (
    <StyledProjectInfoSection>
      <div className="desktop">
        <ProjectInfoSectionDesktop project={project} />
      </div>
      <div className="mobile">
        <ProjectInfoSectionMobile project={project} />
      </div>
    </StyledProjectInfoSection>
  );
}
const StyledProjectInfoSection = styled.section`
  .mobile {
    display: none;
  }
  @media only screen and (max-width: 1235px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: initial;
    }
  }
`;
