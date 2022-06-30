import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/shared/classes/tag';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tags-delete',
  templateUrl: './tags-delete.component.html',
  styleUrls: ['./tags-delete.component.scss'],
})
export class TagsDeleteComponent implements OnInit {
  @Input() tag!: Tag;

  constructor(
    private dialogRef: MatDialogRef<TagsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private tagsService: TagsService
  ) {
    this.tag = data['tag'];
  }

  ngOnInit(): void {
    // This is intentional
  }

  delete() {
    this.tagsService.deleteTag(this.tag.id).subscribe((value) => {
      this.dialogRef.close();
      return value;
    });
  }
}
