import styled from 'styled-components';
import Container from './Container';
import Image from 'next/image';
import Chevron from '../public/images/icons/chevron-down.png';
import useForm from '../lib/useForm';
export default function ContactForm() {
  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(inputs),
    }).then((res) => {
      if (res.status === 200) {
        clearForm();
      } else {
      }
    });
  }

  return (
    <Container>
      <StyledContactForm onSubmit={handleSubmit}>
        <input
          name="name"
          value={inputs.name}
          required={true}
          type="text"
          placeholder="Name *"
          className="name"
          onChange={handleChange}
        />
        {/* <input
          name="surname"
          value={inputs.surname}
          required={true}
          type="text"
          placeholder="Surname *"
          className="surname"
          onChange={handleChange}
        /> */}
        <input
          name="phone"
          value={inputs.phone}
          type="phone"
          placeholder="Phone"
          className="phone"
          onChange={handleChange}
        />
        <input
          name="email"
          value={inputs.email}
          required={true}
          type="email"
          placeholder="Email *"
          className="email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={inputs.message}
          required={true}
          type="text"
          placeholder="Tell us about your project *"
          className="message"
          onChange={handleChange}
        />
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
  margin-bottom: 4rem;
  .name,
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
  .name {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  input::placeholder,
  textarea::placeholder {
    font-weight: 600;
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
    grid-row-start: 3;
    grid-row-end: 28;
    grid-column-start: 1;
    grid-column-end: 2;
    resize: none;
  }
  .map {
    grid-row-start: 3;
    grid-row-end: 32;
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
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 28;
    grid-row-end: 32;
    font-weight: 800;
    font-size: 1rem;
    &:hover {
      background: #ffdc00;
      color: #000;
    }
  }
  .privacy {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 28;
    grid-row-end: 32;
    a {
      color: blue;
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 1235px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .name,
    .surname,
    .phone,
    .email,
    .service,
    .message,
    button {
      font-size: 16px;
    }

    .message {
      height: 18rem;
    }
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
    .map {
      display: none;
    }
  }
`;
