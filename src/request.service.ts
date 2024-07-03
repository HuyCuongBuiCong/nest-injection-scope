import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestService {
  private readonly operationId: string;

  constructor() {
    this.operationId = Math.random().toString(); // Generate a new random ID on each instantiation
  }

  getOperationId(): string {
    return this.operationId;
  }
}
