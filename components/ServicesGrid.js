import styled from 'styled-components';
import Container from './Container';
export default function ServicesGrid() {
  return (
    <Container>
      <StyledServicesGrid>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </StyledServicesGrid>
    </Container>
  );
}
const StyledServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  @media only screen and (max-width: 900px) {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  div {
    aspect-ratio: 1;
    border: 1px solid black;
    border-radius: 0.5rem;
  }
`;
