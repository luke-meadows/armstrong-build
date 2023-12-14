import SolarImg from '../../public/images/service-intro-images/sustainable/solar-image.jpg';
import RainwaterImg from '../../public/images/service-intro-images/sustainable/rainwater-image.jpg';
import SolarHeatingImg from '../../public/images/service-intro-images/sustainable/heating-image.jpg';
import PlantRoomImg from '../../public/images/service-intro-images/sustainable/plant-image.jpg';

export const sustainableData = {
  solar: {
    title: 'Solar Energy',
    description: [
      "Harness the limitless power of the sun with Armstrong Build's solar energy solutions. Our cutting-edge solar panels convert sunlight into clean, renewable electricity, reducing your carbon footprint.",
      'Whether for residential or commercial applications, we customise solar systems to meet specific energy needs.',
      'Armstrong Build stands at the forefront of solar energy innovation, offering unparalleled expertise in solar installations.',
      'Our seasoned professionals specialise in designing and implementing cutting-edge solar solutions tailored to diverse needs.',
    ],
    images: [SolarImg],
  },
  water: {
    title: 'Rainwater Harvesting',
    description: [
      'At Armstrong Build, we champion water conservation through innovative rainwater harvesting solutions.',
      'Capture and store rainwater from rooftops to be reused for irrigation, flushing toilets, and other non-potable applications.',
      'Our tailored installations maximise efficiency and minimise environmental impact, promoting sustainable water management.',
      'Embrace a greener approach to water use with our state-of-the-art rainwater harvesting solutions, contributing to a more eco-friendly and resilient infrastructure.',
    ],
    images: [RainwaterImg],
  },
  solarHeating: {
    title: 'Solar Heating System',
    description: [
      "Experience the warmth of sustainable living with Armstrong Build's solar heating installation service.",
      'We specialise in designing and installing solar thermal collectors that harness sunlight to provide energy-efficient heating for both residential and commercial spaces.',
      'From radiant floor heating to solar water heaters, our systems optimize energy capture, significantly reducing reliance on conventional heating methods.',
      'Enjoy cost savings, reduced emissions, and a cosy, eco-friendly environment with our advanced solar heating solutions.',
    ],
    images: [SolarHeatingImg],
  },
  plantRoom: {
    title: 'Sustainable Plant Room',
    description: [
      'We redefine utility infrastructure with our sustainable plant rooms. These integral spaces house equipment for heating, cooling, and ventilation, designed with a focus on energy efficiency and environmental responsibility.',
      'Our plant rooms incorporate advanced technologies, such as heat recovery systems and high-efficiency HVAC equipment, ensuring optimal performance while minimising energy consumption.',
      'From concept to construction, we prioritise sustainability, creating plant rooms that contribute to a greener, cleaner environment.',
    ],
    images: [PlantRoomImg],
  },
};
