import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'flowboard',
    loadChildren: () =>
      import('./pages/flowboard/flowboard.module').then(
        (m) => m.FlowBoardModule
      ),
  },
  {
    path: 'templates',
    loadChildren: () =>
      import('./pages/templates/templates.module').then(
        (m) => m.TemplatesModule
      ),
  },
  {
    path: 'tools',
    loadChildren: () =>
      import('./pages/tools/tools.module').then((m) => m.ToolsModule),
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./pages/info/info.module').then((m) => m.InfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
