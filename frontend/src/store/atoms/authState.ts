// recoil/authState.ts
import { atom, selector } from 'recoil';
import { UserType } from '../../types/authTypes';
import { fetchUserData } from '../../apis/authApi';

export const userAtom = atom< UserType | null>({
  key: 'userAtom',
  default: selector({
    key: 'user/default',
    get: async () => {
    try {
        const response = await fetchUserData() ;              
        if (response.success) {
          return response.data.user;
        }
    } catch (e) {
        console.error(e);
    }

    return null;
    },
}) ,
});

export const isAuthenticatedAtom = selector({
  key: 'isAuthenticatedAtom',
  get: ({ get }) => !!get(userAtom),
});
