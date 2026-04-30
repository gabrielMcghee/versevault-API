import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVerse } from './edit-verse';

describe('EditVerse', () => {
  let component: EditVerse;
  let fixture: ComponentFixture<EditVerse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVerse],
    }).compileComponents();

    fixture = TestBed.createComponent(EditVerse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
