import React from 'react'
// import PortfolioCover1 from '@/assets/portfolio1.jpg'
// import PortfolioCover2 from '@/assets/portfolio2.jpg'
// import PortfolioCover3 from '@/assets/portfolio3.jpg'

// 카드 정보 - 인덱스 연결 type
export interface CardDataType {
  portfolioSeq: number
  // cover: File // 타입지정 어떻게 할지부터
  cover: URL 
  nickname: string
}

// 카드 정보 Enum
export enum CardDataEnum {
  SEQ = 1,
}

// export const pfCoversURL = [
//   'https://marketplace.canva.com/EAFOv0-FKOY/1/0/1131w/canva-black-and-white-monoline-typedriven-portfolio-cover-page--i5sVeUpuMk.jpg', 
//   'https://marketplace.canva.com/EAFLheYP3I8/1/0/1236w/canva-black-and-white-geometric-typedriven-portfolio-cover-page-4A3WwfnNaos.jpg', 
//   'https://marketplace.canva.com/EAFQuHKT3ss/1/0/1131w/canva-yellow-minimalist-portfolio-cover-document-VKyzxttIaU0.jpg',
// ]

// export const exNicknames = [
//   '개발',
//   '새발',
//   '괴발',
//   '개발',
// ]

export const CardData: CardDataType[] = [
  {
    portfolioSeq: CardDataEnum.SEQ,
    cover: ,
    nickname: ,
  }
] 