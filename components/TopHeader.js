import styled from 'styled-components';
import Container from './Container';
export default function TopHeader() {
  return (
    <StyledTopHeader>
      <Container>
        <div className="inner-top-header">
          <div className="icon-container">
            <a href="/" target="_blank" className="linkedin-holder">
              <i className="icon-linkedin" />
            </a>
            <a
              href="https://www.instagram.com/armstrongbuildltd/"
              target="_blank"
            >
              <i className="icon-instagram" />
            </a>
            <a href="mailto:lukemeadowsdev@gmail.com" className="mail-holder">
              <i className="icon-mail" />
            </a>
          </div>
          <div className="contact-info-container">
            <p>Tel: 0121 441 5222</p>
            <p>Email: info@armstrongbuild.com</p>
          </div>
        </div>
      </Container>
    </StyledTopHeader>
  );
}
const StyledTopHeader = styled.div`
  background: #000;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 300;
  .inner-top-header {
    justify-content: space-between;
    .icon-mail,
    .icon-instagram,
    .icon-linkedin {
      color: white;
      font-size: 1.1rem;
    }

    .mail-holder,
    .linkedin-holder {
      margin-top: -0.1rem;
    }
    .icon-linkedin {
      margin-right: -0.3rem;
    }
  }
  .icon-container,
  .contact-info-container,
  .inner-top-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  p {
    font-size: 0.7rem;
  }
`;
