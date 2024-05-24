import { z } from "zod";
export const orderFormSchemaValidation = z.object({
  name: z.string().min(1, "name is required"),
  address: z.string().min(1, "address is required"),
  phone: z.string().min(1, "phone is required").min(5, "invalid phone"),
  // country: z.string().min(1, "country is required"),
});
