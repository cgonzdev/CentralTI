import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatesModule } from '../templates/templates.module';

import { ToolsRoutingModule } from './tools-routing.module';
import { GeneratorsComponent } from './components/generators/generators.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';

import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [GeneratorsComponent, NewslettersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToolsRoutingModule,
    TemplatesModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
  ],
})
export class ToolsModule {}
