import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TagsService } from '../services/tags.service';

@Injectable()
export class TagsEffects {
  loadTags$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Tags] Add tags'),
      mergeMap(() =>
        this.tagService.getTags().pipe(
          map((tags) => ({
            type: '[Tags] Tags Loaded Success',
            payload: tags,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  /**
   * Initializes a new instance of the TagsEffects class.
   */
  constructor(private action$: Actions, private tagService: TagsService) {}
}
