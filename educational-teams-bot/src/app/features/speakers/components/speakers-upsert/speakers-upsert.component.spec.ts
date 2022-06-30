import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersUpsertComponent } from './speakers-upsert.component';

describe('SpeakersUpsertComponent', () => {
  let component: SpeakersUpsertComponent;
  let fixture: ComponentFixture<SpeakersUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
