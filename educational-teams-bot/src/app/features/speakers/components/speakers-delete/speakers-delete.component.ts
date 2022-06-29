import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Speaker } from 'src/app/shared/classes/speaker';
import { SpeakersService } from '../../services/speakers.service';

@Component({
  selector: 'app-speakers-delete',
  templateUrl: './speakers-delete.component.html',
  styleUrls: ['./speakers-delete.component.scss'],
})
export class SpeakersDeleteComponent implements OnInit {
  @Input() speaker!: Speaker;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private speakersService: SpeakersService
  ) {
    this.speaker = data['speaker'];
  }

  ngOnInit(): void {
    // This is intentional
  }

  delete() {
    this.speakersService.deleteSpeaker(this.speaker);
  }
}
