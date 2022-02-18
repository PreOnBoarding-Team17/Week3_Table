import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { DataGrid, GridToolbarFilterButton } from '@mui/x-data-grid';
import {
  PRODUCT_CATEGORY,
  ORDER_CATEGORY,
  RELEASE_CATEGORY,
} from 'Utils/Constants';
import { SelectedInterface, DataInterface } from 'Utils/Interfaces';
import { Box } from '@mui/system';
import SettingCategory from 'Components/SettingCategory';
import { INITIAL_CATEGORY } from 'Utils/Constants/';

const getColGrid = (
  columns: string[]
): { field: string; headerName: string; width: number }[] => {
  return columns.map((column: string, index: number) => {
    return { field: `col${index + 1}`, headerName: column, width: 150 };
  });
};

interface StringObjKey {
  [key: string | number]: string | number;
}

const getRowGrid = (datas: any[], rowData: any[]) => {
  return datas.map((data: any, index: number) => {
    const newData: StringObjKey = { id: index + 1 };

    for (let i = 0; i < rowData.length; i++) {
      newData[`col${i + 1}`] = data.상품[rowData[i].headerName];
    }
    return newData;
  });
};

interface TableProps {
  datas: DataInterface[];
}

const Table: React.FC<TableProps> = ({ datas }) => {
  const localSelected = localStorage.getItem('selected');

  const [selected, setSelected] = useState<SelectedInterface>(
    localSelected ? JSON.parse(localSelected) : INITIAL_CATEGORY
  );
  const [selectedTrue, setSelectedTrue] = useState<string[]>([]);

  useEffect(() => {
    !localSelected &&
      localStorage.setItem('selected', JSON.stringify(INITIAL_CATEGORY));
  }, []);

  useEffect(() => {
    const options: string[] = [];
    Object.entries(selected).map(([key, value]) => {
      value && options.push(key);
    });

    setSelectedTrue(options);
  }, [selected]);

  useEffect(() => {
    if (datas) {
      setColumns(getColGrid(PRODUCT_CATEGORY));
      setRows(getRowGrid([...datas, ...datas], columns));
    }
  }, [datas]);

  const [columns, setColumns] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  const CustomToolbar = useCallback(() => {
    return (
      <CustomToolbarWrap>
        <GridToolbarFilterButton />
        <SettingCategory selected={selected} setSelected={setSelected} />
      </CustomToolbarWrap>
    );
  }, [selected]);

  return (
    <TableWrap>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rows.length}
        autoHeight
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </TableWrap>
  );
};

const TableWrap = styled.section`
  width: 100%;
  height: 75vh;
  padding-top: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  border-style: solid none solid none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: scroll;
`;

const CustomToolbarWrap = styled(Box)`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default Table;
