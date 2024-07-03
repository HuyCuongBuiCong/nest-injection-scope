import { Controller, Get } from '@nestjs/common';
import { App2Service } from './app2.service';
import { App1Service } from './app1.service';

@Controller()
export class AppController {
  constructor(
    private readonly app1Service: App1Service,
    private readonly app2Service: App2Service,
  ) {}

  @Get('/singleton')
  getOperationIdsSingleton(): string[] {
    const id1 = this.app1Service.getOperationIdBySingletonScopeService();
    const id2 = this.app2Service.getOperationIdBySingletonService();
    // id1 and id2 should be the same for each request
    // id1 of 1st request should be same from id1 of 2nd request
    return [id1, id2];
  }

  @Get('/request')
  getOperationIdsRequest(): string[] {
    const id1 = this.app1Service.getOperationIdByRequestScopeService();
    const id2 = this.app2Service.getOperationIdByRequestService();
    // id1 and id2 should be same
    // id1 of 1st request should be different for each request
    return [id1, id2];
  }
  @Get('/transient')
  getOperationIdsTransient(): string[] {
    const id1 = this.app1Service.getOperationIdByTransientScopeService();
    const id2 = this.app2Service.getOperationIdByTransientService();
    // id1 and id2 should be different
    // id1 of 1st request should be different from id1 of 2nd request
    return [id1, id2];
  }
}
