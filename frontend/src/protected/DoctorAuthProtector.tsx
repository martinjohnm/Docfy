// components/ProtectedRoute.tsx
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { doctorAtom } from '../store/atoms/authDoctorState';
import { useNavigate } from 'react-router-dom';
import { LoginPageDoctor } from '../pages/doctor/LoginPageDoctor';
import { getDoctorToken } from '../utils/tokenUtils';



export const DoctorAuthProtector = ({ children } : {children : React.ReactNode}) => {

    const doctor = useRecoilValue(doctorAtom)
    const doc_token = getDoctorToken()
    const navi = useNavigate()

    useEffect(() => {
        if (!doctor.isAuthenticated || !doc_token) {
            navi("/doctor-login")
        }
    }, [doctor, doc_token]);

  
  if (!doctor.isAuthenticated || !doc_token) {
      return <LoginPageDoctor/>
  } else return children

};
