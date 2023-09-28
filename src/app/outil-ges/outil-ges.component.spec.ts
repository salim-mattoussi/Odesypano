import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilGesComponent } from './outil-ges.component';

describe('OutilGesComponent', () => {
  let component: OutilGesComponent;
  let fixture: ComponentFixture<OutilGesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutilGesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutilGesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
