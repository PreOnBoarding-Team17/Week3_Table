import React, { useState } from 'react';
import {
  Button,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import {
  ModalContainer,
  ModalContents,
  ModalTitle,
} from 'Utils/Constants/Modal';
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
          <ModalContents>
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
          </ModalContents>
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

export default SettingCategory;
