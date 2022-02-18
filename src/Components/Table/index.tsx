import React, { useCallback, useEffect, useState } from 'react';
import { getColGrid, getRowGrid, INITIAL_CATEGORY } from 'Utils/Constants';
import SettingCategory from 'Components/SettingCategory';
import { DataGrid, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import {
  DataInterface,
  ColDataInterface,
  RowDataInterface,
  SelectedInterface,
} from 'Utils/Interfaces';

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
      setColumns(getColGrid(selectedTrue));
      setRows(getRowGrid([...datas, ...datas], getColGrid(selectedTrue)));
    }
  }, [datas, selectedTrue]);

  const [columns, setColumns] = useState<ColDataInterface[]>([]);
  const [rows, setRows] = useState<RowDataInterface[]>([]);

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
        rowsPerPageOptions={[rows.length]}
        disableExtendRowFullWidth={true}
        hideFooterPagination
        localeText={{
          toolbarFilters: '카테고리 검색',
        }}
        components={{
          Toolbar: CustomToolbar,
        }}
        sx={{
          border: 'none',
          borderTop: 2,
          borderRadius: 0,
          borderColor: 'black',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </TableWrap>
  );
};

const TableWrap = styled.section`
  width: 100%;
  height: 70vh;
  padding-top: 50px;
  box-sizing: border-box;
  overflow: hidden;
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
