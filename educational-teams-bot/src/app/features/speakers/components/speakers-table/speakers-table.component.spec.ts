import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersTableComponent } from './speakers-table.component';

describe('SpeakersTableComponent', () => {
  let component: SpeakersTableComponent;
  let fixture: ComponentFixture<SpeakersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
