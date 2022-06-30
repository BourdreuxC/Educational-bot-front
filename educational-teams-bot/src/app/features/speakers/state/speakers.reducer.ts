import { createReducer, on } from '@ngrx/store';
import { Speaker } from 'src/app/shared/classes/speaker';
import * as SpeakersActions from './speakers.actions';

export const speakersFeatureKey = 'speakers';

/**
 * Interface to use to manage speakers state.
 */
export interface SpeakersState {
  speakers: Speaker[];
}

export const initialState: SpeakersState = {
  speakers: [],
};

export const speakersReducer = createReducer(
  initialState,
  on(SpeakersActions.addSpeakers, (state: SpeakersState, { speakers }) => ({
    ...state,
    speakers: speakers,
  }))
);
