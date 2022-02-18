import React, { useEffect, useState } from 'react';
import { FormGroup, Modal } from '@mui/material';
import {
  ModalContainer,
  ModalContents,
  ModalContent,
  ModalTitle,
} from 'Utils/Constants/Modal';
import SubmitButton from 'Components/Common/SubmitButton';
import {
  DataInterface,
  NewDataInterface,
  RowDataInterface,
} from 'Utils/Interfaces';
import CircleIcon from '@mui/icons-material/Circle';

interface CellClickModalProps {
  datas: DataInterface[];
  toggle: boolean;
  toggleFalse: () => void;
  row: RowDataInterface;
}

const MODALTITLE = '모든 데이터 보기';
const MODALBTNTEXT = '확인';

const CellClickModal: React.FC<CellClickModalProps> = ({
  datas,
  toggle,
  toggleFalse,
  row,
}) => {
  const [modalData, setModalData] = useState<NewDataInterface>([]);
  useEffect(() => {
    const rowToArray: string | number | unknown[] = [];
    Object.entries(row).forEach(([key, value]) => {
      key !== 'id' &&
        value !== undefined &&
        value !== null &&
        rowToArray.push(value);
    });

    const newDatas = datas.map((d: DataInterface) => {
      const newData = { ...d, ...d.상품, ...d.주문, ...d.출고 };
      delete newData.상품;
      delete newData.주문;
      delete newData.출고;

      return newData;
    });

    newDatas.forEach((d: DataInterface) => {
      const newDataArray: string | number | unknown[] = [];
      Object.values(d).forEach((value) => {
        newDataArray.push(value);
      });

      const compareResult = rowToArray.filter((x) => newDataArray.includes(x));

      compareResult.length === rowToArray.length && setModalData(d);
    });
  }, []);

  return (
    <Modal open={toggle} onClose={toggleFalse}>
      <ModalContainer>
        <ModalTitle variant="h6">{MODALTITLE}</ModalTitle>
        <ModalContents>
          <FormGroup>
            {Object.entries(modalData).map(([key, value]) => (
              <ModalContent key={key}>
                <CircleIcon color="primary" fontSize="small" sx={{ mx: 2 }} />
                {key} : {value}
              </ModalContent>
            ))}
          </FormGroup>
        </ModalContents>
        <SubmitButton
          variant="contained"
          text={MODALBTNTEXT}
          onClick={toggleFalse}
        />
      </ModalContainer>
    </Modal>
  );
};

export default CellClickModal;
