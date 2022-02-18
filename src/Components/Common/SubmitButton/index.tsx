import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

interface SubmitButtonProps {
  variant: 'outlined' | 'contained';
  text: string;
}

const SubmitButton = ({ variant, text }: SubmitButtonProps) => {
  return <CustomButton variant={variant}>{text}</CustomButton>;
};

const CustomButton = styled(Button)`
  border: 1px solid #1976d2;
  margin: 10px;
  width: 160px;
  height: 45px;
`;

export default SubmitButton;
