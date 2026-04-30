import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseDetail } from './verse-detail';

describe('VerseDetail', () => {
  let component: VerseDetail;
  let fixture: ComponentFixture<VerseDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerseDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(VerseDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
