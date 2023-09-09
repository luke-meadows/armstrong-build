import styled from 'styled-components';
import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/hero-images/new-builds-hero.jpg';
export default function NewBuildHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <h1>New Builds</h1>
            <p className="text">
              Discover how our construction company is shaping the landscape and
              delivering excellence in every endeavour. Stay informed, inspired,
              and connected with our dynamic news hub.
            </p>
            <button>Contact us today</button>
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
const StyledHero = styled.section`
  .hero-inner {
    display: flex;
    border-radius: 0.3rem;
    overflow: hidden;
  }
  .left-side,
  .right-side {
    width: 50%;
    height: 20rem;
  }
  .left-side {
    background: #000;
    color: #fff;
    padding: 2rem;

    h1 {
      font-size: 2.4rem;
      margin: 0;
    }
    p {
      font-weight: 300;
    }
    button {
      padding: 1rem 2rem;
      border: 1px solid white;
      background: #000;
      color: #ffdc00;
      font-weight: 500;
      width: 100%;
      margin-top: 1rem;
      transition: all 0.2s ease;
      &:hover {
        border: 1px solid #ffdc00;
      }
    }
  }
  .right-side {
    background: white;
    position: relative;
  }
  @media only screen and (max-width: 1235px) {
    .hero-inner {
      flex-direction: column;
    }
    .left-side,
    .right-side {
      width: 100%;
    }
    .left-side {
      height: fit-content;
      button {
        /* width: fit-content; */
      }
    }
  }
`;
