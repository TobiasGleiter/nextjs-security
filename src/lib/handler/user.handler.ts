import { RequiresProPlanError } from "../exceptions/custom.exceptions";
import { AbstractRequestHandler } from "./request.handler";

export class UserIsPro extends AbstractRequestHandler {
  public async handle(request: Request, _context: any): Promise<Error | null> {
    const isUserPro = true;
    if (!isUserPro) {
      throw new RequiresProPlanError();
    }

    return super.handle(request, _context);
  }
}
