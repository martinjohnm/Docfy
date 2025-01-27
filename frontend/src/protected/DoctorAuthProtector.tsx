// components/ProtectedRoute.tsx
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { doctorAtom } from '../store/atoms/authDoctorState';
import { useNavigate } from 'react-router-dom';
import { getDoctorToken } from '../utils/tokenUtils';



export const DoctorAuthProtector = ({ children } : {children : React.ReactNode}) => {

    const doctorFromStore = useRecoilValue(doctorAtom)
    const doc_token = getDoctorToken()
    const navi = useNavigate()

    useEffect(() => {

    }, [doctorFromStore])

    useEffect(() => {
        if (!doctorFromStore.isAuthenticated || !doc_token) {
            navi("/doctor-login")
        }
    }, [doctorFromStore, doc_token]);


    return children
    
};
