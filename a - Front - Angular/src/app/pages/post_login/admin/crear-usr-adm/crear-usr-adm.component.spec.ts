import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsrAdmComponent } from './crear-usr-adm.component';

describe('CrearUsrAdmComponent', () => {
  let component: CrearUsrAdmComponent;
  let fixture: ComponentFixture<CrearUsrAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsrAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsrAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
