import { atom, selector } from 'recoil'

import { PortfolioItems, PorfolioItemsType } from './portfolioType'

// 포트폴리오 항목 순서 state
export const pfItemsOrderState = atom<Array<PorfolioItemsType>>({
  key: 'pfItemsOrderState',
  default: PortfolioItems,
})
