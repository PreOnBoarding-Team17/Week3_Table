export interface StringObjKey {
  [key: string | number]: string | number | undefined;
}

export interface ColDataInterface {
  field: string;
  headerName: string;
  minWidth: number;
}

export interface RowDataInterface {
  [key: string | number]: string | number | undefined;
  id: number;
  col1?: string | number;
  col2?: string | number;
  col3?: string | number;
  col4?: string | number;
  col5?: string | number;
  col6?: string | number;
  col7?: string | number;
  col8?: string | number;
  col9?: string | number;
  col10?: string | number;
  col11?: string | number;
  col12?: string | number;
  col13?: string | number;
  col14?: string | number;
  col15?: string | number;
  col16?: string | number;
  col17?: string | number;
  col18?: string | number;
  col19?: string | number;
  col20?: string | number;
  col21?: string | number;
  col22?: string | number;
  col23?: string | number;
  col24?: string | number;
  col25?: string | number;
  col26?: string | number;
  col27?: string | number;
  col28?: string | number;
  col29?: string | number;
  col30?: string | number;
}

export interface ProductInterface {
  [key: string | number]: string | number | undefined;

  상품코드?: string;
  상품명?: string;
  상품가격?: number;
  상품수량?: number;
  연관상품ID?: string;
}
export interface OrderInterface {
  [key: string | number]: string | number | undefined;
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
  [key: string | number]: string | number | undefined;
  출고코드?: string;
  출고수량?: number;
  출고상태?: string;
  출고유형?: string;
  출고요청업체?: string;
  출고요청자?: string;
  출고요청일자?: string;
  출고창고명?: string;
}
export interface RootInterface {
  [key: string | number]: any;

  데이터출처?: string;
  출고서파일명?: string;
  엑셀행순번?: number;
  매핑상태?: string;
  재고부족여부?: string;
}

export interface DataInterface extends RootInterface {
  상품?: ProductInterface;
  주문?: OrderInterface;
  출고?: ReleaseInterface;
}

export interface NewDataInterface extends RootInterface {
  상품코드?: string;
  상품명?: string;
  상품가격?: number;
  상품수량?: number;
  연관상품ID?: string;
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
  출고코드?: string;
  출고수량?: number;
  출고상태?: string;
  출고유형?: string;
  출고요청업체?: string;
  출고요청자?: string;
  출고요청일자?: string;
  출고창고명?: string;
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

interface FooterElementInterface {
  variant: 'contained' | 'outlined';
  text: string;
}
export type FooterArrayInterface = Array<FooterElementInterface>;
