import Image from 'next/image';
import styled from 'styled-components';
import QuoteImg from '../public/images/icons/quote.png';
export default function ProjectTestimonialItem() {
  return (
    <StyledProjectTestimonialItem>
      {/* <div className="quote-image-container">
        <Image
          src={QuoteImg}
          layout="responsive"
          objectFit="contain"
          alt="quote"
        />
      </div> */}
      <h3 className="testimonial-title">Testimonial</h3>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
          mollitia laudantium blanditiis cupiditate tempore velit modi suscipit!
          Officia doloremque obcaecati facere repellendus expedita unde
          accusantium quibusdam molestiae quia, quod magni quae omnis mollitia
          suscipit natus blanditiis amet reiciendis ea eaque vitae architecto.
          Dolorum cumque quos, ex qui necessitatibus reprehenderit earum sint
          quasi doloremque commodi rem exercitationem provident.Atque ducimus
          rerum, cumque voluptas ad aliquam quidem autem eius cupiditate ullam
          dolorem officiis minima voluptate nihil adipisci, officia consequatur
          quisquam sed omnis recusandae et maxime fugit fugiat. Quisquam
          sapiente, aliquam facere recusandae dignissimos voluptatem quibusdam
          suscipit quos ratione rem? Corporis, quibusdam quisquam?
        </p>
      </div>
      <div className="title-and-rating">
        <h3>Luke Meadows</h3>
        <div className="rating">
          <div className="stars">
            <i className="icon-star" />
            <i className="icon-star" />
            <i className="icon-star" />
            <i className="icon-star" />
            <i className="icon-star" />
          </div>
          <p>5/5</p>
        </div>
      </div>
    </StyledProjectTestimonialItem>
  );
}
const StyledProjectTestimonialItem = styled.div`
  border-radius: 0.3rem;
  background: #fff;
  padding: 0;
  color: #646464;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.5rem 1.2rem;
  margin: 0.5rem 0 1rem 0;

  .testimonial-title {
    font-size: 16px;
    background: #ffdc00;
    padding: 0.5rem 1.2rem;
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
    margin-bottom: 0rem;
    border-radius: 0.2rem;
    width: fit-content;
    color: #000;
  }

  .title-and-rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgrey;
    padding-top: 1rem;
    margin: 0rem 0 1rem 0;

    p {
    }
    i {
      color: #000;
    }
    span {
      margin-left: 0.5rem;
    }
    h3 {
      font-weight: 600;
      margin: 0;
      color: #000;
    }
    p {
      color: #646464;
      margin: 0;
    }
  }
  .text-container {
    p {
      color: #646464;
    }
    height: fit-content;
    overflow-y: scroll;
  }
  .rating,
  .stars {
    display: flex;
    align-items: center;
  }
  .rating {
    gap: 0.5rem;
  }
`;
