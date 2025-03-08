import { atom } from "recoil";




export const dashboardNoofUsers = atom<number>({
  key: 'dashboardNoofUsers',
  default: 0
});




export const dashboardNoofDoctors = atom<number>({
    key: 'dashboardNoofDoctors',
    default: 0
  });
  
  


  export const dashboardNoofBookings = atom<number>({
    key: 'dashboardNoofBookings',
    default: 0
  });
  
  
  export const dashboardNoofHospitals = atom<number>({
    key: 'dashboardNoofHospitals',
    default: 0
  });
  
  
    
  export const dashboardNoofDepartments = atom<number>({
    key: 'dashboardNoofDepartments',
    default: 0
  });
  
  

    