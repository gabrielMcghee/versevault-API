import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseList } from './verse-list';

describe('VerseList', () => {
  let component: VerseList;
  let fixture: ComponentFixture<VerseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerseList],
    }).compileComponents();

    fixture = TestBed.createComponent(VerseList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
