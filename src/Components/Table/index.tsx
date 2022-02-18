import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { DataGrid } from '@mui/x-data-grid';

import { getColGrid, getRowGrid, ALL_CATEGORY } from 'Utils/Constants';
import {
  DataInterface,
  ColDataInterface,
  RowDataInterface,
} from 'Utils/Interfaces';

const testCategory = [
  '매핑상태',
  '상품코드',
  '주문명',
  '주문번호',
  '주문수량',
  '출고수량',
];

interface TableProps {
  datas: DataInterface[] | null;
}

const Table: React.FC<TableProps> = ({ datas }) => {
  const [columns, setColumns] = useState<ColDataInterface[]>([]);
  const [rows, setRows] = useState<RowDataInterface[]>([]);

  useEffect(() => {
    if (datas) {
      setColumns(getColGrid(ALL_CATEGORY));
      setRows(getRowGrid([...datas, ...datas], getColGrid(ALL_CATEGORY)));
      console.log(rows, columns);
    }
  }, [datas]);
  return (
    <TableWrap>
      {rows.length > 0 && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={rows.length}
          rowsPerPageOptions={[rows.length]}
          rowHeight={100}
          disableExtendRowFullWidth={true}
          hideFooterPagination
        />
      )}
    </TableWrap>
  );
};

const TableWrap = styled.section`
  width: calc(100% - 60px);
  height: 75vh;
  margin: 20px 30px;
  padding: 50px;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
`;

export default Table;
