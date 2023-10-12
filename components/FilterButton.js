import styled from 'styled-components';
import Container from './Container';
export default function FilterButton({ options, setOption, option = 'All' }) {
  return (
    <StyledFilterButton>
      <p>Filter</p>
      <button className="filter-button active">All</button>
      <button className="filter-button">Healthcare</button>
      <button className="filter-button">Commercial</button>
      <button className="filter-button">New Builds</button>
      <button className="filter-button">Extensions</button>
      <button className="filter-button">Sustainable</button>
      <button className="filter-button">Renovations</button>
    </StyledFilterButton>
  );
}
const StyledFilterButton = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  width: fit-content;
  border-radius: 0.3rem;
  p {
    margin: 0;
    font-weight: 500;
    margin-right: 0.5rem;
  }
  .filter-button {
    background: #fff;
    border: 1px solid #000;
    color: #000;
    padding: 0.5rem 1rem;
    min-width: 6rem;
    &.active,
    &:focus,
    &:hover {
      color: #ffdc00;
      background: #000;
    }
  }
`;
