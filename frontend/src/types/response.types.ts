


export interface HospitalResponseType {
    id                  : string;
    name                : string;
    locationId          : string
    location            : LocationResponseType
    doctors?             : DoctorResponseType[]
    categories?          : CategoryResponseType[]
}

export interface CategoryResponseType {
    id                  : string
    name                : string
}

export interface LocationResponseType {
    id                  : string,
    city                : string,
    state               : string,
    country             : string
    postalcode          : string
}




export interface DoctorResponseType {
    id                  :      string
    name?                :      string
    email               :      string
    username?            :      string
    password?            :      string
    isVerified          :      boolean
    isBlocked           :      boolean
    specializationId?    :      string
    specialization?      :      CategoryResponseType
    hospitalId?          :      string
    hospital?            :      HospitalResponseType
    bookings            :      BookingResponseType[]
}

export interface UserResponseType {
    id                  :      string
    email               :      string
    username?            :      string
    name?                :      string 
    password?            :      string
    isVerified          :      boolean
    isBlocked           :      boolean
    bookings            :      string
}

export interface AdminResponseType {
    id                  :      string
    email               :      string
}

export interface BookingResponseType {
    id                  :      string
    doctorId            :      string
    doctor              :      DoctorResponseType
    patientId           :      string
    patient             :      UserResponseType
    slotId              :      string
    slot                :      SlotResponseType
    startTime           :      Date
    endTime             :      Date
    duration            :      number
    status              :      "CONFIRMED" | "CANCELLED" | "PENDING"
}

export interface SlotResponseType {
    id                  : string
    startTime           : Date
    endTime             : Date
    duration            : number
    doctorId            : string,
    status              : "BOOKED" | "AVAILABLE"
}

