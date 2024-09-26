// src/store/modalStore.ts

import { create } from "zustand";

/*
이 저장소에서 관리할 상태와 함수의 구조를 정의합니다.
isOpenAddPostModal: 모달이 열려 있는지를 나타내는 boolean 값입니다.
openAddPostModal: 모달을 여는 함수입니다. 호출되면 isOpenAddPostModal이 true로 설정됩니다.
closeAddPostModal: 모달을 닫는 함수입니다. 호출되면 isOpenAddPostModal이 false로 설정됩니다.
*/
type ModalStore = {
  isOpenAddPostModal: boolean;
  openAddPostModal: () => void;
  closeAddPostModal: () => void;
};

/*
useModalStore 생성:
useModalStore는 Zustand의 create 함수를 이용해 생성됩니다.
이 함수는 ModalStore 타입을 따르는 상태와 상태를 변경하는 함수를 정의합니다.
set 함수는 상태를 변경할 때 사용되며, 모달을 열거나 닫을 때 사용됩니다.
*/
const useModalStore = create<ModalStore>((set) => ({
  isOpenAddPostModal: false,
  openAddPostModal: () => set({ isOpenAddPostModal: true }),
  closeAddPostModal: () => set({ isOpenAddPostModal: false }),
}));

export default useModalStore;
