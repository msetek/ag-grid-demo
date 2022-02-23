import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublingEditorComponent } from './doubling-editor.component';

describe('DoublingEditorComponent', () => {
  let component: DoublingEditorComponent;
  let fixture: ComponentFixture<DoublingEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublingEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
