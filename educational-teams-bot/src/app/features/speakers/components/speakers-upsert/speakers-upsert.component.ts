import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { TagsService } from 'src/app/features/tags/services/tags.service';
import { UsersService } from 'src/app/features/users/services/users.service';
import { Speaker } from 'src/app/shared/classes/speaker';
import { Tag } from 'src/app/shared/classes/tag';
import { User } from 'src/app/shared/classes/user';
import { SpeakersService } from '../../services/speakers.service';

@Component({
  selector: 'app-speakers-upsert',
  templateUrl: './speakers-upsert.component.html',
  styleUrls: ['./speakers-upsert.component.scss'],
})
export class SpeakersUpsertComponent implements OnInit {
  myForm!: FormGroup;
  tagOptions!: Tag[];
  idOptions: User[] = [];
  idTags: any[] = [];
  @Input() speaker: Speaker;

  constructor(
    private dialogRef: MatDialogRef<SpeakersUpsertComponent>,
    private usersService: UsersService,
    private tagsService: TagsService,
    private speakersService: SpeakersService,
    private fb: FormBuilder,

    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.speaker = data['speaker'];
    this.getTags().subscribe((tagList) => {
      this.tagOptions = tagList.items;
    });

    this.myForm = this.fb.group({});
    if (this.speaker != undefined) {
      this.myForm.addControl(
        'id',
        this.fb.control(this.speaker.id, Validators.required)
      );
      this.myForm.addControl(
        'name',
        this.fb.control(this.speaker.name, Validators.required)
      );
      this.myForm.addControl(
        'nickname',
        this.fb.control(this.speaker.nickname, Validators.required)
      );
      this.myForm.addControl('enabled', this.fb.control(this.speaker.enabled));
      this.speaker.tags.forEach((value) => {
        this.idTags.push(value.id);
      });
    } else {
      this.getUsers().subscribe((userList) => {
        this.idOptions = userList;
      });
      this.myForm.addControl('id', this.fb.control(null, Validators.required));
      this.myForm.addControl(
        'name',
        this.fb.control(null, Validators.required)
      );
      this.myForm.addControl(
        'nickname',
        this.fb.control(null, Validators.required)
      );
      this.myForm.addControl('enabled', this.fb.control(null));
    }
    this.myForm.addControl(
      'tags',
      this.fb.control(this.idTags, Validators.required)
    );
  }

  ngOnInit(): void {
    // This is intentional
  }

  getTags(): Observable<any> {
    let pageEvent: PageEvent = new PageEvent();
    (pageEvent.pageIndex = 0), pageEvent;

    return this.tagsService.getTags(pageEvent);
  }

  getUsers(): Observable<any> {
    return this.usersService.getUsers();
  }

  onSubmit() {
    if (this.myForm.valid) {
      const id = this.myForm.value.id;
      const tags = this.myForm.value.tags;
      const name = this.myForm.value.name;
      const nickname = this.myForm.value.nickname;
      const enabled = this.myForm.value.enabled;
      const object = {
        id,
        tags,
        name,
        nickname,
        enabled,
      };
      this.speakersService.upsertSpeaker(object).subscribe((value) => {
        this.dialogRef.close();
        return value;
      });
    }
  }
}
