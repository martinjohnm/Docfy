// recoil/authState.ts
import { atom, selector } from 'recoil';
import { fetchDoctorData } from '../../apis/doctor/doctorAuthApis';
import { doctorAuthType } from '../../types/recoil/doctor/doctorAuth.type';

export const doctorAtom = atom< doctorAuthType>({
  key: 'doctorAtom',
  default: {
    isAuthenticated : false,
    doctor : null,
    token : null
  }
});


selector({
  key: 'doctor/default',
  get: async () => {
  try {
      const response = await fetchDoctorData() ;    
      console.log(response)
      if (response.success) {
        return response.data.user;
      }
  } catch (e) {
      console.error(e);
  }

  return null;
  },
}) 

export const isDoctorAuthenticatedAtom = selector({
  key: 'isDoctorAuthenticatedAtom',
  get: ({ get }) => !!get(doctorAtom),
});


export const doctorLoadingState = atom({
  key: 'doctorLoadingState',
  default: true, // True while fetching data
});