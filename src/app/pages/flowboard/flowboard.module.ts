import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';

import { FlowBoardRoutingModule } from './flowboard-routing.module';
import { BoardsComponent } from './components/boards/boards.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';
import { BoardComponent } from './components/board/board.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';

@NgModule({
  declarations: [
    BoardsComponent,
    NavBarComponent,
    BoardComponent,
    TaskDialogComponent,
  ],
  imports: [
    CommonModule,
    FlowBoardRoutingModule,
    OverlayModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class FlowBoardModule {}
