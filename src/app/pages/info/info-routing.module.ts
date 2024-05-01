import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScopeComponent } from './components/customers/scope.component';

const routes: Routes = [
  {
    path: 'customers/scope',
    component: ScopeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
