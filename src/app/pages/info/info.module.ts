import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemplatesModule } from '../templates/templates.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InfoRoutingModule } from './info-routing.module';
import { ScopeComponent } from './components/customers/scope.component';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';

@NgModule({
  declarations: [ScopeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfoRoutingModule,
    FontAwesomeModule,
    TemplatesModule,
    CardModule,
    AccordionModule,
    DividerModule,
    DockModule,
  ],
})
export class InfoModule {}
