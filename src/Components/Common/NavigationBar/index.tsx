import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, AppBar, Chip, Button, Typography, Toolbar } from '@mui/material';
import InformationModal from 'Components/Common/NavigationBar/InformationModal';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 'none' }}>
      <Navigation>
        <TitleContainer>
          <Box>
            <SubTitle size="small" label="출고 관리" />
          </Box>
          <Title variant="h5">출고 매핑 관리</Title>
        </TitleContainer>
        <Box sx={{ flexGrow: 1 }} />
        <MenuButton>VOC 관리</MenuButton>
        <MenuButton sx={{ marginLeft: '10px' }} onClick={handleClick}>
          출고 신청 정보
        </MenuButton>
        <InformationModal data={open} handler={handleClick} />
      </Navigation>
    </AppBar>
  );
};

const Navigation = styled(Toolbar)`
  background-color: white;
  border-bottom: 1px solid #dddddd;
  align-items: end;
`;

const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
`;

const SubTitle = styled(Chip)`
  background-color: #7dd8ff;
  color: white;
`;

const Title = styled(Typography)`
  color: #3e3e3e;
  font-weight: bold;
  margin-top: 4px;
`;

const MenuButton = styled(Button)`
  border: 1px solid #777777;
  color: #3e3e3e;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;

export default NavigationBar;
