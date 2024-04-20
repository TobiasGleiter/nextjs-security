import { RequestJson } from "@/types/request.types";
import { orderSchema } from "@/validation/order";
import { AbstractRequestHandler } from "./request.handler";

export class OrderSchemaHandler extends AbstractRequestHandler {
  public async handle(requestJson: RequestJson): Promise<Error | null> {
    const parsedOrderResult = orderSchema.safeParse(requestJson);
    if (!parsedOrderResult.success) {
      const formatted = JSON.parse(parsedOrderResult.error.message);
      console.log(formatted[0]);
      throw new Error("Forbidden");
    }
    // if ok pass it to the next handler
    return super.handle(requestJson);
  }
}
