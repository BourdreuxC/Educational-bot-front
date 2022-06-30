import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactionsComponent } from './components/reactions/reactions.component';
import { ReactionsTableComponent } from './components/reactions-table/reactions-table.component';
import { ReactionsEditComponent } from './components/reactions-edit/reactions-edit.component';



@NgModule({
  declarations: [
    ReactionsComponent,
    ReactionsTableComponent,
    ReactionsEditComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ReactionsModule { }
