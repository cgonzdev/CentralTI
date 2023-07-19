import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataCardComponent } from './components/data-card/data-card.component';
import { TableComponent } from './components/table/table.component';
import { TerminalComponent } from './components/terminal/terminal.component';

const routes: Routes = [
  {
    path: 'data-card',
    component: DataCardComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'terminal',
    component: TerminalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
