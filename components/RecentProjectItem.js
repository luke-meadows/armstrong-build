import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import Chevron from '../public/images/icons/chevron-down.png';
import Link from 'next/link';

export default function RecentProjectItem({
  position = '',
  img,
  title = 'Lorem ipsum dolor sit.',
  service,
}) {
  const [hovered, setHovered] = useState('no');
  const [projectTitle, setProjectTitle] = useState(title);

  return (
    <Link href="/portfolio/1234">
      <StyledRecentProjectItem
        onMouseEnter={() => {
          setProjectTitle('View Project'), setHovered('yes');
        }}
        onMouseLeave={() => {
          setProjectTitle(title), setHovered('no');
        }}
        hovered={hovered}
        position={position}
      >
        <div className="image-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
        <div className="title-container">
          <h5>{projectTitle}</h5>
          <div>
            {hovered === 'yes' ? (
              <div className="arrow-container">
                <Image src={Chevron} layout="responsive" objectFit="fill" />
              </div>
            ) : (
              <p className="project-service">{service}</p>
            )}
          </div>
        </div>
      </StyledRecentProjectItem>
    </Link>
  );
}
const StyledRecentProjectItem = styled.div`
  min-height: 18rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  position: relative;
  cursor: pointer;
  /* grid-row-start: ${(props) => (props.position === 'bottomRight' ? 2 : '')};
  grid-row-end: ${(props) => (props.position === 'bottomRight' ? 4 : '')};
  grid-column-start: ${(props) => (props.position === 'bottomRight' ? 3 : '')};
  grid-row-start: ${(props) => (props.position === 'topLeft' ? 1 : '')};
  grid-row-end: ${(props) => (props.position === 'topLeft' ? 3 : '')}; */

  .image-container {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .title-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: padding 0.5s ease-in-out;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: ${(props) => (props.hovered === 'yes' ? '#000' : '#ffdc00')};
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
    padding: ${(props) =>
      props.hovered === 'yes' ? '0.6rem 1.4rem' : '0.5rem 1.2rem'};
    max-width: calc(100% - 2rem);
  }
  h5 {
    font-size: 16px;
    margin: 0;
    border-radius: 0.2rem;
    width: fit-content;
    color: ${(props) => (props.hovered === 'yes' ? '#ffdc00' : '#000')};
  }
  .project-service {
    font-weight: 300;
    font-size: 16px;
    margin: 0;
  }
  .arrow-container {
    position: relative;
    width: 1rem;
    height: 1rem;
    transform: rotate(270deg);
  }
`;
