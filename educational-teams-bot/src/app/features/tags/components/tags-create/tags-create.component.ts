import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tags-create',
  templateUrl: './tags-create.component.html',
  styleUrls: ['./tags-create.component.scss'],
})
export class TagsCreateComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  variants: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<TagsCreateComponent>,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    // This is intentional
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add variant
    if (value) {
      this.variants.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(variant: string): void {
    const index = this.variants.indexOf(variant);

    if (index >= 0) {
      this.variants.splice(index, 1);
    }
  }

  onSubmit() {
    let variants = this.variants;
    const object = {
      variants,
    };
    this.tagsService.createTag(object).subscribe((value) => {
      this.dialogRef.close();
      return value;
    });
  }
}
