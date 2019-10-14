import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLapsComponent } from './list-laps.component';

describe('ListLapsComponent', () => {
  let component: ListLapsComponent;
  let fixture: ComponentFixture<ListLapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
