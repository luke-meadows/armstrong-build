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
  background: #000;
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
    color: #ededed;
  }
  .filter-button {
    background: #ededed;
    border: 1px solid #000;
    color: #000;
    padding: 0.5rem 1rem;
    min-width: 6rem;
    &.active,
    &:focus,
    &:hover {
      background: #ffdc00;
      color: #000;
    }
  }
`;
