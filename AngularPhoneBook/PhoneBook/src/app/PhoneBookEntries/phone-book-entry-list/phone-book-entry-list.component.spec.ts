import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookEntryListComponent } from './phone-book-entry-list.component';

describe('PhoneBookEntryListComponent', () => {
  let component: PhoneBookEntryListComponent;
  let fixture: ComponentFixture<PhoneBookEntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookEntryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
