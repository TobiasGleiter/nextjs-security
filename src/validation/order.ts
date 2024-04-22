// Checklist:
// - Allowed characters
// - length (min(), max(), length())
// - Pattern (z.custom)

import { z } from "zod";

// ID1234
const productId = z.custom<`ID${number}`>((val) => {
  return typeof val === "string"
    ? /^ID[0-9]{4}$/.test(val) && val.length === 6
    : false;
});

const customer = z.object({
  name: z.string().min(1).max(256),
  email: z.string().email().max(256),
  address: z.string().min(1).max(256),
});

const item = z.object({
  productId: productId,
  quantity: z.number().min(1).max(1000),
});

export const orderSchema = z.object({
  customer: customer,
  items: item.array().min(1).max(100),
});

// INCOMING REQUEST
// {
//     "customer": {
//         "name": "John Doe",
//         "email": "johndoe@example.com",
//         "address": "123 Main St, Cityville, XYZ"
//     },
//     "items": [
//         {
//             "productId": "ID1234",
//             "quantity": 2
//         }
//     ]
// }
