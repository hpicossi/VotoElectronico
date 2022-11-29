import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProdAdmComponent } from './gestion-prod-adm.component';

describe('GestionProdAdmComponent', () => {
  let component: GestionProdAdmComponent;
  let fixture: ComponentFixture<GestionProdAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProdAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProdAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
