import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionsTableComponent } from './reactions-table.component';

describe('ReactionsTableComponent', () => {
  let component: ReactionsTableComponent;
  let fixture: ComponentFixture<ReactionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
