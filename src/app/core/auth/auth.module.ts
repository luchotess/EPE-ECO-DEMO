import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule {}
