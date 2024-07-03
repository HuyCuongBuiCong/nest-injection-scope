import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class SingletonService {
  private readonly operationId: string;

  constructor() {
    this.operationId = Math.random().toString(); // Generate a new random ID on each instantiation
  }

  getOperationId(): string {
    return this.operationId;
  }
}
