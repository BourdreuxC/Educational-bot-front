import { createReducer, on } from '@ngrx/store';
import { Reaction } from 'src/app/shared/classes/reaction';
import * as ReactionsActions from './reactions.actions';

export const reactionsFeatureKey = 'reactions';

/**
 * Interface to use to manage reactions state.
 */
export interface ReactionsState {
  reactions: Reaction[];
}

export const initialState: ReactionsState = {
  reactions: [],
};

export const reactionsReducer = createReducer(
  initialState,
  on(ReactionsActions.addReactions, (state: ReactionsState, { reactions }) => ({
    ...state,
    reactions: reactions,
  }))
);
