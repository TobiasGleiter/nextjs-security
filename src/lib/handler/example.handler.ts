import { AbstractRequestHandler } from "./request.handler";

export class ExampleHandler extends AbstractRequestHandler {
  public async handle(request: Request, _context: any): Promise<Error | null> {
    // check something
    const isExampleOk = true;
    if (!isExampleOk) {
      // if not return error
      throw new Error("Forbidden");
    }
    // if ok pass it to the next handler
    return super.handle(request, _context);
  }
}
