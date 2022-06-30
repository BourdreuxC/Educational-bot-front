import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reaction } from 'src/app/shared/classes/reaction';
import { ReactionsService } from '../../services/reactions.service';

@Component({
  selector: 'app-reactions-edit',
  templateUrl: './reactions-edit.component.html',
  styleUrls: ['./reactions-edit.component.scss'],
})
export class ReactionsEditComponent implements OnInit {
  value: FormControl;
  @Input() reaction!: Reaction;

  constructor(
    private dialogRef: MatDialogRef<ReactionsEditComponent>,
    private reactionsService: ReactionsService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.reaction = data['reaction'];
    this.value = new FormControl(this.reaction.value);
  }

  ngOnInit(): void {
    // This is intentional
  }

  onSubmit() {
    let id = this.reaction.id;
    let reaction = this.reaction.reaction;
    let value = this.value.value;
    const object = {
      id,
      reaction,
      value,
    };
    this.reactionsService.editReaction(object).subscribe((val) => {
      this.dialogRef.close();
      return val;
    });
  }
}
