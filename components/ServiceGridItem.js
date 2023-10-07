import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
export default function ServiceGridItem({ service }) {
  return (
    <StyledServiceGridItem>
      <div className="image-container">
        <Image
          src={service.img}
          layout="fill"
          objectFit="cover"
          alt="service card image"
        />
      </div>
      <div className="service-grid-item-text">
        <div>
          <h3>{service.title}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A tempora
            molestiae cum minima facilis maiores eius unde vero quasi vel eos
            dolor ea nihil neque nam, molestias, sapiente eveniet soluta.
          </p>
        </div>
        <Link href={service.url || '/services'}>
          <button>Learn more</button>
        </Link>
      </div>
    </StyledServiceGridItem>
  );
}
const StyledServiceGridItem = styled.div`
  border-radius: 0.3rem;
  background: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  color: #606060;
  .service-grid-item-text {
    padding: 0 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 0;
    background: #ffdc00;
    padding: 0.5rem 1.2rem;
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
    border-radius: 0.2rem;
    width: fit-content;
    color: #000;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }
  button {
    border: 1px solid #000;

    background: #000;
    color: #ffdc00;
    width: 100%;
    padding: 0.5rem 0;
    transition: all 0.2s ease;
    &:hover {
      background: #ffdc00;
      border: 1px solid #ffdc00;
      color: #000;
      font-weight: 500;
    }
  }
  .image-container {
    position: relative;
    height: 150px;
    overflow: hidden;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
  }
`;
