import { createAction } from '@ngrx/store';
import { Reaction } from 'src/app/shared/classes/reaction';

export const addReactions = createAction(
  '[Reactions] Add reactions',
  (reactions: Reaction[]) => ({ reactions })
);
