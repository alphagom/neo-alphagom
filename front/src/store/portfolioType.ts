// 포트폴리오 디자인 import
import ActivitiesDesign from 'pages/portfolio/components/itemdesigns/base/ActivitiesDesign'
import AwardsDesign from 'pages/portfolio/components/itemdesigns/base/AwardsDesign'
import CareerDesign from 'pages/portfolio/components/itemdesigns/base/CareerDesign'
import CoverDesign from 'pages/portfolio/components/itemdesigns/base/CoverDesign'
import CoverletterDesign from 'pages/portfolio/components/itemdesigns/base/CoverletterDesign'
import EducationDesign from 'pages/portfolio/components/itemdesigns/base/EducationDesign'
import InfoDesigns from 'pages/portfolio/components/itemdesigns/base/InfoDesigns'
import ProjectDesign from 'pages/portfolio/components/itemdesigns/base/ProjectDesign'

// 포트폴리오 입력폼 import
import ActivitiesForm from 'pages/portfolio/components/itemforms/ActivitiesForm'
import AwardsForm from 'pages/portfolio/components/itemforms/AwardsForm'
import CareerForm from 'pages/portfolio/components/itemforms/CareerForm'
import CoverForm from 'pages/portfolio/components/itemforms/CoverForm'
import CoverletterForm from 'pages/portfolio/components/itemforms/CoverletterForm'
import EducationForm from 'pages/portfolio/components/itemforms/EducationForm'
import InfoForm from 'pages/portfolio/components/itemforms/InfoForm'
import ProjectForm from 'pages/portfolio/components/itemforms/ProjectForm'
import React from 'react'

// 포트폴리오 항목 - 인덱스 연결 type
export interface PorfolioItemsType {
  order: number
  mustHave: boolean
  itemTitle: string
  itemDesign: React.ElementType
  itemForm: React.ElementType
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
    order: PortfoiloItemsEnum.COVER,
    mustHave: true,
    itemTitle: '표지',
    itemDesign: CoverDesign,
    itemForm: CoverForm,
  },
  {
    order: PortfoiloItemsEnum.INFO,
    mustHave: true,
    itemTitle: '기본정보',
    itemDesign: InfoDesigns,
    itemForm: InfoForm,
  },
  {
    order: PortfoiloItemsEnum.EDUCATION,
    mustHave: true,
    itemTitle: '학력',
    itemDesign: EducationDesign,
    itemForm: EducationForm,
  },
  {
    order: PortfoiloItemsEnum.PROJECT,
    mustHave: false,
    itemTitle: '프로젝트',
    itemDesign: ProjectDesign,
    itemForm: ProjectForm,
  },
  {
    order: PortfoiloItemsEnum.ACTIVITIES,
    mustHave: false,
    itemTitle: '대내외활동',
    itemDesign: ActivitiesDesign,
    itemForm: ActivitiesForm,
  },
  {
    order: PortfoiloItemsEnum.AWARDS,
    mustHave: false,
    itemTitle: '수상내역',
    itemDesign: AwardsDesign,
    itemForm: AwardsForm,
  },
  {
    order: PortfoiloItemsEnum.CAREER,
    mustHave: false,
    itemTitle: '경력',
    itemDesign: CareerDesign,
    itemForm: CareerForm,
  },
  {
    order: PortfoiloItemsEnum.COVERLETTER,
    mustHave: false,
    itemTitle: '자기소개서',
    itemDesign: CoverletterDesign,
    itemForm: CoverletterForm,
  },
]

// 포트폴리오 디자인 베이스 아이템 타입
// 베이스 친구는 입력폼에도 쓰입니다!
export interface IPFBaseType {
  itemsType: number // 어떤 항목의 어떤 타입인지
  isTitle: boolean // 제목이니? 내용이니?
  title: string // 제목이니?
  content: string // 내용이니? 제목이라면 빈문자열
  isEditable: boolean // 내용이라면 수정 가능하니? 아니니?
}

// 포트폴리오 항목 itemsType Enum
export enum EPFItemsEnum {}
// 이거 어캄,,

// 이놈들을 그냥 enum으로 만들어야하나? 아니면 하나에 한 enum씩 만들어 줘야할까?
// 포트폴리오 기본정보 문자열
export const PFInfoStr = [
  '',
  '이름',
  '생년월일',
  '이메일',
  '깃허브 or 기술 블로그',
]

// 포트폴리오 학력 문자열
export const PFEducationStr = [
  '',
  '학교',
  '학교명',
  '졸업 여부',
  '편입 여부',
  '입학일',
  '졸업일',
  '주전공',
  '부전공',
  '복수전공',
  '평점/만점',
  '연구 분야',
  '연구 설명',
]
// 포트폴리오 디자인 프로젝트 문자열
export const PFDesignProjectStr = [
  '',
  '프로젝트명',
  '시작',
  '종료',
  '설명',
  '팀원 수',
  '담당 업무',
  '관련 링크',
  '성과',
  '회고',
  '이미지',
]
// 포트폴리오 대내외활동 문자열
export const PFDesignActivitysStr = [
  '',
  '대내외활동',
  '시작',
  '종료',
  '요약',
  '상세',
]
// 포트폴리오 수상내역 문자열
export const PFAwordsStr = ['', '상 이름', '상 설명', '날짜', '주관저']
// 포트폴리오 경력 문자열
export const PFCareerStr = [
  '',
  '직장명',
  '재직상태',
  '시작',
  '종료',
  '직급',
  '직무',
  '계약 형태',
  '주요 성과',
]
// 포트폴리오 자기소개서 문자열
export const PFCoverletterStr = ['', '제목', '내용']
