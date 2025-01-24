
// recoil/authState.ts
import { atom, selector } from 'recoil';
import { userAuthType } from '../../types/recoil/user/userAuthType';
import { fetchUserData } from '../../apis/user/authApi';

export const userAtom = atom< userAuthType>({
  key: 'userAtom',
  default: {
    isAuthenticated : false,
    user : null,
    token : null
  }
});


selector({
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
}) 

