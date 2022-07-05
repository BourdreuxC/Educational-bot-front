import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './components/questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { questionsFeatureKey, reducer } from './state/questions.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [QuestionsComponent, QuestionsTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatPaginatorModule,
    ScrollingModule,
    StoreModule.forFeature(questionsFeatureKey, reducer),
    SharedModule,
  ],
})
export class QuestionsModule {}
