import Image from 'next/image';
import styled from 'styled-components';
import QuoteImg from '../public/images/icons/quote.png';
export default function TestimonialItem() {
  return (
    <StyledTestimonialItem>
      <div className="quote-image-container">
        <Image
          src={QuoteImg}
          layout="responsive"
          objectFit="contain"
          alt="quote"
        />
      </div>

      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
          mollitia laudantium blanditiis cupiditate tempore velit modi suscipit!
          Officia doloremque obcaecati facere repellendus expedita unde
          accusantium quibusdam molestiae quia, quod magni quae omnis mollitia
          suscipit natus blanditiis amet reiciendis ea eaque vitae architecto.
          Dolorum cumque quos, ex qui necessitatibus reprehenderit earum sint
          quasi doloremque commodi rem exercitationem provident. Atque ducimus
          rerum, cumque voluptas ad aliquam quidem autem eius cupiditate ullam
          dolorem officiis minima voluptate nihil adipisci, officia consequatur
          quisquam sed omnis recusandae et maxime fugit fugiat. Quisquam
          sapiente, aliquam facere recusandae dignissimos voluptatem quibusdam
          suscipit quos ratione rem? Corporis, quibusdam quisquam?
        </p>
      </div>
      <div className="title-and-rating">
        <h3>Luke Meadows</h3>
        <div>
          <i className="icon-star" />
          <i className="icon-star" />
          <i className="icon-star" />
          <i className="icon-star" />
          <i className="icon-star" />
        </div>
      </div>
    </StyledTestimonialItem>
  );
}
const StyledTestimonialItem = styled.div`
  border-radius: 0.3rem;
  background: #f6f6f6;
  padding: 1.8rem;
  color: #646464;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .quote-image-container {
    position: relative;
    width: 2rem;
    margin-bottom: 1.4rem;
  }
  .title-and-rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgrey;
    padding-top: 1.6rem;
    margin-top: 1.6rem;
  }
  i {
    color: #ffdc00;
  }
  h3 {
    font-weight: 500;
    margin: 0;
  }
  p {
    font-size: 0.9rem;
    margin: 0;
    color: #646464;
  }
  .text-container {
    height: 16rem;
    overflow-y: scroll;
  }
`;
