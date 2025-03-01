

import z from "zod"

const BookingStatusEnum = z.enum(['PENDING', 'CONFIRMED', 'CANCELLED']);

const AuthProviderEnum = z.enum(['EMAIL', 'GOOGLE', 'GUEST']);


// Location
export const locaitonAddInput = z.object({
    city : z.string().min(1, {message : "City cannot be empty"}),
    state : z.string().min(1, {message : "State cannot be empty"}),
    country : z.string().min(1, {message: "country cannot be empty"}),
    postalcode : z.string().min(1, {message: "Postalcode cannot be empty"}),

})
// Category
export const categoryAddInput = z.object({
    name : z.string().min(1, {message : "name cannot be empty"}),
})
// Hospital
export const hospitalAddInput = z.object({
    name : z.string().min(1, {message : "name cannot be empty"}),
    locationId : z.string()
})

export const hospitalUpdateInput = z.object({
    name : z.string().optional(),
    locationId : z.string().optional(),
    categories : z.array(z.object({
        id : z.string(),
        name : z.string()
    })).optional(),
    location : z.object({
        city : z.string().min(1, {message : "City cannot be empty"}),
        state : z.string().min(1, {message : "State cannot be empty"}),
        country : z.string().min(1, {message: "country cannot be empty"}),
        postalcode : z.string().min(1, {message: "Postalcode cannot be empty"}),
    }).optional()
})




// Booking
export const bookingAddInput = z.object({
    name : z.string().min(1, {message : "name cannot be empty"}),
    doctorId : z.number().min(1, {message : "doctor cannot be empty"}),
    patientId : z.number().min(1, {message : "patient cannot be empty"}),
    appointmentDate : z.date(),
    status : BookingStatusEnum.optional()
})

export const doctorAddInput = z.object({
    name : z.string().optional(),
    email : z.string().min(1, {message : "email cannot be empty"}),
    username : z.string().optional(),
    password : z.string(),
    provider : AuthProviderEnum,
    specializationId : z.string().optional(),
    hospitalId : z.string().optional()
})

export const doctorUpdateInput = z.object({
    name : z.string().optional(),
    email : z.string().min(1, {message : "email cannot be empty"}).optional(),
    username : z.string().optional(),
    oldPassword : z.string().optional(),
    password : z.string().optional(),
    confirmPassword : z.string().optional(),
    provider : AuthProviderEnum.optional(),
    specializationId : z.string().optional(),
    hospitalId : z.string().optional()
})


export const doctorSignUpInput = z.object({
    name : z.string(),
    email : z.string().min(1, {message : "email cannot be empty"}),
    username : z.string().optional(),
    password : z.string(),
    confirmPassword : z.string(),
    specializationId : z.string().optional(),
    hospitalId : z.string().optional()
})

export const doctorLoginInput = z.object({
    email : z.string().min(1, {message : "email cannot be empty"}),
    password : z.string().min(1, {message : "Password cannot be empty"}),
})



export const userAddInput = z.object({
    name : z.string().optional(),
    email : z.string().min(1, {message : "email cannot be empty"}),
    username : z.string().optional(),
    password : z.string(),
    provider : AuthProviderEnum
})


// SLots

export const slotsCreateInput = z.object({
    selectedDates : z.array(z.string()),
    startTime : z.number(),
    endTime : z.number(),
    breakStartTime : z.number(),
    breakEndTime : z.number(),
    duration : z.number()
})


export const queryDoctorSchema = z.object({
    hospitalId: z.string().optional(),
    specializationId: z.string().optional(),
    searchTerm : z.string().optional()
  });


// Location 
export type LocationAddInput = z.infer<typeof locaitonAddInput>
// Category 
export type CategoryAddInput = z.infer<typeof categoryAddInput>

// Hospital
export type HospitalAddInput = z.infer<typeof hospitalAddInput>
export type HospitalUpdateInput = z.infer<typeof hospitalUpdateInput>


// Booking
export type BookingAddInput = z.infer<typeof bookingAddInput>
// Doctor
export type DoctorAddInput = z.infer<typeof doctorAddInput>
export type DoctorUpdateInput = z.infer<typeof doctorUpdateInput>
export type DoctorSignUpInput = z.infer<typeof doctorSignUpInput>
export type DoctorLoginInput = z.infer<typeof doctorLoginInput>

// User 
export type UserAddInput = z.infer<typeof userAddInput>

// Slots 
export type SlotsCreateInput = z.infer<typeof slotsCreateInput>