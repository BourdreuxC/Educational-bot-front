import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReactions from './reactions.reducer';

export const selectReactionState =
  createFeatureSelector<fromReactions.ReactionsState>(
    fromReactions.reactionsFeatureKey
  );

export const selectReactions = createSelector(
  selectReactionState,
  (state: fromReactions.ReactionsState) => {
    return state.reactions;
  }
);
