import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookEntriesComponent } from './phone-book-entries.component';

describe('PhoneBookEntriesComponent', () => {
  let component: PhoneBookEntriesComponent;
  let fixture: ComponentFixture<PhoneBookEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
