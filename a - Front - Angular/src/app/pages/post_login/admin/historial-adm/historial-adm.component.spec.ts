import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialAdmComponent } from './historial-adm.component';

describe('HistorialAdmComponent', () => {
  let component: HistorialAdmComponent;
  let fixture: ComponentFixture<HistorialAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
