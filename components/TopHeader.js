import styled from 'styled-components';
import Container from './Container';
import SocialLinks from './SocialLinks';
export default function TopHeader() {
  return (
    <StyledTopHeader>
      <Container>
        <div className="inner-top-header">
          <SocialLinks />
          <div className="contact-info-container">
            <a href="tel:0121 441 5222">
              <span className="">Tel:</span> 0121 441 5222
            </a>
            <a
              className="dont-show-on-mobile"
              href="mailto:info@armstrongbuild.com"
            >
              Email: info@armstrongbuild.com
            </a>
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
  font-weight: 400;
  border-bottom: 1px solid var(--grey);
  padding: 0.5rem 0;
  .inner-top-header {
    justify-content: space-between;
  }

  .contact-info-container,
  .inner-top-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  a {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 1235px) {
    .dont-show-on-mobile {
      display: none;
    }
    a {
      font-size: 1rem;
    }
  }
`;
