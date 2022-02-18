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

export const ModalInfo = [
  ['text', '출고 전표 번호', '00DNLQCDO0120220117D0KE3'],
  ['text', '출고 요청일자', '2022-01-18'],
  ['text', '출고 요청업체', '콜로상사'],
  ['text', '출고 요청자', 'test_si@colo.kr'],
  ['text', '출고 방식', '택배'],
  ['option', '출고 상태', '출고 요청'],
  ['option', '출고 유형', '오전(10:00)출고'],
  ['text', '파일명', '테스트_콜로상사주문서_test.xls'],
];
