import styled from 'styled-components';
import Container from './Container';
export default function FilterButton({
  options,
  setOption,
  option = 'All',
  setFilter,
  filter,
}) {
  return (
    <StyledFilterButton>
      <p>Filter</p>
      <button
        className={`filter-button ${filter === 'All' ? 'active' : ''}`}
        onClick={(e) => setFilter(e.currentTarget.innerHTML)}
      >
        All
      </button>
      <button
        className={`filter-button ${filter === 'Healthcare' ? 'active' : ''}`}
        onClick={(e) => setFilter(e.currentTarget.innerHTML)}
      >
        Healthcare
      </button>
      <button
        className={`filter-button ${filter === 'Commercial' ? 'active' : ''}`}
        onClick={(e) => setFilter(e.currentTarget.innerHTML)}
      >
        Commercial
      </button>
      <button
        className={`filter-button ${filter === 'New Build' ? 'active' : ''}`}
        onClick={(e) => setFilter(e.currentTarget.innerHTML)}
      >
        New Build
      </button>
      <button
        className={`filter-button ${filter === 'Extension' ? 'active' : ''}`}
        onClick={(e) => setFilter(e.currentTarget.innerHTML)}
      >
        Extension
      </button>
      <button
        className={`filter-button ${filter === 'Sustainable' ? 'active' : ''}`}
        onClick={(e) => setFilter(e.currentTarget.innerHTML)}
      >
        Sustainable
      </button>
      <button
        className={`filter-button ${filter === 'Renovation' ? 'active' : ''}`}
        onClick={(e) => setFilter(e.currentTarget.innerHTML)}
      >
        Renovation
      </button>
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
