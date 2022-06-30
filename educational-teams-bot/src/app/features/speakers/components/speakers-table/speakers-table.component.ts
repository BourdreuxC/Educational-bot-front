import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Speaker } from 'src/app/shared/classes/speaker';
import { TagListComponent } from 'src/app/shared/components/tag-list/tag-list.component';
import { SpeakersService } from '../../services/speakers.service';
import { addSpeakers } from '../../state/speakers.actions';
import { SpeakersState } from '../../state/speakers.reducer';
import { selectSpeakers } from '../../state/speakers.selector';
import { SpeakersDeleteComponent } from '../speakers-delete/speakers-delete.component';
import { SpeakersUpsertComponent } from '../speakers-upsert/speakers-upsert.component';

@Component({
  selector: 'app-speakers-table',
  templateUrl: './speakers-table.component.html',
  styleUrls: ['./speakers-table.component.scss'],
})
export class SpeakersTableComponent implements OnInit {
  /**
   * Speakers to display.
   */
  speakers: Speaker[] = [];
  constructor(
    private store: Store<SpeakersState>,
    private service: SpeakersService,
    private dialog: MatDialog
  ) {
    this.store.pipe(select(selectSpeakers)).subscribe((speakers) => {
      this.speakers = speakers;
    });
  }

  ngOnInit() {
    this.getSpeakers();
  }

  /**
   * Display a modal of the list.
   */
  listModal(tagList: any[]) {
    this.dialog.open(TagListComponent, {
      data: { tagList: tagList },
    });
  }

  /**
   * Get the speakers thanks to the service.
   */
  getSpeakers() {
    this.service.getSpeakers().subscribe((result: any) => {
      let speakers: Speaker[] = [];
      result.items.forEach((element: Speaker) => {
        speakers.push(
          new Speaker(
            element.id,
            element.name,
            element.nickname,
            element.enabled,
            element.tags
          )
        );
      });
      this.store.dispatch(addSpeakers(speakers));
    });
  }
  edit(speaker?: Speaker) {
    const dialogRef = this.dialog.open(SpeakersUpsertComponent, {
      data: { speaker: speaker },
    });
    const closedDialog = dialogRef.beforeClosed();
    closedDialog.subscribe((value) => {
      this.ngOnInit();
      return value;
    });
  }

  delete(speaker: Speaker) {
    const dialogRef = this.dialog.open(SpeakersDeleteComponent, {
      data: { speaker: speaker },
    });
    const closedDialog = dialogRef.beforeClosed();
    closedDialog.subscribe((value) => {
      this.ngOnInit();
      return value;
    });
  }
}
