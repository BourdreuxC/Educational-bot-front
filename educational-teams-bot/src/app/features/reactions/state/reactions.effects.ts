import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReactionsService } from '../services/reactions.service';

@Injectable()
export class ReactionsEffects {
  loadReactions$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Reactions] Add reactions'),
      mergeMap(() =>
        this.reactionService.getReactions().pipe(
          map((reactions) => ({
            type: '[Reactions] Reactions Loaded Success',
            payload: reactions,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  /**
   * Initializes a new instance of the ReactionsEffects class.
   */
  constructor(
    private action$: Actions,
    private reactionService: ReactionsService
  ) {}
}
