import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

import { DataCardComponent } from './components/data-card/data-card.component';

@NgModule({
  declarations: [DataCardComponent],
  imports: [CommonModule, TemplatesRoutingModule, CardModule, DividerModule],
})
export class TemplatesModule {}
