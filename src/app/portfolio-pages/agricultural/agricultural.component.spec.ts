import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalComponent } from './agricultural.component';

describe('AgriculturalComponent', () => {
  let component: AgriculturalComponent;
  let fixture: ComponentFixture<AgriculturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
