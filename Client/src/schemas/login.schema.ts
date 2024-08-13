import {z} from 'zod';

export const loginValidationSchema = z.object({
    username : z
        .string()
        .min(5, {message:"username msut be atleast 5 characters long"})
        .max(20, {message:"username cannot be longer than 20 characters"}),
    email : z
        .string()
        .email({message:"Invalid email address"}),
    password : z
        .string()
        .min(6, "password must be atleast 6 characters long")

})