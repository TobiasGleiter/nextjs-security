import { AbstractRequestHandler } from "./request.handler";

export class UserAuthenticationHandler extends AbstractRequestHandler {
  public async handle(requestJson: any): Promise<Error | null> {
    const isCurrentSessionAvailable = await readCurrentSession();
    if (!isCurrentSessionAvailable) {
      throw Error("Forbidden");
    }
    return super.handle(requestJson);
  }
}

// Simulation of the session
async function readCurrentSession(): Promise<null | boolean> {
  const session = true;
  if (!session) {
    return null;
  }
  return session;
}
