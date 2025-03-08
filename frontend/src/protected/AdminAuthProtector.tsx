// components/ProtectedRoute.tsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { adminAtom } from '../store/atoms/admin/adminAuthState';
import { geAdminToken } from '../utils/tokenUtils';
import { LoginPageAdmin } from '../pages/admin/LoginPageAdmin';



export const AdminAuthProtector = ({ children } : {children : React.ReactNode}) => {
  const adminis = useRecoilValue(adminAtom)
  const adminToken = geAdminToken()


      if (!adminis || !adminToken) {
          return (<LoginPageAdmin/>)
      } else {
         return children
      }
};
