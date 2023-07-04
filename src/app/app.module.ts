import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './pages/auth/auth.module';
import { FlowBoardModule } from './pages/flowboard/flowboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, FlowBoardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
