import { createAction } from '@ngrx/store';
import { Tag } from 'src/app/shared/classes/tag';

export const addTags = createAction('[Tags] Add tags', (tags: Tag[]) => ({
  tags,
}));
