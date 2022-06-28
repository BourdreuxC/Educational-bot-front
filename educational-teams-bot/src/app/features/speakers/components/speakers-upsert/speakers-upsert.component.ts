import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TagsService } from 'src/app/features/tags/services/tags.service';
import { Speaker } from 'src/app/shared/classes/speaker';
import { Tag } from 'src/app/shared/classes/tag';
import { SpeakersService } from '../../services/speakers.service';

@Component({
  selector: 'app-speakers-upsert',
  templateUrl: './speakers-upsert.component.html',
  styleUrls: ['./speakers-upsert.component.scss']
})
export class SpeakersUpsertComponent implements OnInit {
  myForm!: FormGroup;
  tagOptions!: Tag[];
  @Input() speaker!: Speaker;


  constructor(private tagsService: TagsService, private speakersService: SpeakersService,private fb: FormBuilder,@Inject(MAT_DIALOG_DATA, ) data: any) {
    this.speaker = data['speaker']
  this.getTags().subscribe(tagList => {
    this.tagOptions = tagList.items;
    })
    this.myForm = this.fb.group({});
    this.myForm.addControl("name", this.fb.control(this.speaker.name))
    this.myForm.addControl("nickname", this.fb.control(this.speaker.nickname))
    this.myForm.addControl("enabled", this.fb.control(this.speaker.enabled))
    this.myForm.addControl("tags", this.fb.control(this.speaker.tags))


  }

  ngOnInit(): void {

  }

  getTags(): Observable<any> {
    return this.tagsService.getTags()
   }

  onSubmit() {
    console.log(this.myForm.value);
    this.speakersService.upsertSpeaker(this.myForm)
  }
}

