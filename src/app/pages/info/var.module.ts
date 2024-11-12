import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [AccordionModule, ButtonModule, ToastModule],
  providers: [MessageService],
})
export class VarModule {}
