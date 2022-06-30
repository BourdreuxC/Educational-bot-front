import { createReducer, on } from '@ngrx/store';
import { Tag } from 'src/app/shared/classes/tag';
import * as TagsActions from './tags.actions';

export const tagsFeatureKey = 'tags';

/**
 * Interface to use to manage tags state.
 */
export interface TagsState {
  tags: Tag[];
}

export const initialState: TagsState = {
  tags: [],
};

export const tagsReducer = createReducer(
  initialState,
  on(TagsActions.addTags, (state: TagsState, { tags }) => ({
    ...state,
    tags: tags,
  }))
);
