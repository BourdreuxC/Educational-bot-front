import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { SpeakersModule } from './speakers/speakers.module';
import { QuestionsModule } from './questions/questions.module';
import { TagsModule } from './tags/tags.module';
import { ReactionsModule } from './reactions/reactions.module';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, DashboardModule, SpeakersModule, FeaturesRoutingModule, QuestionsModule, TagsModule, ReactionsModule],
})
export class FeaturesModule {}
