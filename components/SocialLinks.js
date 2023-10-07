import styled from 'styled-components';
export default function SocialLinks() {
  return (
    <StyledSocialLinks>
      <div className="icon-container">
        <a href="/" target="_blank" className="linkedin-holder">
          <i className="icon-linkedin" />
        </a>
        <a href="https://www.instagram.com/armstrongbuildltd/" target="_blank">
          <i className="icon-instagram" />
        </a>
        <a href="mailto:lukemeadowsdev@gmail.com" className="mail-holder">
          <i className="icon-mail" />
        </a>
      </div>
    </StyledSocialLinks>
  );
}
const StyledSocialLinks = styled.div`
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

  .icon-container,
  .contact-info-container,
  .inner-top-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
