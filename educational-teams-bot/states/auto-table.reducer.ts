import { Action, createReducer, on } from '@ngrx/store';
import * as AutoTableActions from './auto-table.actions';
 
export const objectsFeatureKey = 'objects';
/**
 * Interface to use to manage questions state.
 */
 export interface AutoTableState {
    objects: any;
  }
  
  export const initialState: AutoTableState = {
    objects: null,
  };
  
  export const objectReducer = createReducer(
    initialState,
    on(AutoTableActions.addObjects, (state: AutoTableState, { objects }) => ({
      ...state,
      objects: objects,
    }))
  );
  
  export function reducer(
    state: AutoTableState | undefined,
    action: Action
  ): any {
    return objectReducer(state, action);
  }
