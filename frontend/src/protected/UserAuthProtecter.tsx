// components/ProtectedRoute.tsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { getToken } from '../utils/tokenUtils';
import { userAtom } from '../store/atoms/authState';
import { LoginPageUser } from '../pages/user/LoginPageUser';



export const UserAuthProtector = ({ children } : {children : React.ReactNode}) => {
  const user = useRecoilValue(userAtom)
  const user_token = getToken()

      if (!user.isAuthenticated || !user_token) {
          return <LoginPageUser/>
      } else {
         return children
      }
};
