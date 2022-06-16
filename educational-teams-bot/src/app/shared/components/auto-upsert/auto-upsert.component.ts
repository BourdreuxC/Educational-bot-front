import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AutoCrudService } from 'src/app/shared/services/auto-crud.service';
import { AutoTableState } from '../../states/auto-table.reducer';
import { selectObjects } from '../../states/auto-table.selector';
import { select, Store } from '@ngrx/store';
import { addObjects } from '../../states/auto-table.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-auto-upsert',
  templateUrl: './auto-upsert.component.html',
  styleUrls: ['./auto-upsert.component.scss']
})
export class AutoUpsertComponent implements OnInit {
  myForm!: FormGroup
  _object: any
  children?:any
  @Input()
  get object() {

    return this._object
  }
    set object(value: any) {
      const properties = this.propertyOfObject(value);
      this.objectProperties = properties.reduce((acc: ObjectProperties[], property) => {
        const propertyType = this.tipe(value[property])
        const propertyInfo : ObjectProperties = { propertyType, propertyName: property }
        if(propertyType === 'array' && property != "altIds") {
          
          this.listOfType(property).subscribe((list) => {
            
            propertyInfo.children = list['items']
            
          })
          
        }
        acc.push(propertyInfo)
        return acc
      }, [])

    this.myForm = this.fb.group({});
    this.objectProperties.forEach((object) => {
      this.myForm.addControl(object.propertyName, this.fb.control(value[object.propertyName]))
    });
    this._object = value;
  }
  objectProperties: ObjectProperties[] = [];
  tipe = require('tipe');
  constructor(private store: Store<AutoTableState>,private autoCrudService: AutoCrudService,private fb: FormBuilder,@Inject(MAT_DIALOG_DATA, ) data: any) {
    this.store.pipe(select(selectObjects)).subscribe((o) => {
      this.object = o;
    });
    this.object = data['object']


  }

  ngOnInit(): void {

  }
  propertyOfObject(object:any) {
    return Object.keys(object)

  }

  listOfType(type:any): Observable<any> {
   return this.autoCrudService.fetchList(type)
  }

  onSubmit() {
    this.autoCrudService.autoUpsert(this.myForm.value, this._object.constructor.name).subscribe((response) => {
    
    })
    
  }
}
interface ObjectProperties {
  propertyType: string,
  propertyName: string,
  children?: any
}
