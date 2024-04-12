import { RequestJson } from "@/types/request.types";
import { AbstractRequestHandler } from "./request.handler";

export class ExampleHandler extends AbstractRequestHandler {
  public async handle(requestJson: RequestJson): Promise<Error | null> {
    // check something
    const isExampleOk = false;
    if (!isExampleOk) {
      // if not return error
      throw new Error("Forbidden");
    }
    // if ok pass it to the next handler
    return super.handle(requestJson);
  }
}
