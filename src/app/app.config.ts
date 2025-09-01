// import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FlatData } from './shared/api/flat.data';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),  
    provideHttpClient(),
    {
      provide: HttpClientInMemoryWebApiModule,
      useFactory: () => HttpClientInMemoryWebApiModule.forRoot(FlatData, { delay: 500 })
    },

    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HttpClientInMemoryWebApiModule,
      useFactory: () =>
        HttpClientInMemoryWebApiModule.forRoot(FlatData, { delay: 500 })
    }

  ]
};
