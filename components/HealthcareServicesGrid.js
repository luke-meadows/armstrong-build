import styled from 'styled-components';
import Container from './Container';
import HealthcareServiceGridItem from './HealthcareServiceGridItem';
// Images
import AandEImg from '../public/images/service-grid-images/healthcare.jpeg';
import PlantRoomsImg from '../public/images/service-intro-images/healthcare-plant-room.jpeg';
import OperatingTheatreImg from '../public/images/service-intro-images/healthcare-operating-theatre.jpg';
import OutpatientsImg from '../public/images/service-intro-images/healthcare-outpatients.jpg';
import StoreroomImg from '../public/images/service-intro-images/healthcare-storeroom.jpeg';
import WardImg from '../public/images/service-intro-images/healthcare-ward.jpg';

const serviceGridData = {
  aande: {
    title: 'A&E Facilities',
    blurb: '',
    img: AandEImg,
    url: '/services/healthcare',
  },
  plantRooms: {
    title: 'Plant Rooms',
    blurb: '',
    img: PlantRoomsImg,
  },
  operatingTheatres: {
    title: 'Operating Theatres',
    blurb: '',
    img: OperatingTheatreImg,
    url: '/services/new-build',
  },
  outpatientFacilities: {
    title: 'Outpatient Facilities',
    blurb: '',
    img: OutpatientsImg,
  },
  storerooms: {
    title: 'Storerooms',
    blurb: '',
    img: StoreroomImg,
  },
  wards: { title: 'Wards', blurb: '', img: WardImg },
};
export default function ServicesGrid() {
  return (
    <StyledServicesGrid>
      <HealthcareServiceGridItem service={serviceGridData.aande} />
      <HealthcareServiceGridItem service={serviceGridData.plantRooms} />
      <HealthcareServiceGridItem service={serviceGridData.operatingTheatres} />
      <HealthcareServiceGridItem
        service={serviceGridData.outpatientFacilities}
      />
      <HealthcareServiceGridItem service={serviceGridData.storerooms} />
      <HealthcareServiceGridItem service={serviceGridData.wards} />
    </StyledServicesGrid>
  );
}
const StyledServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  margin-top: 2rem;
  @media only screen and (max-width: 900px) {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
