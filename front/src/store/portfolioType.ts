// 포트폴리오 항목 - 인덱스 연결 type
export interface PorfolioItemsType {
  portfolioItems: string
  mustHave: boolean
  order: number
}

// 포트폴리오 항목 Enum
export enum PortfoiloItemsEnum {
  COVER = '표지',
  INFO = '기본정보',
  EDUCATION = '학력',
  PROJECT = '프로젝트',
  ACTIVITIES = '대내외 활동',
  AWARDS = '수상내역',
  CAREER = '경력',
  COVERLETTER = '자기소개서',
}

export const PortfolioItems: PorfolioItemsType[] = [
  {
    portfolioItems: PortfoiloItemsEnum.COVER,
    mustHave: true,
    order: 0,
  },
  {
    portfolioItems: PortfoiloItemsEnum.INFO,
    mustHave: true,
    order: 1,
  },
  {
    portfolioItems: PortfoiloItemsEnum.EDUCATION,
    mustHave: true,
    order: 2,
  },
  {
    portfolioItems: PortfoiloItemsEnum.PROJECT,
    mustHave: false,
    order: 3,
  },
  {
    portfolioItems: PortfoiloItemsEnum.ACTIVITIES,
    mustHave: false,
    order: 4,
  },
  {
    portfolioItems: PortfoiloItemsEnum.AWARDS,
    mustHave: false,
    order: 5,
  },
  {
    portfolioItems: PortfoiloItemsEnum.CAREER,
    mustHave: false,
    order: 6,
  },
  {
    portfolioItems: PortfoiloItemsEnum.COVERLETTER,
    mustHave: false,
    order: 7,
  },
]
