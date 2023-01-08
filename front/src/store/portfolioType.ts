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

// 포트폴리오 항목 type ===============================
// 프로젝트 type
export interface IProjectTypes {
  ProjectName: string
  ProjectStartDate: string
  ProjectEndDate: string
  ProjectDescript: string
  ProjectPplNum: number | string
  ProjectWork: string
  ProjectLink: Array<string>
  ProjectAchieve: string
  ProjectRemind: string
}
