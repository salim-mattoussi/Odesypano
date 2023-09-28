import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domain3Component } from './domain3.component';

describe('Domain3Component', () => {
  let component: Domain3Component;
  let fixture: ComponentFixture<Domain3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Domain3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Domain3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
