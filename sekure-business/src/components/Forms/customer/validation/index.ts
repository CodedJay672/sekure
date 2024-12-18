import { z } from "zod";

export const customerInformationSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  country: z.string(),
  email: z.string().email(),
});

export type customerInformationType = z.infer<typeof customerInformationSchema>;
