import { atom, selector } from 'recoil'

import { CardData, CardDataType } from './portfolioListType'

// 포트폴리오 리스트 state
export const pfListState = atom<Array<CardDataType>>({
  key: 'pfListState',
  default: CardData,
})
