import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsUpsertComponent } from './tags-upsert.component';

describe('TagsUpsertComponent', () => {
  let component: TagsUpsertComponent;
  let fixture: ComponentFixture<TagsUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
