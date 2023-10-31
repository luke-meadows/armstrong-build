import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HealthcareServiceGridItem from './HealthcareServiceGridItem';
import ServiceInformation from './ServiceInformation';
import { healthcareData } from '../lib/service-info-sections/healthcare-data';
export default function ServicesGrid() {
  const [itemClicked, setItemClicked] = useState(false);

  return (
    <StyledServicesGrid itemClicked={itemClicked}>
      {!itemClicked &&
        healthcareData.map((service, i) => {
          return (
            <HealthcareServiceGridItem
              key={i}
              itemClicked={itemClicked}
              setItemClicked={setItemClicked}
              service={service}
              closeButton={true}
            />
          );
        })}
      {itemClicked && (
        <div>
          <ServiceInformation
            setItemClicked={setItemClicked}
            service={itemClicked}
            padding={false}
            closeButton={true}
            marginBottom={false}
            imageTitle={true}
            title={false}
          />
        </div>
      )}
    </StyledServicesGrid>
  );
}
const StyledServicesGrid = styled.div`
  position: relative;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: ${(props) =>
    props.itemClicked === false ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'};
  gap: 2rem;

  @media only screen and (max-width: 900px) {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
