import { atom, selector } from 'recoil'

import { PortfolioItems, PorfolioItemsType, IPFBaseType } from './portfolioType'

// 포트폴리오 항목 순서 state
export const pfItemsOrderState = atom<Array<PorfolioItemsType>>({
  key: 'pfItemsOrderState',
  default: PortfolioItems,
})

// 포트폴리오 디자인 베이스 아이템 Title state
export const pfDesignBaseTitleState = atom<IPFBaseType>({
  key: 'pfDesignBaseTitleState',
  default: {
    itemsType: 1,
    isTitle: true,
    title: '제목',
    content: '내용',
    isEditable: false,
  },
})
