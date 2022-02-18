import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { FOOTER_INFO } from 'Utils/Constants';
import SubmitButton from 'Components/Common/SubmitButton';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        {FOOTER_INFO.map((element, index) => (
          <SubmitButton
            key={index}
            variant={element.variant}
            text={element.text}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled(Box)`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Box)`
  @media screen and (max-width: 768px) {
    width: 380px;
  }
`;

export default Footer;
