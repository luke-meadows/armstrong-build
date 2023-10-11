import styled from 'styled-components';
import Container from './Container';
import ProductInfoImages from './ProductInfoImages';
export default function ProjectInfoSection() {
  return (
    <Container>
      <StyledProjectInfoSection>
        <ProductInfoImages />
        <div className="right">
          <h2>House Mansion - Somewhere</h2>
          <div className="project-info-row">
            <h4>Client:</h4>
            <p>Mr and Mrs Meadows</p>
          </div>
          <div className="project-info-row">
            <h4>Value:</h4>
            <p>£2,000,030.93</p>
          </div>
          <div className="spacer" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            quia sequi? Incidunt tempore architecto doloribus. Non deleniti,
            quos temporibus aliquam ea cumque ipsa tempora odio. Adipisci aut
            quos ratione est.lorem
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            quia sequi? Incidunt tempore architecto doloribus. Non deleniti,
            quos temporibus aliquam ea cumque ipsa tempora odio. Adipisci aut
            quos ratione est.lorem
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            quia sequi? Incidunt tempore architecto doloribus. Non deleniti,
            quos temporibus aliquam ea cumque ipsa tempora odio. Adipisci aut
            quos ratione est.lorem
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            quia sequi? Incidunt tempore architecto doloribus. Non deleniti,
            quos temporibus aliquam ea cumque ipsa tempora odio. Adipisci aut
            quos ratione est.lorem
          </p>
          <button>Check out other new build projects</button>
        </div>
      </StyledProjectInfoSection>
    </Container>
  );
}
const StyledProjectInfoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  .left,
  .right {
    position: relative;
  }
  .right {
    position: relative;
    /* position: fixed;
    left: calc(50% + 1rem);
    top: 0; */
    background: #fff;
    padding: 2rem 2rem 1rem 2rem;
    max-width: 634px !important;
    border-radius: 0.3rem;
    height: fit-content;
    h2 {
      margin: 0 0 2rem 0;
      background: #ffdc00;
      padding: 0.5rem 1.8rem;
      clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
      width: fit-content;
    }
    button {
      padding: 1rem 2rem;
      border: 1px solid white;

      background: #ffdc00;
      color: #000;
      font-weight: 500;
      width: 100%;
      margin-top: 1rem;
      transition: all 0.2s ease;
      border: 1px solid #ffdc00;
      &:hover {
        background: #000;
        color: #ffdc00;
      }
    }
  }
  .project-info-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    h4,
    p {
      margin: 0;
      font-size: 18px;
    }
  }
  .image-container {
    width: 100%;
    height: 22rem;
    position: relative;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
    overflow: hidden;
  }
  .spacer {
    margin: 2rem 0;
  }
`;
