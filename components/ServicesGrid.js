import styled from 'styled-components';
import Container from './Container';
import ServiceGridItem from './ServiceGridItem';
export default function ServicesGrid() {
  return (
    <Container>
      <StyledServicesGrid>
        <ServiceGridItem />
        <ServiceGridItem />
        <ServiceGridItem />
        <ServiceGridItem />
        <ServiceGridItem />
        <ServiceGridItem />
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
`;
