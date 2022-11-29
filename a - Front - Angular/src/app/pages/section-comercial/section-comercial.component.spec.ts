import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComercialComponent } from './section-comercial.component';

describe('SectionComercialComponent', () => {
  let component: SectionComercialComponent;
  let fixture: ComponentFixture<SectionComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionComercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
