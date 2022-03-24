import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertEmptyComponent } from './alert-empty.component';

describe('AlertEmptyComponent', () => {
  let component: AlertEmptyComponent;
  let fixture: ComponentFixture<AlertEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
