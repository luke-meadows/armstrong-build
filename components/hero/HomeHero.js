import styled from 'styled-components';
import Container from '../Container';
import Image from 'next/image';
import HeroImg from '../../public/images/project-images/025/9.jpg';
import Button from '../Button';
export default function HomeHero() {
  return (
    <StyledHero>
      <Container>
        <div className="hero-inner">
          <div className="left-side">
            <div>
              <h1>
                Commercial and Residential Construction{' '}
                <span>- West Midlands and Beyond!</span>
              </h1>
              <p className="text">
                From healthcare and commercial buildings to residential new
                builds and property extensions, Armstrong Build has the
                experience and expertise required for your next construction
                project.
              </p>
              <p>
                We pride ourselves on constructing industry leading spaces for
                over <strong>30 years</strong>.
              </p>
            </div>
            <Button text="See our portfolio" url="/portfolio" />
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
    background: #000;
    display: flex;
    border-radius: 0.3rem;
    overflow: hidden;
    position: relative;
  }
  .left-side,
  .right-side {
    width: 50%;
    min-height: 18rem;
  }
  .left-side {
    background: #000;
    color: #ededed;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 8rem;
    gap: 1rem;
    clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
    z-index: 2;

    h1 {
      font-size: 2rem;
      margin: 0;
      color: #ffdc00;
      span {
        font-weight: 400;
      }
    }
    p {
      font-weight: 00;
    }
  }
  .right-side {
    position: absolute;
    right: 0;
    top: 0;
    width: 60%;
    z-index: 1;
    height: 100%;
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
    margin-bottom: 2rem;
    .hero-inner {
      flex-direction: column-reverse;
    }
    .contact-hero {
      display: none;
    }
    .left-side,
    .right-side {
      width: 100%;
      position: relative;
    }

    .left-side {
      height: fit-content;
      min-height: 5rem;
      clip-path: none;
      padding-right: 2rem;
      padding: 1.5rem 1rem;

      button {
        width: 100%;
      }
    }
  }
`;
