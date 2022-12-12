import { atom } from 'recoil'

// 타입스크립트 type import
import { Menu } from './type'

/**
 * 홈, 마이포트폴리오 페이지, 포트폴리오 생성 페이지 네브바 상태를 관리할 atom
 * default 는 홈으로, 타입에서 지정한 enum 을 이용한다
 *
 * atom 선언은 고유한 key 값 (atom 명과 동일하도록)과 default 값과 함께 선언한다
 * export 시켜서 사용할 컴포넌트에서 import 해서 사용하면 된다
 *
 * menuState atom 은 src/components/navBar 에서 사용한다
 */
export const menuState = atom({
  key: 'menuState',
  default: Menu.HOME,
})
