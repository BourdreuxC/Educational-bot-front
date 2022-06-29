import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


import { SharedModule } from 'src/app/shared/shared.module';
import { SpeakersTableComponent } from './components/speakers-table/speakers-table.component';
import { SpeakersUpsertComponent } from './components/speakers-upsert/speakers-upsert.component';
import { SpeakersDeleteComponent } from './components/speakers-delete/speakers-delete.component';

@NgModule({
  declarations: [SpeakersComponent, SpeakersTableComponent, SpeakersUpsertComponent, SpeakersDeleteComponent],
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

  ],
})
export class SpeakersModule {}
