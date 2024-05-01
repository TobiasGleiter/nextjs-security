import { z } from "zod";

// ID1234
const _productId = z.custom<`ID${number}`>((val) => {
  return typeof val === "string"
    ? /^ID[0-9]{4}$/.test(val) && val.length === 6
    : false;
});

export const paramsSchema = z.object({
  params: z.object({
    slug: z.string(),
  }),
});
