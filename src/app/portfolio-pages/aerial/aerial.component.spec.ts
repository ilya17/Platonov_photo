import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AerialComponent } from './aerial.component';

describe('AerialComponent', () => {
  let component: AerialComponent;
  let fixture: ComponentFixture<AerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
