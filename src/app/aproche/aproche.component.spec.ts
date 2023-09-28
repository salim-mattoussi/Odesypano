import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprocheComponent } from './aproche.component';

describe('AprocheComponent', () => {
  let component: AprocheComponent;
  let fixture: ComponentFixture<AprocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
