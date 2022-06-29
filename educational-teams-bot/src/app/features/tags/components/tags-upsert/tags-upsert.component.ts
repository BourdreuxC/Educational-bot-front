import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/shared/classes/tag';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tags-upsert',
  templateUrl: './tags-upsert.component.html',
  styleUrls: ['./tags-upsert.component.scss'],
})
export class TagsUpsertComponent implements OnInit {
  newTag: FormControl;
  @Input() tag!: Tag;

  constructor(
    private tagsService: TagsService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.tag = data['tag'];
    this.newTag = new FormControl();
  }

  ngOnInit(): void {
    // This is intentional
  }

  delete(variant: any) {
    let id = this.tag.id;
    const object = {
      id,
      variant,
    };
    this.tagsService.upsertVariant(object);
  }

  onSubmit() {
    let id = this.tag.id;
    let variant = this.newTag.value;
    const object = {
      id,
      variant,
    };
    this.tagsService.upsertVariant(object);
  }
}
