import { useRecoilValue } from 'recoil';
import { userAtom } from '../atoms/authState';

export const useUser = () => {
  const value = useRecoilValue(userAtom);
  return value;
};
