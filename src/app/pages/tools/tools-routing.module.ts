import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneratorsComponent } from './components/generators/generators.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';

const routes: Routes = [
  {
    path: 'generators',
    component: GeneratorsComponent,
  },
  {
    path: 'newsletters',
    component: NewslettersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
