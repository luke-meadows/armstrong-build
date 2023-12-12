import Image from 'next/image';
import styled from 'styled-components';
import QuoteImg from '../public/images/icons/quote.png';
export default function TestimonialItem({ testimonial }) {
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
        <p>{testimonial.message}</p>
      </div>
      <div className="title-and-rating">
        <h3>{testimonial.name}</h3>
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
    </StyledTestimonialItem>
  );
}
const StyledTestimonialItem = styled.div`
  border-radius: 0.3rem;
  background: #fff;
  padding: 1.8rem;
  color: #646464;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .quote-image-container {
    position: relative;
    width: 1.4rem;
    margin-bottom: 1rem;
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
    margin: 0;
    color: #646464;
  }
  .text-container {
    height: 16rem;
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
