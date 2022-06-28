import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionsEditComponent } from './reactions-edit.component';

describe('ReactionsEditComponent', () => {
  let component: ReactionsEditComponent;
  let fixture: ComponentFixture<ReactionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
