import { TransientService } from './transient.service';
import { Injectable } from '@nestjs/common';
import { SingletonService } from './singleton.service';
import { RequestService } from './request.service';

@Injectable()
export class App2Service {
  constructor(
    private readonly transientService: TransientService,
    private readonly singletonService: SingletonService,
    private readonly requestService: RequestService,
  ) {} //

  getOperationIdByTransientService(): string {
    return this.transientService.getOperationId();
  }

  getOperationIdBySingletonService(): string {
    return this.singletonService.getOperationId();
  }

  getOperationIdByRequestService(): string {
    return this.requestService.getOperationId();
  }
}
