import React from 'react'
import CoverDesign from 'pages/portfolio/components/itemdesigns/base/CoverDesign'

// 카드 정보 - 인덱스 연결 type
export interface CardDataType {
  portfolioSeq: number
  cover: string
  // cover : React.ElementType
  nickname: string
  // nickname : React.ElementType
}

// 카드 정보 Enum
export enum CardDataEnum {
  SEQ = 1,
}

// cover 더미데이터?
// nickname 
export const CardData: CardDataType[] = [
  {
    portfolioSeq: CardDataEnum.SEQ,
    cover: ,
    nickname: ,
  }
] 