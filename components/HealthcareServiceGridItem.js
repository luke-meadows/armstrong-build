import Image from 'next/image';
import styled from 'styled-components';
export default function ServiceGridItem({
  service,
  itemClicked,
  setItemClicked,
}) {
  return (
    <div
      className="outer-grid-item"
      onClick={() =>
        !itemClicked ? setItemClicked(service) : setItemClicked(false)
      }
    >
      <StyledServiceGridItem itemClicked={itemClicked}>
        <div className="image-container">
          <Image
            src={service.images[0]}
            layout="fill"
            objectFit="cover"
            alt="service card image"
          />
        </div>
        <div className="service-grid-item-text">
          <div>
            <h3>{service.title}</h3>
          </div>
        </div>
        {itemClicked && (
          <StyledDisplayText>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestias vero perferendis deserunt atque distinctio, dolorum
              debitis. Error architecto veritatis iste. Aspernatur quos
              laudantium hic ullam odit exercitationem eveniet quasi impedit
              soluta voluptatem, enim necessitatibus facere. Distinctio quidem,
              iusto quaerat delectus tempore ipsa quas saepe illo expedita
              culpa, eveniet consequatur. Voluptate, rerum. Totam sit saepe
              nostrum blanditiis optio consequuntur sequi voluptatum impedit
              eligendi, consequatur distinctio aliquam velit dignissimos quasi,
              numquam expedita? Porro pariatur sit officiis neque numquam
              doloremque odio perferendis animi delectus tenetur beatae,
              provident cum iure? Commodi, itaque! Ex pariatur enim harum neque
              eligendi, vitae quae voluptate porro aliquam fugiat dolore
              expedita ratione dolorem amet tenetur natus minus minima atque
              quasi odit ullam laudantium! Blanditiis expedita eum voluptatum
              aut, deserunt, accusamus maiores sunt similique nulla ea nisi,
              ipsam debitis pariatur culpa provident exercitationem ipsa atque
              asperiores reiciendis in labore laborum quae molestias architecto?
              Illum, vitae numquam molestias quidem maiores mollitia quibusdam
              ducimus blanditiis? Odit facilis tempora repudiandae voluptatum
              molestias, incidunt repellat obcaecati deleniti cum voluptatem.
            </p>
          </StyledDisplayText>
        )}
      </StyledServiceGridItem>
    </div>
  );
}
const StyledServiceGridItem = styled.div`
  display: ${(props) => (props.itemClicked === false ? '' : 'flex')};
  border-radius: 0.3rem;
  color: #606060;
  position: relative;
  border-bottom-left-radius: ${(props) =>
    props.itemClicked === false ? '0.3rem' : '0'};
  border-bottom-right-radius: ${(props) =>
    props.itemClicked === false ? '0.3rem' : '0'};

  .service-grid-item-text {
    padding: 0 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    bottom: ${(props) => (props.itemClicked === false ? '0' : '')};
    top: ${(props) => (props.itemClicked === false ? '' : '0')};
    left: 0;
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
  p {
    font-size: 16px;
    font-weight: 300;
  }
  button {
    border: 1px solid #000;
    background: #000;
    color: #ffdc00;
    width: 100%;
    padding: 1rem 0;
    transition: all 0.2s ease;
    &:hover {
      background: #ffdc00;
      border: 1px solid #ffdc00;
      color: #000;
      font-weight: 500;
    }
  }
  .image-container {
    position: relative;

    overflow: hidden;
    border-radius: 0.3rem;
    height: ${(props) => (props.itemClicked === false ? '200px' : '')};
    width: ${(props) =>
      props.itemClicked === false ? '' : 'calc(33.33% - 22px)'};
    aspect-ratio: ${(props) => (props.itemClicked === false ? '' : 1)};
  }
`;

const StyledDisplayText = styled.div`
  /* background: #f6f6f6; */
  color: #606060;
  flex: 1;
  padding: 0.5rem 0 0 1rem;
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
  }
`;
