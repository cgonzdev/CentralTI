import { Component, Input } from '@angular/core';
import * as FileSaver from 'file-saver';
import {
  faFileCsv,
  faFileExcel,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

import { Headers } from '../../models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() headers: Headers[] = [
    { id: 'red', title: 'red' },
    { id: 'blue', title: 'blue' },
    { id: 'yellow', title: 'yellow' },
  ];
  @Input() data: any = [{ red: 'red', blue: 'blue', yellow: 'yellow' }];
  @Input() caption: boolean = true;
  @Input() summary: boolean = true;

  selectedItem!: any;

  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faFilePdf = faFilePdf;

  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        (doc as any).autoTable(this.headers, this.data);
        doc.save('export.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'export');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
