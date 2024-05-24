import { z } from "zod";
import { orderFormSchemaValidation } from "../validation";

export type TOrderField = z.infer<typeof orderFormSchemaValidation>;
