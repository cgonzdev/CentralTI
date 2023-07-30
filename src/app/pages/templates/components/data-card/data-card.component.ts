import { Component, Input } from '@angular/core';

import { Card } from '../../models/data-card.model';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
})
export class DataCardComponent {
  @Input() title: string = 'default title';
  @Input() cards!: Card[];
}
