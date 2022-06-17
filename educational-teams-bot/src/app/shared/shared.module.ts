import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeExamplePipe } from './pipes/pipe-example.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AutoListComponent } from './components/auto-list/auto-list.component';
import { AutoTableComponent } from './components/auto-table/auto-table.component';
import { AutoUpsertComponent } from './components/auto-upsert/auto-upsert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ClassesModule } from './classes/classes.module';
import { AutoDeleteComponent } from './components/auto-delete/auto-delete.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

const declarations = [
  PipeExamplePipe,
  NavbarComponent,
  AutoListComponent,
  AutoTableComponent,
  AutoUpsertComponent,
  AutoDeleteComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    RouterModule,
    ClassesModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    PipeExamplePipe,
    NavbarComponent,
    AutoListComponent,
    AutoTableComponent,
    AutoUpsertComponent,
    AutoDeleteComponent,
  ],
})
export class SharedModule {}
