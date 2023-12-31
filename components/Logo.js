import Image from 'next/image';
import styled from 'styled-components';
import ArmstrongBuildLogo from '../public/images/logo/armstrong-build-logo.png';
export default function Logo({ width = '250px' }) {
  return (
    <StyledLogo width={width}>
      <Image src={ArmstrongBuildLogo} layout="responsive" objectFit="cover" />
    </StyledLogo>
  );
}
const StyledLogo = styled.div`
  position: relative;
  width: ${(props) => props.width};
  @media only screen and (max-width: 1235px) {
    width: 200px;
  }
`;
