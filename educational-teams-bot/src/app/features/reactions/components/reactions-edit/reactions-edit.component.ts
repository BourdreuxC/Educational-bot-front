import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reaction } from 'src/app/shared/classes/reaction';
import { ReactionsService } from '../../services/reactions.service';

@Component({
  selector: 'app-reactions-edit',
  templateUrl: './reactions-edit.component.html',
  styleUrls: ['./reactions-edit.component.scss']
})
export class ReactionsEditComponent implements OnInit {
  myForm!: FormGroup;
  @Input() reaction!: Reaction;


  constructor(private reactionsService: ReactionsService,private fb: FormBuilder,@Inject(MAT_DIALOG_DATA, ) data: any) {
    this.reaction = data['reaction']
    this.myForm = this.fb.group({});
    this.myForm.addControl("value", this.fb.control(this.reaction.value))


  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.reactionsService.editReaction(this.myForm)
  }
}
