import styled from 'styled-components';
export default function ServicePromises({ promises }) {
  return (
    <StyledServicePromises>
      <div className="promise-item">
        <i className="icon-check" />
        <p>Licensing &amp; Insurance</p>
      </div>
      {/* <div className="promise-item">
        <i className="icon-check" />
        <p>Guaranteed Satisfaction</p>
      </div> */}
      <div className="promise-item">
        <i className="icon-check" />
        <p>Clear Communication</p>
      </div>
      <div className="promise-item">
        <i className="icon-check" />
        <p>Cost Transparency</p>
      </div>
      <div className="promise-item">
        <i className="icon-check" />
        <p>Accurate Timeline</p>
      </div>
      <div className="promise-item">
        <i className="icon-check" />
        <p>Quality Materials</p>
      </div>
      <div className="promise-item">
        <i className="icon-check" />
        <p>Warranty</p>
      </div>
      <div className="promise-item">
        <i className="icon-check" />
        <p>Health &amp; Safety</p>
      </div>
      <div className="promise-item">
        <i className="icon-check" />
        <p>Sustainable</p>
      </div>
    </StyledServicePromises>
  );
}
const StyledServicePromises = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 0.75rem;
  margin-top: 1.5rem;
  .promise-item {
    display: flex;
    align-items: center;
    /* border: 1px solid black; */
    gap: 0.5rem;
    p {
      margin: 0;
      font-size: 0.9rem;
      font-weight: 600;
      color: #000;
    }
    i {
      background: #000;
      border-radius: 50%;
      aspect-ratio: 1;
      color: #ffdc00;
    }
  }
`;
