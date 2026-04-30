import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerse } from './add-verse';

describe('AddVerse', () => {
  let component: AddVerse;
  let fixture: ComponentFixture<AddVerse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVerse],
    }).compileComponents();

    fixture = TestBed.createComponent(AddVerse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
