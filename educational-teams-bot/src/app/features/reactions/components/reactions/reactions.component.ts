import { Component, OnInit } from '@angular/core';
import { Reaction } from 'src/app/shared/classes/reaction';

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
   */
  constructor() {}

  /**
   * Trigger actions on component initialization.
   */
  ngOnInit(): void {}
}
