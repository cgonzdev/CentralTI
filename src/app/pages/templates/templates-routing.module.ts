import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataCardComponent } from './components/data-card/data-card.component';

const routes: Routes = [
  {
    path: 'data-card',
    component: DataCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
