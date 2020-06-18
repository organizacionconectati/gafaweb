import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageSectionComponent } from './products-page-section.component';

describe('ProductsPageSectionComponent', () => {
  let component: ProductsPageSectionComponent;
  let fixture: ComponentFixture<ProductsPageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
