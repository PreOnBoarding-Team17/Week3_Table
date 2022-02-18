import React from 'react';
import {
  DataInterface,
  ColDataInterface,
  RowDataInterface,
} from 'Utils/Interfaces';
import { FooterArrayInterface } from 'Utils/Interfaces';
import { Chip, ChipProps } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import {
  red,
  blue,
  orange,
  cyan,
  yellow,
  lightGreen,
} from '@mui/material/colors';

export const PRODUCT_CATEGORY = [
  '상품코드',
  '상품명',
  '상품가격',
  '상품수량',
  '연관상품ID',
];

export const ORDER_CATEGORY = [
  '주문서양식',
  '주문명',
  '주문번호',
  '주문수량',
  '주문단위',
  '주문자명',
  '주문자연락처',
  '수취인명',
  '수취인연락처',
  '메모',
  '택배사명',
];

export const RELEASE_CATEGORY = [
  '출고코드',
  '출고수량',
  '출고상태',
  '출고유형',
  '출고요청업체',
  '출고요청자',
  '출고요청일자',
  '출고창고명',
];

export const ROOT_CATEGORY = [
  '데이터출처',
  '출고서파일명',
  '엑셀행순번',
  '매핑상태',
  '재고부족여부',
];

export const ALL_CATEGORY = [
  '데이터출처',
  '출고서파일명',
  '엑셀행순번',
  '매핑상태',
  '재고부족여부',
  ...PRODUCT_CATEGORY,
  ...ORDER_CATEGORY,
  ...RELEASE_CATEGORY,
];

export const INITIAL_CATEGORY = {
  데이터출처: false,
  출고서파일명: false,
  엑셀행순번: false,
  매핑상태: true,
  재고부족여부: true,
  상품코드: true,
  상품명: false,
  상품가격: false,
  상품수량: false,
  연관상품ID: false,
  주문서양식: false,
  주문명: true,
  주문번호: true,
  주문수량: true,
  주문단위: false,
  주문자명: false,
  주문자연락처: false,
  수취인명: false,
  수취인연락처: false,
  메모: false,
  택배사명: false,
  출고코드: false,
  출고수량: true,
  출고상태: false,
  출고유형: false,
  출고요청업체: false,
  출고요청자: false,
  출고요청일자: false,
  출고창고명: false,
};

export const MODAL_INFO = [
  ['text', '출고 전표 번호', '00DNLQCDO0120220117D0KE3'],
  ['text', '출고 요청일자', '2022-01-18'],
  ['text', '출고 요청업체', '콜로상사'],
  ['text', '출고 요청자', 'test_si@colo.kr'],
  ['text', '출고 방식', '택배'],
  ['option', '출고 상태', '출고 요청'],
  ['option', '출고 유형', '오전(10:00)출고'],
  ['text', '파일명', '테스트_콜로상사주문서_test.xls'],
];

const CategoryType: { [key: string]: number } = {
  데이터출처: 4,
  출고서파일명: 10,
  엑셀행순번: 4,
  매핑상태: 13,
  재고부족여부: 12,
  상품코드: 10,
  상품명: 15,
  상품가격: 6,
  상품수량: 4,
  연관상품ID: 4,
  주문서양식: 7,
  주문명: 18,
  주문번호: 13,
  주문수량: 4,
  주문단위: 4,
  주문자명: 4,
  주문자연락처: 15,
  수취인명: 4,
  수취인연락처: 15,
  메모: 4,
  택배사명: 5,
  출고코드: 10,
  출고수량: 4,
  출고상태: 5,
  출고유형: 5,
  출고요청업체: 5,
  출고요청자: 4,
  출고요청일자: 12,
  출고창고명: 5,
};

export const FOOTER_INFO: FooterArrayInterface = [
  { variant: 'contained', text: '출고주문서 다운로드' },
  { variant: 'contained', text: '전체출고취소' },
  { variant: 'contained', text: '매핑결과 최종 확인' },
  { variant: 'outlined', text: '목록으로' },
];

function getChipProps(params: GridRenderCellParams): ChipProps {
  if (params.value === '출고주문오류') {
    return {
      icon: <WarningIcon style={{ fill: red[500] }} />,
      label: params.value,
      style: {
        borderColor: red[500],
        color: red[500],
      },
    };
  } else if (params.value === '정상') {
    return {
      icon: <CheckCircleIcon style={{ fill: blue[500] }} />,
      label: params.value,
      style: {
        borderColor: blue[500],
        color: blue[500],
      },
    };
  } else if (params.value === '재고부족취소') {
    return {
      icon: <NewReleasesIcon style={{ fill: orange[500] }} />,
      label: params.value,
      style: {
        borderColor: orange[500],
        color: orange[500],
      },
    };
  } else if (params.value === '주문명매핑성공') {
    return {
      label: params.value,
      style: {
        backgroundColor: cyan['A200'],
      },
    };
  } else if (params.value === '주문명세트지정') {
    return {
      label: params.value,
      style: {
        backgroundColor: yellow['A200'],
      },
    };
  } else if (params.value === '주문취소') {
    return {
      label: params.value,
      style: {
        backgroundColor: lightGreen['A200'],
      },
    };
  } else {
    return {
      label: params.value,
      style: {
        borderColor: '#fff',
      },
    };
  }
}

const getWidth = (column: string | number) => {
  const size: number = CategoryType[column] * 10;

  return size;
};

export const getColGrid = (columns: string[]): ColDataInterface[] => {
  return columns.map((column: string, index: number) => {
    if (column === '재고부족여부') {
      return {
        field: `col${index + 1}`,
        headerName: column,
        minWidth: getWidth(column),
        renderCell: (params: GridRenderCellParams<any, any, any>) => {
          return (
            <Chip variant="outlined" size="small" {...getChipProps(params)} />
          );
        },
      };
    } else if (column === '매핑상태') {
      return {
        field: `col${index + 1}`,
        headerName: column,
        minWidth: getWidth(column),
        renderCell: (params: GridRenderCellParams<any, any, any>) => {
          return (
            <Chip variant="filled" size="small" {...getChipProps(params)} />
          );
        },
      };
    } else
      return {
        field: `col${index + 1}`,
        headerName: column,
        minWidth: getWidth(column),
      };
  });
};

export const getLocation = (category: string): string => {
  if (PRODUCT_CATEGORY.find((el) => el === category)) {
    return 'product';
  } else if (ORDER_CATEGORY.find((el) => el === category)) {
    return 'order';
  } else if (RELEASE_CATEGORY.find((el) => el === category)) {
    return 'release';
  } else {
    return 'root';
  }
};

export const getRowGrid = (
  datas: DataInterface[],
  rowData: ColDataInterface[]
): RowDataInterface[] => {
  return datas.map((data: DataInterface, index: number) => {
    const newData: RowDataInterface = { id: index + 1 };

    if (data && data.상품 && data.주문 && data.출고) {
      for (let i = 0; i < rowData.length; i++) {
        switch (getLocation(rowData[i].headerName)) {
          case 'product':
            newData[`col${i + 1}`] = data.상품[rowData[i].headerName];
            break;
          case 'order':
            newData[`col${i + 1}`] = data.주문[rowData[i].headerName];
            break;
          case 'release':
            newData[`col${i + 1}`] = data.출고[rowData[i].headerName];
            break;
          default:
            newData[`col${i + 1}`] = data[rowData[i].headerName];
            break;
        }
      }
    }
    return newData;
  });
};
