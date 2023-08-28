import styled from 'styled-components';
export default function Container({ children }) {
  return (
    <StyledContainer>
      <div className="inner-container">{children}</div>
    </StyledContainer>
  );
}
const StyledContainer = styled.section`
  .inner-container {
    max-width: 1400px;
    padding: 0 4rem;
    margin: 0 auto;
    @media only screen and (max-width: 700px) {
      padding: 0 1rem;
    }
  }
`;
