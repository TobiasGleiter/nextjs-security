import { AbstractRequestHandler } from "./request.handler";

export class UserAuthenticationHandler extends AbstractRequestHandler {
  public async handle(requestJson: any): Promise<Error | null> {
    const isCurrentSessionIsAvailable = true;
    if (!isCurrentSessionIsAvailable) {
      throw Error("Forbidden");
    }

    return super.handle(requestJson);
  }
}
