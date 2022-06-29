import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Reaction } from 'src/app/shared/classes/reaction';
import { ReactionsService } from '../../services/reactions.service';
import { addReactions } from '../../state/reactions.actions';
import { ReactionsState } from '../../state/reactions.reducer';
import { ReactionsEditComponent } from '../reactions-edit/reactions-edit.component';
import { selectReactions } from '../../state/reactions.selector';

@Component({
  selector: 'app-reactions-table',
  templateUrl: './reactions-table.component.html',
  styleUrls: ['./reactions-table.component.scss'],
})
export class ReactionsTableComponent implements OnInit {
  /**
   * Reactions to display.
   */
  reactions: Reaction[] = [];
  constructor(
    private store: Store<ReactionsState>,
    private service: ReactionsService,
    public dialog: MatDialog
  ) {
    this.store.pipe(select(selectReactions)).subscribe((q) => {
      this.reactions = q;
    });
  }
  /**
   * Trigger actions on component initialization.
   */
  ngOnInit(): void {
    this.getReactions();
  }

  /**
   * Get the reactions thanks to the service.
   */
  getReactions() {
    this.service.getReactions().subscribe((result: any) => {
      let reactions: Reaction[] = [];

      result.items.forEach((element: Reaction) => {
        reactions.push(
          new Reaction(element.id, element.reaction, element.value)
        );
      });

      this.store.dispatch(addReactions(reactions));
    });
  }

  edit(reaction: Reaction) {
    const dialogRef = this.dialog.open(ReactionsEditComponent, {
      data: { reaction: reaction },
    });
    const closedDialog = dialogRef.beforeClosed();
    closedDialog.subscribe((value) => {
      this.ngOnInit();
    });
  }
}
