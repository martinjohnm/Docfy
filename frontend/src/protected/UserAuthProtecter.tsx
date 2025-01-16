// components/ProtectedRoute.tsx
import React, { useEffect } from 'react';
import { useUser } from '../store/hooks/useUser';



export const UserAuthProtector = ({ children } : {children : React.ReactNode}) => {
  const user = useUser()

  useEffect(() => {
    if (!user) {
      window.location.href = '/login';
    }
  }, [user]);



  return <>{children}</>;
};
