import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraUserComponent } from './compra-user.component';

describe('CompraUserComponent', () => {
  let component: CompraUserComponent;
  let fixture: ComponentFixture<CompraUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
