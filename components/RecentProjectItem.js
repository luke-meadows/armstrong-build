import Image from 'next/image';
import styled from 'styled-components';
export default function RecentProjectItem({
  position = false,
  img,
  title = 'Lorem ipsum dolor sit.',
}) {
  return (
    <StyledRecentProjectItem position={position}>
      <div className="top-section">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="bottom-section">
        <p>{title}</p>
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
      font-weight: 500;
    }
    button {
      background: #000;
      color: #ffdc00;
      border: 1px solid #ffdc00;
      padding: 0.4rem 1.2rem;
      border-radius: 0.3rem;
      font-size: 0.7rem;
      &:hover {
        color: #000;
        background: #ffdc00;
      }
    }
  }
`;
