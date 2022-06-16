import { Component,Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/shared/classes/speaker';
@Component({
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
@Input() speakers!: Speaker[]
  constructor() {
    this.speakers = [
    new Speaker("a6e97d96-1a4f-40f8-91e7-e8955da2711r", "Benjamin Lemec","Benjpresent",true,
      [
        "6f8dacaa-1486-4b42-a773-2500b68141c0",
        "a676ea86-7878-42ca-aba9-c547c5187f99",
        "db3a74a9-2bbf-4981-9631-d06f1b77f032"
      ])]
  }
  ngOnInit() {
   }
}
