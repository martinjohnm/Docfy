

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

export const hospitalUpdateInput = z.array(z.string())
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


export const userAddInput = z.object({
    name : z.string().optional(),
    email : z.string().min(1, {message : "email cannot be empty"}),
    username : z.string().optional(),
    password : z.string(),
    provider : AuthProviderEnum
})


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
// User 
export type UserAddInput = z.infer<typeof userAddInput>