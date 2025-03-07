// components/ProtectedRoute.tsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { doctorAtom } from '../store/atoms/authDoctorState';
import { getDoctorToken } from '../utils/tokenUtils';
import { LoginPageDoctor } from '../pages/doctor/LoginPageDoctor';
import toast from 'react-hot-toast';



export const DoctorAuthProtector = ({ children } : {children : React.ReactNode}) => {

    const doctorFromStore = useRecoilValue(doctorAtom)
    const doc_token = getDoctorToken()



    if (!doctorFromStore.isAuthenticated || !doc_token) {
        toast.error("You must login as user first")
        return (<LoginPageDoctor/>)
    } else {
        return (children)
    
    }
    
};
