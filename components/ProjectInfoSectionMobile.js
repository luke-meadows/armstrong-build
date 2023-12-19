import styled from 'styled-components';
import Container from './Container';
import ProductInfoImages from './ProductInfoImages';
import Button from './Button';
export default function ProjectInfoSectionMobile({ project }) {
  return (
    <div style={{ background: 'black' }}>
      <Container>
        <div style={{ paddingTop: '1rem' }} />
        <div>
          {project?.mainText?.map((text, i) => (
            <p style={{ color: '#fff' }} key={i}>
              {text}
            </p>
          ))}
          <div style={{ paddingTop: '1rem' }} />
        </div>
        <ProductInfoImages images={project?.images} />
        <div style={{ paddingTop: '2rem' }} />
        <Button
          arrowDirection="left"
          text="Back to portfolio"
          url="/portfolio"
        />
        <div style={{ paddingTop: '2rem' }} />
      </Container>
    </div>
  );
}
