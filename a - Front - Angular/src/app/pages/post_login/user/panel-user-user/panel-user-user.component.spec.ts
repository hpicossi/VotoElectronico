import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUserUserComponent } from './panel-user-user.component';

describe('PanelUserUserComponent', () => {
  let component: PanelUserUserComponent;
  let fixture: ComponentFixture<PanelUserUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelUserUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelUserUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
