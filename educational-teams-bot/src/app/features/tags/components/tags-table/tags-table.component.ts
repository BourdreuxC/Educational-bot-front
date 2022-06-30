import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Tag } from 'src/app/shared/classes/tag';
import { TagsService } from '../../services/tags.service';
import { addTags } from '../../state/tags.actions';
import { TagsState } from '../../state/tags.reducer';
import { TagsDeleteComponent } from '../tags-delete/tags-delete.component';
import { TagsEditComponent } from '../tags-edit/tags-edit.component';
import { selectTags } from '../../state/tags.selector';
import { TagsCreateComponent } from '../tags-create/tags-create.component';

@Component({
  selector: 'app-tags-table',
  templateUrl: './tags-table.component.html',
  styleUrls: ['./tags-table.component.scss'],
})
export class TagsTableComponent implements OnInit {
  /**
   * Tags to display.
   */
  tags: Tag[] = [];
  constructor(
    private store: Store<TagsState>,
    private service: TagsService,
    public dialog: MatDialog
  ) {
    this.store.pipe(select(selectTags)).subscribe((tags) => {
      this.tags = tags;
    });
  }

  /**
   * Trigger actions on component initialization.
   */
  ngOnInit(): void {
    this.getTags();
  }

  /**
   * Get the tags thanks to the service.
   */
  getTags() {
    this.service.getTags().subscribe((result: any) => {
      let tags: Tag[] = [];

      result.items.forEach((element: Tag) => {
        tags.push(new Tag(element.id, element.variants));
      });
      this.store.dispatch(addTags(tags));
      console.log(tags);
    });
  }

  edit(tag: Tag) {
    const dialogRef = this.dialog.open(TagsEditComponent, {
      data: { tag: tag },
    });
    const closedDialog = dialogRef.beforeClosed();
    closedDialog.subscribe((value) => {
      this.ngOnInit();
      return value;
    });
  }

  create() {
    const dialogRef = this.dialog.open(TagsCreateComponent, {});
    const closedDialog = dialogRef.beforeClosed();
    closedDialog.subscribe((value) => {
      this.ngOnInit();
      return value;
    });
  }

  delete(tag: Tag) {
    const dialogRef = this.dialog.open(TagsDeleteComponent, {
      data: { tag: tag },
    });
    const closedDialog = dialogRef.beforeClosed();
    closedDialog.subscribe((value) => {
      this.ngOnInit();
      return value;
    });
  }
}
