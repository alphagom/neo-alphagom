// 포트폴리오 항목 - 인덱스 연결 type
export interface PorfolioItemsType {
  portfolioItems: number
  mustHave: boolean
}

// 포트폴리오 항목 Enum
export enum PortfoiloItemsEnum {
  COVER = 1,
  INFO,
  EDUCATION,
  PROJECT,
  ACTIVITIES,
  AWARDS,
  CAREER,
  COVERLETTER,
}

// 포트폴리오 항목 문자열
// enum 이 1부터 시작하기 때문에 맨 앞에 빈 문자열 추가
export const PortfolioItemsStr = [
  '',
  '표지',
  '기본정보',
  '학력',
  '프로젝트',
  '대내외활동',
  '수상내역',
  '경력',
  '자기소개서',
]

export const PortfolioItems: PorfolioItemsType[] = [
  {
    portfolioItems: PortfoiloItemsEnum.COVER,
    mustHave: true,
  },
  {
    portfolioItems: PortfoiloItemsEnum.INFO,
    mustHave: true,
  },
  {
    portfolioItems: PortfoiloItemsEnum.EDUCATION,
    mustHave: true,
  },
  {
    portfolioItems: PortfoiloItemsEnum.PROJECT,
    mustHave: false,
  },
  {
    portfolioItems: PortfoiloItemsEnum.ACTIVITIES,
    mustHave: false,
  },
  {
    portfolioItems: PortfoiloItemsEnum.AWARDS,
    mustHave: false,
  },
  {
    portfolioItems: PortfoiloItemsEnum.CAREER,
    mustHave: false,
  },
  {
    portfolioItems: PortfoiloItemsEnum.COVERLETTER,
    mustHave: false,
  },
]
