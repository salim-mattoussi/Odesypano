import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domain4Component } from './domain4.component';

describe('Domain4Component', () => {
  let component: Domain4Component;
  let fixture: ComponentFixture<Domain4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Domain4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Domain4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
