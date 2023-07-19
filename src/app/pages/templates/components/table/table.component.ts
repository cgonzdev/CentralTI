import { Component, Input } from '@angular/core';

import { Table } from '../../models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() title: string = 'default title';

  table: Table[] = [];
}
