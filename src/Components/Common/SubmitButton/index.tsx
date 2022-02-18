import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

interface SubmitButtonProps {
  variant: 'outlined' | 'contained';
  text: string;
  onClick?: () => void;
}

const SubmitButton = ({ variant, text, onClick }: SubmitButtonProps) => {
  return (
    <CustomButton variant={variant} onClick={onClick}>
      {text}
    </CustomButton>
  );
};

const CustomButton = styled(Button)`
  border: 1px solid #1976d2;
  margin: 10px;
  width: 155px;
  height: 45px;
`;

export default SubmitButton;
