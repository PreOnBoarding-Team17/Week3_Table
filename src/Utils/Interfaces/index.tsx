// export interface ProductInterface {
//   code: string;
//   name: string;
//   price: number;
//   number: number;
//   relatedCode: string;
// }
export interface ProductInterface {
  상품코드?: string;
  상품명?: string;
  상품가격?: number;
  상품수량?: number;
  연관상품ID?: string;
}

// export interface OrderInterface {
//   code: string;
//   orderForm: string;
//   orderName: string;
//   orderNum: string;
//   orderUnit: string;
//   ordererName: string;
//   ordererPhone: string;
//   recieverName: string;
//   recieverPhone: string;
//   memo: string;
//   delivery: string;
// }
export interface OrderInterface {
  주문서양식?: string;
  주문명?: string;
  주문번호?: string;
  주문수량?: string;
  주문단위?: string;
  주문자명?: string;
  주문자연락처?: string;
  수취인명?: string;
  수취인연락처?: string;
  메모?: string;
  택배사명?: string;
}

export interface ReleaseInterface {
  출고코드?: string;
  출고요청일자?: string;
  출고요청업체?: string;
  출고요청자?: string;
  출고수량?: number;
  출고상태?: string;
  출고유형?: string;
  출고창고명?: string;
}
// export interface ReleaseInterface {
//   code: string;
//   num?: number;
//   state?: string;
//   type?: string;
//   company?: string;
//   person?: string;
//   date?: string;
//   storage?: string;
// }

// export interface DataInterface {
//   dataFrom?: string;
//   dataFileName?: string;
//   excelNum?: number;
//   mappingState?: string;
//   outOfStock?: string;
//   product?: ProductInterface;
//   order?: OrderInterface;
//   release?: ReleaseInterface;
// }
export interface DataInterface {
  데이터출처?: string;
  출고서파일명?: string;
  엑셀행순번?: number;
  매핑상태?: string;
  재고부족여부?: string;
  상품?: ProductInterface;
  주문?: OrderInterface;
  출고?: ReleaseInterface;
}

export interface SelectedInterface {
  데이터출처: boolean;
  출고서파일명: boolean;
  엑셀행순번: boolean;
  매핑상태: boolean;
  재고부족여부: boolean;
  상품코드: boolean;
  상품명: boolean;
  상품가격: boolean;
  상품수량: boolean;
  연관상품ID: boolean;
  주문서양식: boolean;
  주문명: boolean;
  주문번호: boolean;
  주문수량: boolean;
  주문단위: boolean;
  주문자명: boolean;
  주문자연락처: boolean;
  수취인명: boolean;
  수취인연락처: boolean;
  메모: boolean;
  택배사명: boolean;
  출고코드: boolean;
  출고수량: boolean;
  출고상태: boolean;
  출고유형: boolean;
  출고요청업체: boolean;
  출고요청자: boolean;
  출고요청일자: boolean;
  출고창고명: boolean;
}
