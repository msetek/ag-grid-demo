import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { DoublingEditorComponent } from './doubling-editor/doubling-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid-demo';


  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price', editable: true, cellEditor: DoublingEditorComponent }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}
