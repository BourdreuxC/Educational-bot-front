import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAutoTable from './auto-table.reducer';

export const selectObjectsState =
  createFeatureSelector<fromAutoTable.AutoTableState>(
    fromAutoTable.objectsFeatureKey
  );

export const selectObjects = createSelector(
  selectObjectsState,
  (state: fromAutoTable.AutoTableState) => {
    return state.objects;
  }
);
