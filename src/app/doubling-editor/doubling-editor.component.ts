import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

@Component({
  selector: 'app-doubling-editor',
  templateUrl: './doubling-editor.component.html',
  styleUrls: ['./doubling-editor.component.scss']
})
export class DoublingEditorComponent implements ICellEditorAngularComp, AfterViewInit  {
  private params: any;
  public value!: number;

  @ViewChild('input', { read: ViewContainerRef }) public input!: ViewContainerRef;

  ngAfterViewInit() {
    setTimeout(() => this.input.element.nativeElement.focus());
  }

  agInit(params: ICellEditorParams): void {
    this.params = params;

    this.value = parseInt(this.params.value);
  }

  getValue(): any {
    return this.value * 2;
  }

  isCancelBeforeStart(): boolean {
    return false;
  }

  isCancelAfterEnd(): boolean {
    return this.value > 1000;
  }
}
