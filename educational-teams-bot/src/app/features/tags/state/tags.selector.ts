import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTags from './tags.reducer';

export const selectTagState = createFeatureSelector<fromTags.TagsState>(
  fromTags.tagsFeatureKey
);

export const selectTags = createSelector(
  selectTagState,
  (state: fromTags.TagsState) => {
    return state.tags;
  }
);
