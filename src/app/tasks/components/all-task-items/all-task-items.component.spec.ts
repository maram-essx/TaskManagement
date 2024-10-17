import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskItemsComponent } from './all-task-items.component';

describe('AllTaskItemsComponent', () => {
  let component: AllTaskItemsComponent;
  let fixture: ComponentFixture<AllTaskItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTaskItemsComponent]
    });
    fixture = TestBed.createComponent(AllTaskItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
