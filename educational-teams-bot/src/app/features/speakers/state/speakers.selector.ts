import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSpeakers from './speakers.reducer';

export const selectSpeakerState =
  createFeatureSelector<fromSpeakers.SpeakersState>(
    fromSpeakers.speakersFeatureKey
  );

export const selectSpeakers = createSelector(
  selectSpeakerState,
  (state: fromSpeakers.SpeakersState) => {
    return state.speakers;
  }
);
