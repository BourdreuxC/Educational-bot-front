import { Component, OnInit } from '@angular/core';
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
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tags-table',
  templateUrl: './tags-table.component.html',
  styleUrls: ['./tags-table.component.scss'],
})
export class TagsTableComponent implements OnInit {
  // MatPaginator Inputs
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  totalItem!: number;
  pageEvent!: PageEvent;
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
    let pageEvent: PageEvent = new PageEvent();
    pageEvent.pageIndex = 0;
    pageEvent.pageSize = this.pageSize;

    this.getTags(pageEvent);
  }

  /**
   * Get the tags thanks to the service.
   */
  getTags(pageEvent: PageEvent) {
    this.service.getTags(pageEvent).subscribe((result: any) => {
      let tags: Tag[] = [];
      this.totalItem = result.totalCount;
      result.items.forEach((element: Tag) => {
        tags.push(new Tag(element.id, element.variants));
      });
      this.store.dispatch(addTags(tags));
    });
    return pageEvent;
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
