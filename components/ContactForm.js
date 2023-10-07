import styled from 'styled-components';
import Container from './Container';
import Image from 'next/image';
import Chevron from '../public/images/icons/chevron-down.png';
export default function ContactForm() {
  // function makeFormInactive
  return (
    <Container>
      <StyledContactForm>
        <input type="text" placeholder="First Name" className="first-name" />
        <input type="text" placeholder="Surname" className="surname" />
        <input type="text" placeholder="Phone" className="phone" />
        <input type="text" placeholder="Email" className="email" />
        <div className="dropdown-container">
          <input
            type="text"
            placeholder="I am interested in.."
            className="service"
          />
          <div className="arrow">
            <div className="arrow-container">
              <Image src={Chevron} layout="responsive" objectFit="fill" />
            </div>
          </div>
        </div>
        <textarea type="text" placeholder="Message" className="message" />
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19308.050103353333!2d-1.9136668364588478!3d52.426505450502106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bea209878fcd%3A0x71dc4a1aced25588!2sArmstrong%20Build%20Ltd!5e0!3m2!1sen!2suk!4v1696414285313!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            style={{ border: 'none', padding: 0, margin: 0 }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <button>Send</button>
      </StyledContactForm>
    </Container>
  );
}
const StyledContactForm = styled.form`
  display: grid;
  gap: 1rem;
  background: #fff;
  padding: 2rem;
  border-radius: 0.3rem;
  grid-template-columns: repeat(2, 1fr);
  .first-name,
  .surname,
  .phone,
  .email,
  .service,
  .message,
  .map {
    padding: 0.5rem;
    border: 2px solid #d9d9d9;
    border-radius: 0.3rem;
    width: 100%;
  }
  .dropdown-container {
    position: relative;
    cursor: pointer;
    input {
      cursor: pointer;
    }
    .arrow {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      padding: 0.2rem;
      background: #000;
      border-radius: 0.2rem;
    }
    .arrow-container {
      position: relative;
      width: 0.8rem;
      height: 0.8rem;
      svg {
        fill: blue;
      }
    }
  }
  .message {
    grid-row-start: 4;
    grid-row-end: 27;
    grid-column-start: 1;
    grid-column-end: 2;
    resize: none;
  }
  .map {
    grid-row-start: 3;
    grid-row-end: 28;
    grid-column-start: 2;
    grid-column-end: 3;
    padding: 0;
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
`;
