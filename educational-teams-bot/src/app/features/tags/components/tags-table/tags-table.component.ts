import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tag } from 'src/app/shared/classes/tag';
import { TagsDeleteComponent } from '../tags-delete/tags-delete.component';
import { TagsUpsertComponent } from '../tags-upsert/tags-upsert.component';

@Component({
  selector: 'app-tags-table',
  templateUrl: './tags-table.component.html',
  styleUrls: ['./tags-table.component.scss'],
})
export class TagsTableComponent implements OnInit {
  @Input() tagList!: Tag[];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // This is intentional
  }

  edit(tag: Tag) {
    this.dialog.open(TagsUpsertComponent, {
      data: { tag: tag },
    });
  }

  delete(tag: Tag) {
    this.dialog.open(TagsDeleteComponent, {
      data: { tag: tag },
    });
  }
}
