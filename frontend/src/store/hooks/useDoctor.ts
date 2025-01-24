import { useRecoilValue } from 'recoil';
import { doctorAtom } from '../atoms/authDoctorState';

export const useDoctor = () => {
  const value = useRecoilValue(doctorAtom);

  return value;
};
