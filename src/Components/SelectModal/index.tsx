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
import { SelectedInterface } from 'Utils/Interfaces';
import useToggle from 'Utils/Hooks/UseToggle';

const MODALTITLE = '카테고리 선택해주세요.';
const MODALBTNTEXT = '선택 완료';

interface CustomModalProps {
  text: string;
  selected: SelectedInterface;
  setSelected: (selectedCategory: SelectedInterface) => void;
}

const SelectModal: React.FC<CustomModalProps> = ({
  text,
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
        {text}
      </Button>
      <Modal open={toggle} onClose={toggleOutSide}>
        <Box sx={modal}>
          <Typography variant="h6">{MODALTITLE}</Typography>
          <Box sx={modalContent}>
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
          </Box>

          <Button variant="contained" size="large" onClick={handleSubmit}>
            {MODALBTNTEXT}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

const modal = {
  position: 'relative' as const,
  top: '50%',
  left: '50%',
  transition: '1s all ease-in',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: 25,
  padding: '32px 16px',
};

const modalContent = {
  width: '100%',
  my: 3,
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default SelectModal;
