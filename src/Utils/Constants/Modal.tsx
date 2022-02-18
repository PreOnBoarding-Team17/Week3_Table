import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const ModalContainer = styled(Box)`
  position: absolute;
  border-radius: 16px;
  top: 50%;
  left: 50%;
  transition: 0.5s all ease-in;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
`;

export const ModalTitle = styled(Typography)`
  font-weight: bold;
`;

export const ModalContents = styled(Box)`
  width: 100%;
  margin: 36px 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalContent = styled(Box)`
  margin: 12px 0;
`;
