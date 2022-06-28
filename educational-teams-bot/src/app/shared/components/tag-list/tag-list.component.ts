import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from '../../classes/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  tagList: Tag[];
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    
    this.tagList = data['tagList'];
    

  }
}
