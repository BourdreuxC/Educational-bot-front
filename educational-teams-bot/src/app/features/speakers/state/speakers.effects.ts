import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SpeakersService } from '../services/speakers.service';

@Injectable()
export class SpeakersEffects {
  loadSpeakers$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Speakers] Add speakers'),
      mergeMap(() =>
        this.speakerService.getSpeakers().pipe(
          map((speakers) => ({
            type: '[Speakers] Speakers Loaded Success',
            payload: speakers,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  /**
   * Initializes a new instance of the SpeakersEffects class.
   */
  constructor(
    private action$: Actions,
    private speakerService: SpeakersService
  ) {}
}
