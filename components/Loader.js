import styled from 'styled-components';
export default function Loader() {
  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  );
}
const StyledLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%);
  z-index: 2;
  .loader {
    width: 50px;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0);

    animation: l13 1s infinite linear;
  }
  @keyframes l13 {
    100% {
      transform: rotate(1turn);
    }
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
