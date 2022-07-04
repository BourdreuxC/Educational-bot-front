import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Reaction } from 'src/app/shared/classes/reaction';
import { ReactionsService } from '../../services/reactions.service';
import { addReactions } from '../../state/reactions.actions';
import { ReactionsState } from '../../state/reactions.reducer';
import { ReactionsEditComponent } from '../reactions-edit/reactions-edit.component';
import { selectReactions } from '../../state/reactions.selector';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-reactions-table',
  templateUrl: './reactions-table.component.html',
  styleUrls: ['./reactions-table.component.scss'],
})
export class ReactionsTableComponent implements OnInit {
  // MatPaginator Inputs
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  totalItem!: number;
  pageEvent!: PageEvent;
  /**
   * Reactions to display.
   */
  reactions: Reaction[] = [];
  constructor(
    private store: Store<ReactionsState>,
    private service: ReactionsService,
    public dialog: MatDialog
  ) {
    this.store.pipe(select(selectReactions)).subscribe((react) => {
      this.reactions = react;
    });
  }
  /**
   * Trigger actions on component initialization.
   */
  ngOnInit(): void {
    let pageEvent: PageEvent = new PageEvent();
    (pageEvent.pageIndex = 0), (pageEvent.pageSize = this.pageSize);

    this.getReactions(pageEvent);
  }

  /**
   * Get the reactions thanks to the service.
   */
  getReactions(pageEvent: PageEvent) {
    this.service.getReactions(pageEvent).subscribe((result: any) => {
      let reactions: Reaction[] = [];
      this.totalItem = result.totalCount;
      result.items.forEach((element: Reaction) => {
        reactions.push(
          new Reaction(element.id, element.reaction, element.value)
        );
      });

      this.store.dispatch(addReactions(reactions));
    });
    return pageEvent;
  }

  edit(reaction: Reaction) {
    const dialogRef = this.dialog.open(ReactionsEditComponent, {
      data: { reaction: reaction },
    });
    const closedDialog = dialogRef.beforeClosed();
    closedDialog.subscribe((value) => {
      this.ngOnInit();
      return value;
    });
  }
}
