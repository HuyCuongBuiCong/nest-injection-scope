import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {
  private readonly operationId: string;

  constructor() {
    this.operationId = Math.random().toString(); // Generate a new random ID on each instantiation
  }

  getOperationId(): string {
    return this.operationId;
  }
}
