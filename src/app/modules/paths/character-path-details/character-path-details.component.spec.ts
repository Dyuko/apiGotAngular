import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPathDetailsComponent } from './character-path-details.component';

describe('CharacterPathDetailsComponent', () => {
  let component: CharacterPathDetailsComponent;
  let fixture: ComponentFixture<CharacterPathDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPathDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterPathDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
