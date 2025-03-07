// components/ProtectedRoute.tsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { getToken } from '../utils/tokenUtils';
import { userAtom } from '../store/atoms/authState';
import { LoginPageUser } from '../pages/user/LoginPageUser';
import toast from 'react-hot-toast';



export const UserAuthProtector = ({ children } : {children : React.ReactNode}) => {
  const user = useRecoilValue(userAtom)
  const user_token = getToken()

      if (!user.isAuthenticated || !user_token) {
        toast.error("You must login as user first")
          return <LoginPageUser/>
      } else {
         return children
      }
};
