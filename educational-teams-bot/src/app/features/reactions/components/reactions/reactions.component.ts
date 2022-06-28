import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Reaction } from 'src/app/shared/classes/reaction';
import { ReactionsService } from '../../services/reactions.service';
import { addReactions } from '../../state/reactions.actions';
import { ReactionsState } from '../../state/reactions.reducer';
import { selectReactions } from '../../state/reactions.selector';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
})
export class ReactionsComponent implements OnInit {
  /**
   * Reactions to display.
   */
  reactions: Reaction[] = [];

  /**
   * Initializes a new instance of the ReactionsComponent class.
   * @param store Reaction store to use in this component.
   * @param service Reaction service to use in this component.
   */
  constructor(
    private store: Store<ReactionsState>,
    private service: ReactionsService
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
}
