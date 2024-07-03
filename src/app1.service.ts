import { TransientService } from './transient.service';
import { Injectable } from '@nestjs/common';
import { SingletonService } from './singleton.service';
import { RequestService } from './request.service';

@Injectable()
export class App1Service {
  constructor(
    private readonly transientService: TransientService,
    private readonly singletonService: SingletonService,
    private readonly requestService: RequestService,
  ) {} //

  getOperationIdBySingletonScopeService(): string {
    return this.singletonService.getOperationId();
  }

  getOperationIdByRequestScopeService(): string {
    return this.requestService.getOperationId();
  }

  getOperationIdByTransientScopeService(): string {
    return this.transientService.getOperationId();
  }
}
