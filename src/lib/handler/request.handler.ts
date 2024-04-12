import { RequestJson } from "@/types/request.types";

interface Handler {
  setNext(_handler: Handler): Handler;
  handle(_requestJson: RequestJson): Promise<Error | null>;
}

export abstract class AbstractRequestHandler implements Handler {
  private nextHandler!: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(requestJson: RequestJson): Promise<Error | null> {
    if (this.nextHandler) {
      return await this.nextHandler.handle(requestJson);
    }

    return null;
  }
}
