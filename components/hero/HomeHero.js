import styled from 'styled-components';
import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/home-hero.jpeg';
import Chevron from '../../public/images/icons/chevron-down-black.png';
export default function HomeHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>Delivering Construction Excellence Across the UK</h1>
              <p className="text">
                We specialise in residential and commercial projects through
                meticulous attention to detail, collaborative efforts, and a
                genuine care for our clients&apos; needs.
              </p>
            </div>
            <button>
              Contact us today{' '}
              <span>
                <div className="chevron-container">
                  <Image src={Chevron} />
                </div>
              </span>
            </button>
          </div>
          <div className="right-side">
            <Image
              src={HeroImg}
              layout="fill"
              objectFit="cover"
              alt="diggers"
            />
          </div>
        </div>
      </Container>
    </StyledHero>
  );
}
export const StyledHero = styled.section`
  margin-bottom: 4rem;
  .hero-inner {
    display: flex;
    border-radius: 0.3rem;
    overflow: hidden;
    position: relative;
  }
  .left-side,
  .right-side {
    width: 50%;
    height: 18rem;
  }
  .left-side {
    background: #000;
    color: #ededed;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 8rem;
    clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
    z-index: 2;

    h1 {
      font-size: 2rem;
      margin: 0;
      color: #ffdc00;
    }
    p {
      font-weight: 400;
    }
    button {
      padding: 1rem 2rem;
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      background: #ffdc00;
      width: fit-content;
      color: #000;
      font-weight: 600;
      margin-top: 1rem;
      transition: all 0.2s ease;
      border: 1px solid #ffdc00;
      &:hover {
        background: #000;
        color: #ffdc00;
      }
    }
  }
  .right-side {
    background: white;
    position: absolute;
    right: 0;
    top: 0;
    width: 60%;
    z-index: 1;
  }
  .chevron-container {
    margin-top: 0.13rem;
    position: relative;
    width: 0.8rem;
    transform: rotate(-90deg);
  }
  .contact-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem 0.8rem;
    div {
      flex: 1;
      padding: 0.2rem 0;
    }
    p {
      font-size: 0.8rem;
      margin: 0;
    }
    h5 {
      color: #ffdc00;
      margin: 0;
      margin-bottom: 0.3rem;
    }
  }
  @media only screen and (max-width: 1235px) {
    .hero-inner {
      flex-direction: column-reverse;
    }
    .left-side,
    .right-side {
      width: 100%;
      position: relative;
    }
    .left-side {
      height: fit-content;
      clip-path: none;
      padding-right: 2rem;
      button {
        width: 100%;
      }
    }
  }
`;
