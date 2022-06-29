import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Speaker } from 'src/app/shared/classes/speaker';
import { TagListComponent } from 'src/app/shared/components/tag-list/tag-list.component';
import { SpeakersDeleteComponent } from '../speakers-delete/speakers-delete.component';
import { SpeakersUpsertComponent } from '../speakers-upsert/speakers-upsert.component';

@Component({
  selector: 'app-speakers-table',
  templateUrl: './speakers-table.component.html',
  styleUrls: ['./speakers-table.component.scss'],
})
export class SpeakersTableComponent implements OnInit {
  @Input() speakerList!: Speaker[];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // This is intentional
  }

  listModal(tagList: any[]) {
    this.dialog.open(TagListComponent, {
      data: { tagList: tagList },
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
