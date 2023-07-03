import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { FlowBoardRoutingModule } from './flowboard-routing.module';
import { BoardsComponent } from './components/boards/boards.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BoardsComponent, NavBarComponent],
  imports: [CommonModule, FlowBoardRoutingModule, OverlayModule, SharedModule],
})
export class FlowBoardModule {}
