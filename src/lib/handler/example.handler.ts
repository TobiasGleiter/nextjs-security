import { RequestJson } from "@/types/request.types";
import { AbstractRequestHandler } from "./request.handler";

export class ExamplenHandler extends AbstractRequestHandler {
  public async handle(requestJson: RequestJson): Promise<Error | null> {
    const isCurrentSessionAvailable = await readCurrentSession();
    if (!isCurrentSessionAvailable) {
      throw new Error("Forbidden");
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
