import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/classes/tag';

@Component({
  selector: 'app-dashboard',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tagList =   [
    new Tag("6f8dacaa-1486-4b42-a773-2500b68141c0", [
      "PHP",
      "php",
      "Php",
      "pHp"
    ]),
    new Tag("a676ea86-7878-42ca-aba9-c547c5187f99", [
      "C#",
      "c#"
    ]),
    new Tag("db3a74a9-2bbf-4981-9631-d06f1b77f032", [
      "JS",
      "Javascript"
    ]),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
