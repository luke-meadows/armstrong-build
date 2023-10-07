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
  }

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
