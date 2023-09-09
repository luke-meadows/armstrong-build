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
        <Link href="/service">
          <button>Learn More</button>
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
    font-size: 20px;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }
  button {
    background: #000;
    color: #ffdc00;
    width: 100%;
    padding: 0.75rem 0;
    transition: all 0.2s ease;
    &:hover {
      background: #ffdc00;
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
