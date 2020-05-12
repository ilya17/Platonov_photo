import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportageComponent } from './reportage.component';

describe('ReportageComponent', () => {
  let component: ReportageComponent;
  let fixture: ComponentFixture<ReportageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
