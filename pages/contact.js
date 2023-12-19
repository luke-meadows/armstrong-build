import styled from 'styled-components';
import ContactHero from '../components/hero/ContactHero';
import ContactForm from '../components/ContactForm';
import Background from '../components/Background';

import SectionHeading from '../components/SectionHeading';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';
export default function Contact() {
  return (
    <StyledContact>
      <NextSeo
        title="Contact us - Armstrong Build"
        description="Send us a message to get started on your construction journey."
      />
      <Background />
      <ContactHero />
      <SectionHeading heading="Send us a message" noButton />
      <ContactForm />
      <Footer />
    </StyledContact>
  );
}
const StyledContact = styled.main`
  position: relative;
`;
