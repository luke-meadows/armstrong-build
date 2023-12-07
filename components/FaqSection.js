import styled from 'styled-components';
import Container from './Container';
export default function FaqSection() {
  return (
    <Container>
      <StyledFaqSection>
        <div className="flex-container">
          <div className="flex-item">
            <p>Title</p>
          </div>
          <div className="flex-item">
            <p>Title</p>
          </div>
          <div className="flex-item">
            <p>Title</p>
          </div>
          <div className="flex-item">
            <p>Title</p>
          </div>
        </div>
      </StyledFaqSection>
    </Container>
  );
}
const StyledFaqSection = styled.section`
  background: #000;
  color: #000;
  border-radius: 0.3rem;
  padding: 2rem;
  margin-bottom: 4rem;
  .flex-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .flex-item {
    background: #ededed;
    padding: 0 1rem;
    border-radius: 0.3rem;
  }
  p {
    font-weight: 600;
  }
`;
