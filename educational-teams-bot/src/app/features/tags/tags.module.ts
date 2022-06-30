import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './components/tags/tags.component';
import { TagsTableComponent } from './components/tags-table/tags-table.component';
import { TagsEditComponent } from './components/tags-edit/tags-edit.component';
import { TagsDeleteComponent } from './components/tags-delete/tags-delete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TagsCreateComponent } from './components/tags-create/tags-create.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    TagsComponent,
    TagsTableComponent,
    TagsEditComponent,
    TagsDeleteComponent,
    TagsCreateComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
})
export class TagsModule {}
