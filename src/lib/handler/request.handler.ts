type Context = {
  params: any;
};

interface Handler {
  setNext(_handler: Handler): Handler;
  handle(request: Request, context: Context): Promise<Error | null>;
}

export abstract class AbstractRequestHandler implements Handler {
  private nextHandler!: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(
    request: Request,
    context: Context,
  ): Promise<Error | null> {
    if (this.nextHandler) {
      return await this.nextHandler.handle(request, context);
    }

    return null;
  }
}
