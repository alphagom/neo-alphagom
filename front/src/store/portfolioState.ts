import { atom } from 'recoil'

import {
  PortfolioItems,
  PorfolioItemsType,
  IProjectTypes,
} from './portfolioType'

// 포트폴리오 항목 순서 state
export const pfItemsOrderState = atom<Array<PorfolioItemsType>>({
  key: 'pfItemsOrderState',
  default: PortfolioItems,
})

// 포트폴리오 중 프로젝트 항목 state
export const pfProjectItemsState = atom<IProjectTypes>({
  key: 'pfProjectItemsState',
  default: {
    ProjectName: '',
    ProjectStartDate: '',
    ProjectEndDate: '',
    ProjectDescript: '',
    ProjectPplNum: 1,
    ProjectWork: '',
    ProjectLink: [],
    ProjectAchieve: '',
    ProjectRemind: '',
  },
})
