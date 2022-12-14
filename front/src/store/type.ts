// 네브바 이동에 따라 나타나는 색을 다르게 할 enum type
export enum Menu {
  HOME = 'red',
  PORTFOLIO = 'blue',
  MYPORTFOLIO = 'green',
}

// 로그인 시 아이디, 패스워드 type
export interface LoginType {
  id: string
  pw: string
}
