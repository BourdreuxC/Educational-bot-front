import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalGuard, MsalInterceptor } from '@azure/msal-angular';

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:5025/api',
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
    instrumentationKey: '081b97a8-57ab-47fc-ac98-2b1523625a68',
  },
};
