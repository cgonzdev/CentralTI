import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemplatesModule } from '../templates/templates.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InfoRoutingModule } from './info-routing.module';
import { ScopeComponent } from './components/scope/scope.component';
import { ScopeHomeComponent } from './components/scope/home.component';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DropdownModule } from 'primeng/dropdown';
import { TimelineModule } from 'primeng/timeline';

import { VarModule } from './var.module';

@NgModule({
  declarations: [ScopeComponent, ScopeHomeComponent],
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
    DropdownModule,
    TimelineModule,
    VarModule,
  ],
})
export class InfoModule {}
