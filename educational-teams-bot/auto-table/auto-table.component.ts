import { Component, Input } from '@angular/core';
import { Speaker } from '../../classes/speaker';
import { Tag } from '../../classes/tag';
import { MatDialog } from '@angular/material/dialog';
import { AutoListComponent } from '../auto-list/auto-list.component';
import { AutoUpsertComponent } from '../auto-upsert/auto-upsert.component';
import { AutoDeleteComponent } from '../auto-delete/auto-delete.component';

@Component({
  selector: 'app-auto-table',
  templateUrl: './auto-table.component.html',
  styleUrls: ['./auto-table.component.scss'],
})
export class AutoTableComponent {
  @Input() objectList!: any[];
  tipe = require('tipe');
  constructor(public dialog: MatDialog) {}

  propertyOfObject(object: any) {
    let keys = Object.keys(object)
    keys.forEach((element, index) =>{
      if(element == "id") {
        keys.splice(index, 1);
      }
    })
    
    
    return keys
  }
  listModal(objects: any[], type:any) {
    let dialogRef = this.dialog.open(AutoListComponent, {
      data: { objectsList: objects, type: type },
    });
  }
  edit(object: any) {
    let dialogRef = this.dialog.open(AutoUpsertComponent, {
      data: { object: object },
    });
  }

  delete(object:any) {
    
    let dialogRef = this.dialog.open(AutoDeleteComponent, {
      data: {object: object, }
    }
    );
  }
}
