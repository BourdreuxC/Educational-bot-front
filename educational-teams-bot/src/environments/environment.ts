import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalGuard, MsalInterceptor } from '@azure/msal-angular';

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:5025/',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
  ],
  clientId: 'bc4ba3e1-6c39-4b50-ba44-6b6b37b7fd4d',
  tenantId: 'fefe9af7-f330-429d-8087-f5e656f7a7ce',
  redirectUri: 'http://localhost:4200',
  applicationInsights: {
    instrumentationKey: '6e99b84c-08d2-4a21-b689-09cbd01a7dd3',
  },
};
