import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atoms/authState';

export const UserProfilePage: React.FC = () => {
    const user = useRecoilValue(userAtom);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};


