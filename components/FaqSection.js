import styled from 'styled-components';
import Container from './Container';
import FaqItem from './service-page-into-sections/FaqItem';
export default function FaqSection() {
  const faqs = [
    {
      question: 'What building services do you offer?',
      answer:
        'Sure. Arrange a no obligation site visit with our surveyor by calling 0121 441 5222. We can usually call out within 2 working days including Saturday. Site visit takes between 20-30 minutes depending on work required. Our representative will discuss your needs and explain anything you might not be sure about. We draw up a detailed plan of work required and costs breakdown. We will also include a guaranteed start date and realistic completion date. Once we get the green light we usually begin work within 6-8 weeks.',
    },
    {
      question:
        'I’ve seen a new Kitchen / Bathroom I like. Do you offer an installation only service?',
      answer:
        'Sure. Arrange a no obligation site visit with our surveyor by calling 0121 441 5222. We can usually call out within 2 working days including Saturday. Site visit takes between 20-30 minutes depending on work required. Our representative will discuss your needs and explain anything you might not be sure about. We draw up a detailed plan of work required and costs breakdown. We will also include a guaranteed start date and realistic completion date. Once we get the green light we usually begin work within 6-8 weeks.',
    },
    {
      question: 'Is it possible to get a rough estimate of costs by email?',
      answer:
        'Sure. Arrange a no obligation site visit with our surveyor by calling 0121 441 5222. We can usually call out within 2 working days including Saturday. Site visit takes between 20-30 minutes depending on work required. Our representative will discuss your needs and explain anything you might not be sure about. We draw up a detailed plan of work required and costs breakdown. We will also include a guaranteed start date and realistic completion date. Once we get the green light we usually begin work within 6-8 weeks.',
    },
    {
      question: 'How do I request a quote for my project?',
      answer:
        'Sure. Arrange a no obligation site visit with our surveyor by calling 0121 441 5222. We can usually call out within 2 working days including Saturday. Site visit takes between 20-30 minutes depending on work required. Our representative will discuss your needs and explain anything you might not be sure about. We draw up a detailed plan of work required and costs breakdown. We will also include a guaranteed start date and realistic completion date. Once we get the green light we usually begin work within 6-8 weeks.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Sure. Arrange a no obligation site visit with our surveyor by calling 0121 441 5222. We can usually call out within 2 working days including Saturday. Site visit takes between 20-30 minutes depending on work required. Our representative will discuss your needs and explain anything you might not be sure about. We draw up a detailed plan of work required and costs breakdown. We will also include a guaranteed start date and realistic completion date. Once we get the green light we usually begin work within 6-8 weeks.',
    },
    {
      question:
        'I’ve never had my home extended before. Can you tell me what to expect?',
      answer:
        'Sure. Arrange a no obligation site visit with our surveyor by calling 0121 441 5222. We can usually call out within 2 working days including Saturday. Site visit takes between 20-30 minutes depending on work required. Our representative will discuss your needs and explain anything you might not be sure about. We draw up a detailed plan of work required and costs breakdown. We will also include a guaranteed start date and realistic completion date. Once we get the green light we usually begin work within 6-8 weeks.',
    },
  ];
  return (
    <Container>
      <StyledFaqSection>
        <div className="flex-container">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </StyledFaqSection>
    </Container>
  );
}
const StyledFaqSection = styled.section`
  background: #000;
  color: #000;
  border-radius: 0.3rem;
  padding: 2rem;
  margin-bottom: 4rem;
  .flex-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;
