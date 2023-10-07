import styled from 'styled-components';
import ContactHero from '../components/Heros/ContactHero';
import ContactForm from '../components/ContactForm';
import Background from '../components/Background';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import SectionHeading from '../components/SectionHeading';
import Footer from '../components/Footer';
export default function Contact() {
  return (
    <StyledContact>
      <Background />
      <TopHeader />
      <Header />
      <ContactHero />
      <SectionHeading heading="Send us a message" noButton />
      <ContactForm />
      <Footer />
    </StyledContact>
  );
}
const StyledContact = styled.section`
  position: relative;
`;
