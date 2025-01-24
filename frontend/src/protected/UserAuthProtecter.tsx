// components/ProtectedRoute.tsx
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getToken } from '../utils/tokenUtils';
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../store/atoms/authState';



export const UserAuthProtector = ({ children } : {children : React.ReactNode}) => {
  const user = useRecoilValue(userAtom)
  const user_token = getToken()
  const navi = useNavigate()

  useEffect(() => {
      if (!user.isAuthenticated || !user_token) {
          navi("/login")
      }
  }, [user, user_token]);

  
  return children
};
