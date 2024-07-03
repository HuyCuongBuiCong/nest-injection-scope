import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { App1Service } from './app1.service';
import { TransientService } from './transient.service';
import { App2Service } from './app2.service';
import { RequestService } from './request.service';
import { SingletonService } from './singleton.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    App1Service,
    App2Service,
    TransientService,
    RequestService,
    SingletonService,
  ],
})
export class AppModule {}
