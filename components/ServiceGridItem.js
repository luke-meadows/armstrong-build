import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import Chevron from '../public/images/icons/chevron-down.png';
import Chevron2 from '../public/images/icons/chevron-down-black.png';

export default function ServiceGridItem({ service }) {
  const [hovered, setHovered] = useState('no');
  const [serviceTitle, setServiceTitle] = useState(service.title);
  return (
    <Link href={service.url || '/services'}>
      <StyledServiceGridItem
        onMouseEnter={() => {
          setServiceTitle('Learn more'), setHovered('yes');
        }}
        onMouseLeave={() => {
          setServiceTitle(service.title), setHovered('no');
        }}
        hovered={hovered}
      >
        <div className="image-container">
          <Image
            src={service.img}
            layout="fill"
            objectFit="cover"
            alt="service card image"
          />
          <div className="title-container">
            <h3>{serviceTitle}</h3>
            <div className="arrow-container">
              <Image
                src={hovered === 'yes' ? Chevron : Chevron2}
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div>
        </div>
        <div className="service-grid-item-text">
          <div>
            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
              tempora molestiae cum minima facilis maiores eius unde vero quasi
              vel eos dolor ea nihil neque nam, molestias, sapiente eveniet
              soluta.
            </p> */}
          </div>
          {/* <Link href={service.url || '/services'}>
            <button>Learn more</button>
          </Link> */}
        </div>
      </StyledServiceGridItem>
    </Link>
  );
}
const StyledServiceGridItem = styled.div`
  cursor: pointer;
  border-radius: 0.3rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  color: #606060;
  .service-grid-item-text {
    padding: 0 1rem;
    /* padding-bottom: 1rem; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
  h3 {
    font-size: 18px;
    margin: 0;
    padding: 0 0.4rem;
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
    border-radius: 0.2rem;

    color: ${(props) => (props.hovered === 'yes' ? '#ffdc00' : '#000')};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #1b1b1b;
    margin-bottom: 0;
  }
  button {
    border: 1px solid #000;
    background: #000;
    color: #ffdc00;
    width: 100%;
    padding: 1rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
      background: #ffdc00;
      border: 1px solid #ffdc00;

      color: #000;
      font-weight: 500;
    }
  }
  .image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
  }
  .arrow-container {
    position: relative;
    width: 1rem;
    height: 1rem;
    transform: rotate(270deg);
    i {
      color: black;
    }
  }
`;
