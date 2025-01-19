// recoil/authState.ts
import { atom, selector } from 'recoil';
import { UserType } from '../../types/authTypes';
import { fetchDoctorData } from '../../apis/doctor/doctorAuthApis';

export const doctorAtom = atom< UserType | null>({
  key: 'doctorAtom',
  default: selector({
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
}) ,
});

