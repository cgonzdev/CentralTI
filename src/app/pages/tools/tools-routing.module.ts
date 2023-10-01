import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneratorsComponent } from './components/generators/generators.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { NewslettersHistoryComponent } from './components/newsletters/history/newsletters.historycomponent';

const routes: Routes = [
  {
    path: 'generators',
    component: GeneratorsComponent,
  },
  {
    path: 'newsletters',
    component: NewslettersComponent,
  },
  {
    path: 'newsletters/history/:id',
    component: NewslettersHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
