import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TerminalModule } from 'primeng/terminal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DataCardComponent } from './components/data-card/data-card.component';
import { TableComponent } from './components/table/table.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';

@NgModule({
  declarations: [
    DataCardComponent,
    TableComponent,
    TerminalComponent,
    NewslettersComponent,
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    CardModule,
    DividerModule,
    TableModule,
    TerminalModule,
    FontAwesomeModule,
  ],
  exports: [DataCardComponent, NewslettersComponent],
})
export class TemplatesModule {}
