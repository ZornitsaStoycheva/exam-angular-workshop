import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPublishComponent } from './my-publish.component';

describe('MyPublishComponent', () => {
  let component: MyPublishComponent;
  let fixture: ComponentFixture<MyPublishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPublishComponent]
    });
    fixture = TestBed.createComponent(MyPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
