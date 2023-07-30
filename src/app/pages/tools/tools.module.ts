import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';

import { ToolsRoutingModule } from './tools-routing.module';
import { GeneratorsComponent } from './components/generators/generators.component';

@NgModule({
  declarations: [GeneratorsComponent],
  imports: [CommonModule, ToolsRoutingModule, TemplatesModule],
})
export class ToolsModule {}
