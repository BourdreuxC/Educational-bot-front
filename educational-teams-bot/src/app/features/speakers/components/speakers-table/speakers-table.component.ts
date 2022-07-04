import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
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
  // MatPaginator Inputs
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  totalItem!: number;
  pageEvent!: PageEvent;
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
    {
      let pageEvent: PageEvent = new PageEvent();
      (pageEvent.pageIndex = 0), (pageEvent.pageSize = this.pageSize);

      this.getSpeakers(pageEvent);
    }
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
  getSpeakers(pageEvent: PageEvent) {
    this.service.getSpeakers(pageEvent).subscribe((result: any) => {
      let speakers: Speaker[] = [];
      this.totalItem = result.totalCount;
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
    return pageEvent;
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
