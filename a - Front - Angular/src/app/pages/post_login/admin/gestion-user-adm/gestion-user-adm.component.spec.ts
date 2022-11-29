import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUserAdmComponent } from './gestion-user-adm.component';

describe('GestionUserAdmComponent', () => {
  let component: GestionUserAdmComponent;
  let fixture: ComponentFixture<GestionUserAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUserAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionUserAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
