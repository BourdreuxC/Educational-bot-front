import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { questionsReducer } from './features/questions/state/questions.reducer';
import { ErrorHandlingService } from './shared/services/error-handling/error-handling.service';
import { ReactionsModule } from './features/reactions/reactions.module';
import { reactionsReducer } from './features/reactions/state/reactions.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReactionsEffects } from './features/reactions/state/reactions.effects';
import { tagsReducer } from './features/tags/state/tags.reducer';
import { speakersReducer } from './features/speakers/state/speakers.reducer';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';

const imports = [
  BrowserModule,
  AppRoutingModule,
  CommonModule,
  SharedModule,
  CoreModule,
  NgbModule,
  MatDialogModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatChipsModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  ScrollingModule,
  MsalModule.forRoot(
    new PublicClientApplication({
      auth: {
        clientId: environment.clientId,
        authority: `https://login.microsoftonline.com/${environment.tenantId}`,
        redirectUri: environment.redirectUri,
      },
      cache: {
        cacheLocation: 'localStorage',
      },
    }),
    {
      interactionType: InteractionType.Redirect, // MSAL Guard Configuration
      authRequest: {
        scopes: ['User.Read.All'],
      },
    },
    {
      interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
      protectedResourceMap: new Map([
        [`${environment.apiEndpoint}/`, [`User.Read.All`]],
        ['https://graph.microsoft.com', ['User.Read.All']],
      ]),
    }
  ),
  FeaturesModule,
  StoreModule.forRoot({
    questions: questionsReducer,
    reactions: reactionsReducer,
    tags: tagsReducer,
    speakers: speakersReducer,
  }),
  EffectsModule.forRoot([ReactionsEffects]),
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...imports,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactionsModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlingService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
