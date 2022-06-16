import { Action, createAction } from '@ngrx/store';
 
export const addObjects = createAction(
    '[any] add objects',
    (objects: any[]) => ({ objects })
  );
 