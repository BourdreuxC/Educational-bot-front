import { createAction } from '@ngrx/store';
import { Speaker } from 'src/app/shared/classes/speaker';

export const addSpeakers = createAction(
  '[Speakers] Add speakers',
  (speakers: Speaker[]) => ({
    speakers,
  })
);
