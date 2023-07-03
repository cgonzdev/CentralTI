import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { BtnComponent } from '../../shared/components/btn/btn.component';

@NgModule({
  declarations: [LoginComponent, BtnComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
