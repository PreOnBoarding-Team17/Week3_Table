import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  PRODUCT_CATEGORY,
  ORDER_CATEGORY,
  RELEASE_CATEGORY,
} from 'Utils/Constants';
import { DataInterface } from 'Utils/Interfaces';

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
      console.log(data, rowData[i].headerName);
      newData[`col${i + 1}`] = data.상품[rowData[i].headerName];
    }
    return newData;
  });
};
interface TableProps {
  datas: DataInterface[] | null;
}

const Table: React.FC<TableProps> = ({ datas }) => {
  const [columns, setColumns] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => {
    if (datas) {
      setColumns(getColGrid(PRODUCT_CATEGORY));
      setRows(getRowGrid(datas, columns));
      console.log(rows, columns);
    }
  }, [datas]);
  return (
    <section>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rows.length}
        autoHeight
      />
    </section>
  );
};

export default Table;
