import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListBuyComponent } from './books-list-buy.component';

describe('BooksListBuyComponent', () => {
  let component: BooksListBuyComponent;
  let fixture: ComponentFixture<BooksListBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksListBuyComponent]
    });
    fixture = TestBed.createComponent(BooksListBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
