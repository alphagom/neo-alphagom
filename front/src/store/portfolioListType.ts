import React from 'react'
import PortfolioCover1 from '@/assets/portfolio1.jpg'
import PortfolioCover2 from '@/assets/portfolio2.jpg'
import PortfolioCover3 from '@/assets/portfolio3.jpg'

// 카드 정보 - 인덱스 연결 type
export interface CardDataType {
  portfolioSeq: number
  cover: File // 타입지정 어떻게 할지부터
  // cover: URL 
  nickname: string
}

// 카드 정보 Enum
export enum CardDataEnum {
  SEQ = 1,
}

export const pfCovers = [
  PortfolioCover1, 
  PortfolioCover2, 
  PortfolioCover3
]

// export const exNicknames = [
//   '개발',
//   '새발',
//   '괴발',
//   '개발',
// ]

export const CardData: CardDataType[] = [
  {
    portfolioSeq: CardDataEnum.SEQ,
    cover: PortfolioCover1,
    nickname: ,
  }
] 