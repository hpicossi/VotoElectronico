import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProdAdmComponent } from './crear-prod-adm.component';

describe('CrearProdAdmComponent', () => {
  let component: CrearProdAdmComponent;
  let fixture: ComponentFixture<CrearProdAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProdAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProdAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
