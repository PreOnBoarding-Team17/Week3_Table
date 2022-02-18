import React from 'react';
import { Box, List, Drawer, ListItem, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { ModalInfo } from 'Utils/Constants';
import Circle from 'Assets/Circle.png';

interface InformationModalProps {
  handler: () => void;
  data: boolean;
}

const InformationModal = ({ data, handler }: InformationModalProps) => {
  return (
    <Drawer anchor="right" open={data} onClose={handler}>
      <Box sx={{ width: 300 }}>
        <List>
          <Title>출고 신청 정보</Title>
          {ModalInfo.map((element, index) => (
            <InfoList key={index}>
              <ListBox>
                <ListIcon src={Circle} />
              </ListBox>
              <TextBox>
                <TextTitle>{element[1]}</TextTitle>
                {element[0] === 'text' ? (
                  <TextSubTitle>{element[2]}</TextSubTitle>
                ) : (
                  <TextSelect>
                    <option>{element[2]}</option>
                  </TextSelect>
                )}
              </TextBox>
            </InfoList>
          ))}
          <ButtonBox>
            <Button variant="contained">변경하기</Button>
          </ButtonBox>
        </List>
      </Box>
    </Drawer>
  );
};

const Title = styled(ListItem)`
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  border-bottom: 1px solid #dddddd;
`;

const InfoList = styled(ListItem)`
  height: 70px;
  padding: 0;
  border-bottom: 1px solid #dddddd;
`;

const ListBox = styled(Box)`
  width: 50px;
  height: 100%;
  position: relative;
`;

const ListIcon = styled.img`
  position: absolute;
  right: 7px;
  width: 7px;
  top: 26px;
`;

const TextBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextTitle = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
`;

const TextSubTitle = styled(Typography)`
  font-size: 11px;
  color: #3d3d3d;
`;

const TextSelect = styled.select`
  width: 110px;
  color: #cbcbcb;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  font-size: 8px;
  padding: 2px;
`;

const ButtonBox = styled(Box)`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default InformationModal;
