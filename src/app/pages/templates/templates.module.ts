import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TerminalModule } from 'primeng/terminal';

import { DataCardComponent } from './components/data-card/data-card.component';
import { TableComponent } from './components/table/table.component';
import { TerminalComponent } from './components/terminal/terminal.component';

@NgModule({
  declarations: [DataCardComponent, TableComponent, TerminalComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    CardModule,
    DividerModule,
    TerminalModule,
  ],
})
export class TemplatesModule {}
