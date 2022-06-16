import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AutoCrudService } from '../../services/auto-crud.service';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss'],
})
export class AutoListComponent {
  objectList: any;
  defaultList:any[] = [];
  type: any;
  tipe = require('tipe');
  constructor(@Inject(MAT_DIALOG_DATA) data: any ,private autoCrudService: AutoCrudService) {
    
    this.objectList = data['objectsList'];
    console.log(this.objectList);
    
    this.type = data['type'];
    this.listOfType(this.type).subscribe((element) => {
      this.defaultList = element['items'];
      
    })
  }
  propertyOfObject(object: any) {
    return Object.keys(object);
  }
  listOfType(type:any): Observable<any> {
    return this.autoCrudService.fetchList(type)
   }
   findElement(id:any) {
    let element = this.defaultList.find(element => {
      console.log(element);
      
      element['id'] = id
    })
    
    return element['variants'][0] ?? element['name'] ?? element['value'] ?? element['libelle'] ?? element['label']
   }
}
