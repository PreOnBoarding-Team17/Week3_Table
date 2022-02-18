import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import styled from '@emotion/styled';
import { SelectedInterface } from 'Utils/Interfaces';
import useToggle from 'Utils/Hooks/UseToggle';
import SubmitButton from 'Components/Common/SubmitButton';

const BTN_TEXT = '+ 카테고리 설정';
const MODAL_TITLE = '카테고리를 선택해주세요.';

const MODAL_BTN_TEXT = '선택 완료';

interface SettingCategoryProps {
  selected: SelectedInterface;
  setSelected: (selectedCategory: SelectedInterface) => void;
}

const SettingCategory: React.FC<SettingCategoryProps> = ({
  selected,
  setSelected,
}) => {
  const [toggle, toggleTrue, toggleFalse] = useToggle(false);
  const [copySelected, setCopySelected] = useState<SelectedInterface>(selected);

  const toggleOutSide = () => {
    toggleFalse();
    setCopySelected(selected);
  };

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCopySelected({ ...copySelected, [name]: checked });
  };

  const handleSubmit = () => {
    toggleFalse();
    localStorage.setItem('selected', JSON.stringify(copySelected));
    setSelected(copySelected);
  };

  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={toggleTrue}>
        {BTN_TEXT}
      </Button>
      <Modal open={toggle} onClose={toggleOutSide}>
        <ModalContainer>
          <ModalTitle variant="h6">{MODAL_TITLE}</ModalTitle>
          <ModalContent>
            <FormGroup>
              {Object.entries(copySelected).map(([key, value]) => (
                <FormControlLabel
                  key={key}
                  label={key}
                  control={
                    <Checkbox
                      name={key}
                      checked={value}
                      onChange={handleCheckBox}
                    />
                  }
                />
              ))}
            </FormGroup>
          </ModalContent>
          <SubmitButton
            variant="contained"
            text={MODAL_BTN_TEXT}
            onClick={handleSubmit}
          />
        </ModalContainer>
      </Modal>
    </div>
  );
};

const ModalContainer = styled(Box)`
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
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
`;

const ModalTitle = styled(Typography)`
  font-weight: bold;
`;

const ModalContent = styled(Box)`
  width: 100%;
  margin: 36px 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SettingCategory;
