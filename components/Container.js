import styled from 'styled-components';
export default function Container({ children, noGapMobile = false }) {
  return (
    <StyledContainer noGapMobile={noGapMobile}>
      <div className="inner-container">{children}</div>
    </StyledContainer>
  );
}
const StyledContainer = styled.section`
  .inner-container {
    max-width: 1400px;
    padding: 0 4rem;
    margin: 0 auto;
    @media only screen and (max-width: 900px) {
      padding: ${(props) => (props.noGapMobile === true ? '0 0rem' : '0 1rem')};
    }
  }
`;
