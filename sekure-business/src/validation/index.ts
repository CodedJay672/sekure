import { z } from 'zod';

export const rechargeWalletSchema = z.object({
  amount: z.number().positive().min(50000, {
    message: 'Le montant doit être supérieur à 50000'
  }),
  phone: z.string().length(13)
});

export const rechargeCardSchema = z.object({
  amount: z.number().positive().min(500, {
    message: 'Le montant doit être supérieur à 500'
  }),
  email: z.string().min(10, {
    message: 'L\'email doit contenir au moins 10 caractères'
  })
});


export const conversionSchema = z.object({
  receiveAmount: z.number().positive(),
  convertAmount: z.number().positive(),
});

export const cardCreateSchema = z.object({
  cardType: z.string().min(4, {
    message: 'Le type de carte doit contenir au moins 4 caractères'
  }),
  email: z.string(),
});

export const userSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Le prénom doit contenir au moins 2 caractères'
  }),
  lastName: z.string().min(2, {
    message: 'Le nom doit contenir au moins 2 caractères'
  }),
  email: z.string().email(),
});

export const businessNameSchema = z.object({
  name: z.string().min(2, {
    message: 'Le prénom doit contenir au moins 2 caractères'
  }),
  number: z.number(),
  address: z.string(),
  email: z.string().email(),
  description: z.string().min(10, {
    message: 'La description doit contenir au moins 10 caractères'
  }),
});

export const searchSchema = z.object({
  query: z.string().min(2, {
    message: 'La recherche doit contenir au moins 2 caractères'
  }),
});

export const signupSchema = z.object({
  fullName: z.string(),
  businessName: z.string(),
  receive_mail: z.boolean().default(false).optional(),
  pays: z.string(),
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Le mot de passe doit contenir au moins 8 caractères'
  }),
});

export const businessFieldSchema = z.object({
  otp: z.string().min(6, {
    message: 'La recherche doit contenir au moins 2 caractères'
  }),
  terms_condition: z.boolean().default(false).optional(),
  receive_mail: z.boolean().default(false).optional(),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Le mot de passe doit contenir au moins 8 caractères'
  }),
});

export const recPwdSchema = z.object({
  email: z.string().email(),
});

export const OTPSchema = z.object({
  otp: z.string().min(6, {
    message: 'Le code doit contenir au moins 6 caractères'
  }),
});

export const pwdSchema = z.object({
  pwd: z.string().min(10, {
    message: 'Le mot de passe doit contenir au moins 10 caractères'
  }),
});

export const filterSchema = z.object({
  type: z.string({
    required_error: "Please select an email to display.",
  }),
  statut: z.string({
    required_error: "Please select an email to display.",
  }),
  pays: z.string({
    required_error: "Please select an email to display.",
  }),
  montant: z.object({
    depart: z.string(),
    fin: z.string(),
  }),
  date: z.object({
    depart: z.string(),
    fin: z.string(),
  }),
});