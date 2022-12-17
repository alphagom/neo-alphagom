import { atom, selector } from 'recoil'

import {
  PortfolioItems,
  IporfolioItemsType,
  ProjectItems,
  IprojectItemsType,
} from './portfolioType'

// 포트폴리오 항목 순서 state
export const pfItemsOrderState = atom<Array<IporfolioItemsType>>({
  key: 'pfItemsOrderState',
  default: PortfolioItems,
})

// 프로젝트 항목 저장 state
export const projectState = atom<IprojectItemsType>({
  key: 'projectState',
  default: ProjectItems,
})
