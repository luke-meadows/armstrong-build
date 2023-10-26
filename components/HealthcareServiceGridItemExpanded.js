import Image from 'next/image';
import styled from 'styled-components';
import ServiceIntroImageDisplay from './service-page-into-sections/ServiceIntroImageDisplay';
import ServicePromises from './service-page-into-sections/ServicePromises';
export default function ServiceGridItemExpanded({
  service,
  itemClicked,
  setItemClicked,
}) {
  return (
    <StyledServiceGridItemExpanded itemClicked={itemClicked}>
      <div className="image-display-container">
        <ServiceIntroImageDisplay />
      </div>
      <div className="service-grid-item-heading">
        <div>
          <h3>{service.title}</h3>
        </div>
      </div>
      <div className="right">
        <div>
          <h2>Built from the ground up!</h2>
          <p>
            With our team of highly skilled architects, engineers, and builders,
            we transform your vision into a stunning reality.
          </p>
          <p>
            From initial concept to final completion, we handle every aspect of
            the construction process with meticulous care. Our dedication to
            excellence is reflected in the superior materials we use and the
            advanced techniques we employ.
          </p>
          <p>
            You can expect a seamless and efficient experience. We prioritise
            open communication, ensuring that your ideas and preferences are
            incorporated at every stage. Our commitment to timeliness and
            budgetary considerations guarantees that your project is delivered
            on schedule and within your desired investment range.
          </p>
          <p>
            Let us build the home of your dreams, tailored to your unique style
            and needs. Contact us today to embark on an exciting journey towards
            your ideal living space.
          </p>
        </div>
        <div>
          <ServicePromises />
        </div>
      </div>
    </StyledServiceGridItemExpanded>
  );
}
const StyledServiceGridItemExpanded = styled.div`
  display: flex;
  gap: 1rem;
  border-radius: 0.3rem;
  color: #606060;
  position: relative;
  .image-display-container {
    width: 50%;
  }
  .service-grid-item-heading {
    padding: 0 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 0;
    background: #ffdc00;
    padding: 0.5rem 1.2rem;
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
    border-radius: 0.2rem;
    width: fit-content;
    color: #000;
  }
  .right {
    width: 50%;
  }
`;
