import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersDeleteComponent } from './speakers-delete.component';

describe('SpeakersDeleteComponent', () => {
  let component: SpeakersDeleteComponent;
  let fixture: ComponentFixture<SpeakersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
