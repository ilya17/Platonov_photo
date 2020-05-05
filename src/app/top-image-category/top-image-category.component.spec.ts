import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopImageCategoryComponent } from './top-image-category.component';

describe('TopImageCategoryComponent', () => {
  let component: TopImageCategoryComponent;
  let fixture: ComponentFixture<TopImageCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopImageCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopImageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
