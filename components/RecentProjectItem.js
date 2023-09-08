import Image from 'next/image';
import styled from 'styled-components';
export default function RecentProjectItem({ position = false, img }) {
  return (
    <StyledRecentProjectItem position={position}>
      <div className="top-section">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="bottom-section">
        <p>Lorem ipsum dolor sit.</p>
        <button>View</button>
      </div>
    </StyledRecentProjectItem>
  );
}
const StyledRecentProjectItem = styled.div`
  min-height: 15rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  grid-row-start: ${(props) => (props.position === 'bottomRight' ? 2 : '')};
  grid-row-end: ${(props) => (props.position === 'bottomRight' ? 4 : '')};
  grid-column-start: ${(props) => (props.position === 'bottomRight' ? 3 : '')};
  grid-row-start: ${(props) => (props.position === 'topLeft' ? 1 : '')};
  grid-row-end: ${(props) => (props.position === 'topLeft' ? 3 : '')};
  .top-section {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .bottom-section {
    height: 4rem;
    background: #000;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
    p {
      color: #fff;
      font-size: 0.8rem;
    }
    button {
      background: #ffdc00;
      padding: 0.4rem 1rem;
      border-radius: 0.3rem;
    }
  }
`;
