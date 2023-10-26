import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HealthcareServiceGridItem from './HealthcareServiceGridItem';
import HealthcareServiceGridItemExpanded from './HealthcareServiceGridItemExpanded';
// Images
import AandEImg from '../public/images/service-grid-images/healthcare.jpeg';
import PlantRoomsImg from '../public/images/service-intro-images/healthcare-plant-room.jpeg';
import OperatingTheatreImg from '../public/images/service-intro-images/healthcare-operating-theatre.jpg';
import OutpatientsImg from '../public/images/service-intro-images/healthcare-outpatients.jpg';
import StoreroomImg from '../public/images/service-intro-images/healthcare-storeroom.jpeg';
import WardImg from '../public/images/service-intro-images/healthcare-ward.jpg';
import ServiceInformation from './ServiceInformation';
const serviceGridData = [
  {
    title: 'A&E Facilities',
    blurb: '',
    img: AandEImg,
    url: '/services/healthcare',
  },
  {
    title: 'Plant Rooms',
    blurb: '',
    img: PlantRoomsImg,
  },
  {
    title: 'Operating Theatres',
    blurb: '',
    img: OperatingTheatreImg,
    url: '/services/new-build',
  },
  {
    title: 'Outpatient Facilities',
    blurb: '',
    img: OutpatientsImg,
  },
  {
    title: 'Storerooms',
    blurb: '',
    img: StoreroomImg,
  },
  { title: 'Wards', blurb: '', img: WardImg },
];
export default function ServicesGrid() {
  const [itemClicked, setItemClicked] = useState(false);

  return (
    <StyledServicesGrid itemClicked={itemClicked}>
      {!itemClicked &&
        serviceGridData.map((service, i) => {
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
