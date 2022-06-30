import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { SpeakersComponent } from './speakers/components/speakers/speakers.component';
import { QuestionsComponent } from './questions/components/questions/questions.component';
import { TagsComponent } from './tags/components/tags/tags.component';
import { ReactionsComponent } from './reactions/components/reactions/reactions.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'speakers',
    component: SpeakersComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'tags',
    component: TagsComponent,
  },
  {
    path: 'reactions',
    component: ReactionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
