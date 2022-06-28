import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Reaction } from 'src/app/shared/classes/reaction';
import { ReactionsEditComponent } from '../reactions-edit/reactions-edit.component';

@Component({
  selector: 'app-reactions-table',
  templateUrl: './reactions-table.component.html',
  styleUrls: ['./reactions-table.component.scss']
})
export class ReactionsTableComponent implements OnInit {
  @Input() reactionList!: Reaction[];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  
  edit(reaction: Reaction) {
    let dialogRef = this.dialog.open(ReactionsEditComponent, {
      data: { reaction: reaction },
    });
  }
}

