import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutoCrudService } from '../../services/auto-crud.service';

@Component({
  selector: 'app-auto-delete',
  templateUrl: './auto-delete.component.html',
  styleUrls: ['./auto-delete.component.scss']
})
export class AutoDeleteComponent implements OnInit {

  @Input() object!: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any,  private autoCrudService: AutoCrudService) {
    this.object = data['object']
   }

  ngOnInit(): void {
    // This is intentional
  }

  delete() {
    this.autoCrudService.autoDelete(this.object)

  }

}
