import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Speaker } from 'src/app/shared/classes/speaker';
import { TagListComponent } from 'src/app/shared/components/tag-list/tag-list.component';
import { SpeakersService } from '../../services/speakers.service';
import { addSpeakers } from '../../state/speakers.actions';
import { SpeakersState } from '../../state/speakers.reducer';
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
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // This is intentional
  }

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
      console.log(speakers);
    });
  }
  edit(speaker: Speaker) {
    this.dialog.open(SpeakersUpsertComponent, {
      data: { speaker: speaker },
    });
  }

  delete(speaker: Speaker) {
    this.dialog.open(SpeakersDeleteComponent, {
      data: { speaker: speaker },
    });
  }
}
