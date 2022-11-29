import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUserAdmComponent } from './panel-user-adm.component';

describe('PanelUserAdmComponent', () => {
  let component: PanelUserAdmComponent;
  let fixture: ComponentFixture<PanelUserAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelUserAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelUserAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
